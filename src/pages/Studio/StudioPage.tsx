import { Box, Flex, Stack, useToast } from '@chakra-ui/react';
import styled from '@emotion/styled';
import copyToClipboard from 'copy-to-clipboard';
import React, {
  useCallback,
  useEffect, // useEffect,
  // useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { xonokai as colorscheme } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import {
  SCRIPTAPP_LIFECYCLE_ON_INIT,
  SCRIPTAPP_METHODS_SAY_TO_ALL,
} from '../../blocks/scriptapp';
import Navigation from '../../components/Navigation';
import { BasicActionBlock } from '../../components/zep-studio-blocks/actions/BasicActionBlock';
import { RepeatActionBlock } from '../../components/zep-studio-blocks/actions/RepeatActionBlock';
// import { ConditionStatementBlock } from '../../components/zep-studio-blocks/condition-statements/ConditionStatementBlock';
import { ConditionEndBlock } from '../../components/zep-studio-blocks/conditions/ConditionEndBlock';
import { ConditionForkBlock } from '../../components/zep-studio-blocks/conditions/ConditionForkBlock';
import { ConditionForkList } from '../../components/zep-studio-blocks/conditions/ConditionForkList';
import { ConditionStartBlock } from '../../components/zep-studio-blocks/conditions/ConditionStartBlock';
import { TriggerBlock } from '../../components/zep-studio-blocks/triggers/TriggerBlock';
import {
  ActionBlockDraft,
  BlockDraft,
  ConditionBlockDraft,
  TriggerBlockDraft,
} from '../../components/zep-studio-blocks/types';
import { blocksToCode } from '../../core/codegen';
import { blocksState } from '../../store/blocksState';
import { generatedCodeState } from '../../store/generatedCodeState';

