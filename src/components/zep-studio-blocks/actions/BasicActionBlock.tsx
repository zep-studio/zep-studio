import { Center } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import produce from 'immer';
import { useMemo, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { SCRIPTAPP_METHODS_SAY_TO_ALL } from '../../../blocks/scriptapp';
import { blocksState } from '../../../store/blocksState';
import { BlockAttribute } from '../atoms/BlockAttribute';
// import { NEW_BLOCKS } from '../atoms/BlockFooter';
import { BlockHandle } from '../atoms/BlockHandle';
import { BlockRemoveButton } from '../atoms/BlockRemoveButton';
import { raiseAncestorControlBlock } from '../atoms/ControlBlockContainer';
import { Selector, SelectorWrapper } from '../atoms/Selector';
import { ActionBlockDraft, VariableDraft } from '../types';
import { RepeatActionBlock } from './RepeatActionBlock';

export const NEW_BLOCKS = [
  {
    hideOnAction: true,
    title: 'Condition',
    value: 'condition',
    description: 'Add a new if/else condition',
    allowedParentBlockType: ['trigger', 'condition-end'],
  },
  {
    hideOnAction: false,
    title: 'Say',
    value: SCRIPTAPP_METHODS_SAY_TO_ALL,
    description: 'Displays text in the chat window',
    allowedParentBlockType: [
      'trigger',
      'condition-fork-if',
      'condition-fork-else',
      'condition-end',
    ],
  },
  {
    hideOnAction: false,
    title: 'Show center label',
    value: '-',
    description:
      'Displays text for 1 second at the designated location for all players',
    allowedParentBlockType: [
      'trigger',
      'condition-fork-if',
      'condition-fork-else',
      'condition-end',
    ],
  },
  {
    hideOnAction: false,
    title: 'Show YouTube Widget',
    value: '-',
    description:
      'Plays the video from the YouTube link at the specified align position for all players',
    allowedParentBlockType: [
      'trigger',
      'condition-fork-if',
      'condition-fork-else',
      'condition-end',
    ],
  },
  {
    hideOnAction: false,
    title: 'Play Sound',
    value: '-',
    description: 'Function to play the sound file',
    allowedParentBlockType: [
      'trigger',
      'condition-fork-if',
      'condition-fork-else',
      'condition-end',
    ],
  },
  {
    hideOnAction: false,
    title: 'Stop Sound',
    value: '-',
    description: 'Function to stop all the playing sound',
    allowedParentBlockType: [
      'trigger',
      'condition-fork-if',
      'condition-fork-else',
      'condition-end',
    ],
  },
  {
    hideOnAction: false,
    title: 'Spawn Player',
    value: '-',
    description:
      'Function to move players to the designated X and Y coordinates',
    allowedParentBlockType: [
      'trigger',
      'condition-fork-if',
      'condition-fork-else',
      'condition-end',
    ],
  },
];

type Props = {
  block: ActionBlockDraft;
};

export const BasicActionBlock: React.FC<Props> = ({ block }) => {
  const [isActionSelectorOpen, setActionSelectorOpen] =
    useState<boolean>(false);
  const [isVariableSelectorOpen, setVariableSelectorOpen] =
    useState<boolean>(false);
  const cleanupRef = useRef<any>(null);

  const [blocks, setBlocks] = useRecoilState(blocksState);
  const [actionValue, setActionValue] = useState<string>('');
  // const [inputValue, setInputValue] = useState<string>('');

  const actionName = useMemo(() => {
    const action = NEW_BLOCKS.find(({ value }) => value === actionValue);
    return action ? action.title : null;
  }, [actionValue]);

  return (
    <Container className="action-block">
      <BlockHandle />
      <Center gap="8px">
        <SelectorWrapper>
          <BlockActionName
            $isSelectorOpen={isActionSelectorOpen}
            onClick={(event) => {
              cleanupRef.current = raiseAncestorControlBlock(event.target);
              setActionSelectorOpen((prev) => !prev);
              setTimeout(() => {
                if (isActionSelectorOpen) {
                  setTimeout(() => cleanupRef.current?.(), 200);
                }
              });
            }}
          >
            {actionName || 'Select...'}
          </BlockActionName>

          <AnimatePresence>
            {isActionSelectorOpen && (
              <Selector
                items={NEW_BLOCKS.filter((v) => !v.hideOnAction)}
                onSelect={(v) => {
                  setActionValue(v);

                  setActionSelectorOpen((prev) => !prev);
                  setTimeout(() => {
                    if (isActionSelectorOpen) {
                      setTimeout(() => cleanupRef.current?.(), 200);
                    }
                  });
                }}
                onDismiss={() => setActionSelectorOpen(false)}
              />
            )}
          </AnimatePresence>
        </SelectorWrapper>

        <SelectorWrapper>
          {block.variables?.map((variable) => (
            <BlockVariable
              key={variable.fieldName}
              $isSelectorOpen={isVariableSelectorOpen}
              onClick={(event) => {
                cleanupRef.current = raiseAncestorControlBlock(event.target);
                setVariableSelectorOpen((prev) => !prev);
                setTimeout(() => {
                  if (isVariableSelectorOpen) {
                    setTimeout(() => cleanupRef.current?.(), 200);
                  }
                });
              }}
            >
              <input
                style={{ backgroundColor: 'transparent' }}
                value={variable.value}
                onChange={(e) =>
                  setBlocks((prev) =>
                    produce(prev, (draft) => {
                      const actionBlock = draft.find(
                        (v) => v.id === block.id,
                      ) as ActionBlockDraft | undefined;
                      if (!actionBlock || !actionBlock.variables) {
                        return;
                      }

                      const variableItem = actionBlock.variables.find(
                        (v) => v.fieldName === variable.fieldName,
                      ) as VariableDraft | undefined;
                      if (!variableItem) {
                        return;
                      }
                      variableItem.value = e.target.value;
                    }),
                  )
                }
              />
            </BlockVariable>
          ))}

          {/* <AnimatePresence>
            {isVariableSelectorOpen && (
              <Selector
                type="secondary"
                items={Array.from({ length: 10 }, (_, i) => ({
                  title: 'Touch location',
                  value: 'Touch',
                  description:
                    "When a player arrives in the specified 'specified area'",
                }))}
              />
            )}
          </AnimatePresence> */}
        </SelectorWrapper>

        {actionName === 'Say' && <BlockSuffix>to All</BlockSuffix>}
      </Center>
      <BlockRemoveButton />
    </Container>
  );
};

const Container = styled.div`
  /* Auto layout */

  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;

  /* gray/00 */

  background: #ffffff;
`;

const BlockActionName = styled(BlockAttribute)`
  /* sub/01 */

  background: #e8f8fd;

  /* body/01-bold */

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.0125em;

  /* sub/02 */

  color: #74c1d9;
`;

const BlockVariable = styled(BlockAttribute)`
  /* main/01 */
  &,
  & > input {
    background: #f0eefe;

    /* body/01-bold */

    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.0125em;

    /* main/04 */

    color: #6559f6;

    &:focus {
      outline: 0;
    }
  }
`;

const BlockSuffix = styled(BlockAttribute)`
  /* gray/00 */

  background: #ffffff;
  /* gray/02 */

  border: 1px solid #e3e7ec;
  border-radius: 8px;

  /* gray/06 */

  color: #262a2e;
`;
