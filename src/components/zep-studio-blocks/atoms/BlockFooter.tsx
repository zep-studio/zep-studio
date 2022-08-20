import { Center } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

import { ZEPStudioIcon } from '../../ZEPStudioIcon';
import { raiseAncestorControlBlock } from './ControlBlockContainer';
import { Selector, SelectorWrapper } from './Selector';

type Props = {};

export const BlockFooter: React.FC<Props> = () => {
  const [isSelectorOpen, setSelectorOpen] = useState<boolean>(false);
  const cleanupRef = useRef<any>(null);

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
        <Center gap="8px">
          <ZEPStudioIcon icon="icon_plus_24" size={24} />
          <ButtonTitle>Create a new block</ButtonTitle>
        </Center>
      </Container>

      <AnimatePresence>
        {isSelectorOpen && (
          <Selector
            items={Array.from({ length: 10 }, (_, i) => ({
              title: 'Touch location',
              value: 'Touch',
              description:
                "When a player arrives in the specified 'specified area'",
            }))}
            style={{ top: 48 + 8, left: 'unset', right: 82 }}
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
