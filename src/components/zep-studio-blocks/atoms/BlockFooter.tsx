import { Center } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

import { SCRIPTAPP_METHODS_SAY_TO_ALL } from '../../../blocks/scriptapp';
import { ZEPStudioIcon } from '../../ZEPStudioIcon';
import { raiseAncestorControlBlock } from './ControlBlockContainer';
import { Selector, SelectorWrapper } from './Selector';

const NEW_BLOCKS = [
  {
    title: 'Condition',
    value: 'condition',
    description: 'Add a new if/else condition',
    allowedParentBlockType: ['trigger', 'condition-end'],
  },
  {
    title: 'Say to all',
    value: SCRIPTAPP_METHODS_SAY_TO_ALL,
    description: 'Displays text in the chat window',
    allowedParentBlockType: ['trigger', 'condition-fork', 'condition-end'],
  },
];

type Props = {
  parentBlockType: string;
  onAddNewBlock: (
    blockType: string,
    position: [string, 'if' | 'else'] | 'below',
  ) => void;
};

export const BlockFooter: React.FC<Props> = ({
  parentBlockType,
  onAddNewBlock,
}) => {
  const [isSelectorOpen, setSelectorOpen] = useState<boolean>(false);
  const cleanupRef = useRef<any>(null);
  const centerRef = useRef<any>(null);

  return (
    <SelectorWrapper>
      <Container
        onClick={(event) => {
          cleanupRef.current = raiseAncestorControlBlock(event.target);
          setSelectorOpen((prev) => !prev);
          setTimeout(() => {
            if (isSelectorOpen) {
              setTimeout(() => cleanupRef.current?.(), 200);
            }
          });
        }}
      >
        <Center gap="8px" ref={centerRef}>
          <ZEPStudioIcon icon="icon_plus_24" size={24} />
          <ButtonTitle>Create a new block</ButtonTitle>
        </Center>
      </Container>

      <AnimatePresence>
        {isSelectorOpen && (
          <Selector
            items={NEW_BLOCKS.filter((v) =>
              v.allowedParentBlockType.includes(parentBlockType ?? ''),
            )}
            style={{ top: 48 + 8, left: 'unset', right: 82 }}
            onSelect={(value) => {
              onAddNewBlock?.(value, 'below');
              cleanupRef.current = raiseAncestorControlBlock(centerRef.current);

              setSelectorOpen((prev) => !prev);
              setTimeout(() => {
                if (isSelectorOpen) {
                  setTimeout(() => cleanupRef.current?.(), 200);
                }
              }, 200);
            }}
          />
        )}
      </AnimatePresence>
    </SelectorWrapper>
  );
};

const Container = styled.button`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;
  user-select: none;

  /* gray/00 */

  background: #ffffff;
  border-radius: 0px 0px 12px 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f2f2f2;
  }
`;

const ButtonTitle = styled.div`
  /* body/01 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* gray/03 */

  color: #adb5bd;
`;