export const StudioPage: React.FC = () => {
  const [blocks, setBlocks] = useRecoilState(blocksState);

  const calculatedBlocks = useMemo(() => {
    // return blocks;
    let _blocks: (
      | ((TriggerBlockDraft | ActionBlockDraft) & {
          blocks: ActionBlockDraft[];
        })
      | ConditionBlockDraft
    )[] = [];
    let prevIndex: number | null = null;
    for (const block of blocks) {
      if (block.type === 'trigger') {
        _blocks.push({ ...block, blocks: [] });
        prevIndex = _blocks.length - 1;
      } else if (block.type === 'condition') {
        _blocks.push(block);
        prevIndex = _blocks.length - 1;
      } else if (block.type === 'action') {
        if (prevIndex !== null) {
          const prevBlock = _blocks[prevIndex];
          if (prevBlock.type === 'trigger') {
            prevBlock.blocks.push(block);
          } else if (prevBlock.type === 'condition') {
            console.log(prevBlock.type, block);
            // NOTE: This will not occur for if/else (inserts here are not made here), but after condition block close(after condition-end)
            prevBlock.end.push(block);

            // remove duplicates in prevBlock.end using ids
            prevBlock.end = prevBlock.end.filter(
              (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i,
            );

            prevIndex = _blocks.length - 1;
          }
        }
      } else {
        console.log(block);
      }
    }
    return _blocks;
  }, [blocks]);

  const previewView = useRef<HTMLIFrameElement>(null);
  const refreshPreviewView = useCallback(() => {
    if (previewView.current) {
      previewView.current.src += '';
    }
  }, [previewView]);

  const [generatedCode, setGeneratedCode] = useRecoilState(generatedCodeState);
  useEffect(() => {
    setGeneratedCode(
      blocksToCode(
        blocks.find((v) => v.type === 'trigger') as any,
        blocks.filter((v) => v.type === 'action') as any,
      ),
    );
  }, [blocks, setGeneratedCode]);

  const [isPublished, setPublished] = useState<boolean>(false);
  const [isCodeShown] = useState<boolean>(true);

  const toast = useToast();
  const onClickCopy = useCallback(() => {
    copyToClipboard(generatedCode.trim());
    toast({
      title: 'Copied generated code!',
      status: 'success',
      duration: 6000,
      isClosable: true,
    });
  }, [generatedCode, toast]);

  return (
    <main>
      <Navigation onClickPublish={() => setPublished(true)} />
      <Box>
        <Flex h="100vh">
          <Stack
            marginTop="68px"
            w="full"
            h="fit-content"
            minH="calc(200vh - 68px)"
            padding="54px"
            paddingBottom="500px"
            bg={'gray.200'}
          >
            <BlockList>
              {calculatedBlocks.map((item, index) => {
                const setBlock = (block: Partial<BlockDraft>) => {
                  const newBlocks = [...blocks];
                  newBlocks[index] = {
                    ...newBlocks[index],
                    ...block,
                  } as BlockDraft;
                  setBlocks(newBlocks);
                };

                const onAddNewBlock = (
                  blockType: string,
                  position:
                    | ['location', string, 'if' | 'else']
                    | ['below', string],
                ) => {
                  let newBlock: BlockDraft | null = null;
                  if (blockType === 'condition') {
                    const id = uuidv4();
                    newBlock = {
                      id,
                      type: 'condition',
                      if: [],
                      else: [],
                      end: [],
                    } as ConditionBlockDraft;
                    // } else if (blockType === SCRIPTAPP_METHODS_SAY_TO_ALL) {
                  } else {
                    newBlock = {
                      id: uuidv4(),
                      type: 'action',
                      action:
                        blockType === 'repeat'
                          ? 'repeat'
                          : SCRIPTAPP_METHODS_SAY_TO_ALL,
                      blocks: [{ id: uuidv4() }],
                      variables:
                        blockType === 'repeat'
                          ? []
                          : [
                              {
                                type: 'text',
                                fieldName: 'TEXT',
                                value: '',
                              },
                            ],
                    } as ActionBlockDraft;
                  }
                  if (!newBlock) {
                    return;
                  }

                  if (position[0] === 'below') {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const [_, blockId] = position;
                    // place block under block with id blockId
                    const newBlocks = [...blocks];

                    // blockindex should be the largest number, greater than indexOf(block.id === blockId) and before the next block.type !== 'condition'
                    let blockIndex = 0;
                    for (let i = 0; i < newBlocks.length; i++) {
                      if (newBlocks[i].id === blockId) {
                        blockIndex = i;
                        break;
                      }
                    }
                    for (let i = blockIndex + 1; i < newBlocks.length; i++) {
                      if (newBlocks[i].type !== 'condition') {
                        blockIndex = i;
                        break;
                      }
                    }
                    newBlocks.splice(blockIndex + 1, 0, newBlock);
                    setBlocks(newBlocks);
                  } else {
                    // position is [block id, 'if' | 'else']
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const [_, blockId, positionType] = position as [
                      'location',
                      string,
                      'if' | 'else',
                    ];

                    const newBlocks = [...blocks];
                    const blockIndex = newBlocks.findIndex(
                      (block) => block.id === blockId,
                    );
                    if (blockIndex === -1) {
                      return;
                    }
                    if (positionType === 'if') {
                      (newBlocks[blockIndex] as ConditionBlockDraft).if.push(
                        newBlock,
                      );
                    }
                    if (positionType === 'else') {
                      (newBlocks[blockIndex] as ConditionBlockDraft).else.push(
                        newBlock,
                      );
                    }
                    setBlocks(newBlocks);
                  }
                };

                if (item.type === 'trigger') {
                  return (
                    <TriggerBlock
                      key={item.id}
                      blockId={item.id}
                      trigger={item.trigger}
                      setBlock={setBlock}
                      onAddNewBlock={onAddNewBlock}
                    >
                      {item.blocks.map((block) => (
                        <BasicActionBlock key={block.id} block={block} />
                      ))}
                    </TriggerBlock>
                  );
                }

                if (item.type === 'condition') {
                  return (
                    <React.Fragment key={item.id}>
                      <StrightArrow />
                      <ConditionStartBlock
                        blockId={item.id}
                        onAddNewBlock={onAddNewBlock}
                      >
                        {/* <ConditionStatementBlock />
                        <ConditionStatementBlock isLastItem /> */}
                      </ConditionStartBlock>

                      <ConditionForkList>
                        <ConditionForkBlock
                          blockId={item.id}
                          satisfied
                          onAddNewBlock={onAddNewBlock}
                        >
                          {item.if.map((block) => {
                            if (block.type === 'condition') {
                              return null;
                            }
                            if (block.type === 'action') {
                              console.log(block);
                              if (block.action === 'repeat') {
                                return (
                                  <RepeatActionBlock
                                    key={block.id}
                                    // action={block.action}
                                  >
                                    {(block as any).blocks.map(
                                      (block: BlockDraft) => {
                                        return (
                                          <BasicActionBlock
                                            key={block.id}
                                            block={block as ActionBlockDraft}
                                          />
                                        );
                                      },
                                    )}
                                  </RepeatActionBlock>
                                );
                              }
                              return (
                                <BasicActionBlock
                                  key={block.id}
                                  block={block}
                                />
                              );
                            }
                            return null;
                          })}
                          {/* <BasicActionBlock /> */}
                        </ConditionForkBlock>
                        <ConditionForkBlock
                          blockId={item.id}
                          satisfied={false}
                          onAddNewBlock={onAddNewBlock}
                        >
                          {item.else.map((block) => {
                            if (block.type === 'condition') {
                              return null;
                            }
                            if (block.type === 'action') {
                              return (
                                <BasicActionBlock
                                  key={block.id}
                                  block={block}
                                />
                              );
                            }
                            return null;
                          })}
                        </ConditionForkBlock>
                      </ConditionForkList>

                      <ConditionEndBlock
                        blockId={item.id}
                        onAddNewBlock={onAddNewBlock}
                      >
                        {item.end.map((block) => {
                          if (block.type === 'condition') {
                            return null;
                          }
                          if (block.type === 'action') {
                            return (
                              <BasicActionBlock key={block.id} block={block} />
                            );
                          }
                          return null;
                        })}
                      </ConditionEndBlock>
                    </React.Fragment>
                  );
                }

                return null;
              })}
            </BlockList>
          </Stack>
          <Stack
            w="30vw"
            maxW="30vw"
            minW="30vw"
            minH="200vh"
            position="relative"
            spacing={10}
            alignItems="flex-start"
            bg="#1d1e22"
          >
            <Stack
              position="sticky"
              w="full"
              top="0"
              left="0"
              right="0"
              paddingTop="68"
            >
              <Stack w="100%" h="calc(60vh - 68px)">
                <iframe
                  title="zep-preview"
                  src="https://zep.us/play/8j7NaQ"
                  ref={previewView}
                  height={'100%'}
                ></iframe>
              </Stack>
              <CodeContainer>
                <CodeHeader>
                  <CodeLanguage>JS</CodeLanguage>
                  <CopyButton onClick={onClickCopy}>Copy</CopyButton>
                </CodeHeader>

                {isCodeShown && (
                  <HighlightContainer>
                    <SyntaxHighlighter language="js" style={colorscheme}>
                      {generatedCode}
                    </SyntaxHighlighter>
                  </HighlightContainer>
                )}
              </CodeContainer>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </main>
  );
};

const BlockList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;

const StrightArrow: React.FC = () => (
  <StrightArrowContainer>
    <svg
      width="16"
      height="51"
      viewBox="0 0 16 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.29289 50.7071C7.68342 51.0976 8.31658 51.0976 8.70711 50.7071L15.0711 44.3431C15.4616 43.9526 15.4616 43.3195 15.0711 42.9289C14.6805 42.5384 14.0474 42.5384 13.6569 42.9289L8 48.5858L2.34315 42.9289C1.95262 42.5384 1.31946 42.5384 0.928932 42.9289C0.538408 43.3195 0.538408 43.9526 0.928932 44.3431L7.29289 50.7071ZM7 0V50H9V0H7Z"
        fill="#868E96"
      />
    </svg>
  </StrightArrowContainer>
);
const StrightArrowContainer = styled.div`
  padding: 4px 0;
  display: flex;
`;

const CodeContainer = styled.div`
  margin-top: 0 !important;
  width: 100%;
  background-color: #1d1e22;

  display: flex;
  flex-direction: column;
`;
const CodeHeader = styled.div`
  padding: 14px 20px 4px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
const CodeLanguage = styled.span`
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.0125em;

  /* gray/02 */

  color: #e3e7ec;
`;
const CopyButton = styled.button`
  display: flex;
  padding: 6px 16px;
  align-items: center;
  justify-content: center;

  /* gray/04 */

  background: #4d5359;
  border-radius: 30px;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.0125em;

  /* gray/00 */

  color: #ffffff;
`;

const HighlightContainer = styled.div`
  display: flex;

  pre {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    border: 0 !important;
    background: transparent !important;
  }
`;
