import { Center } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

import { BlockAttribute } from '../atoms/BlockAttribute';
import { BlockHandle } from '../atoms/BlockHandle';
import { BlockRemoveButton } from '../atoms/BlockRemoveButton';
import { raiseAncestorControlBlock } from '../atoms/ControlBlockContainer';
import { Selector, SelectorWrapper } from '../atoms/Selector';

type Props = {};

export const BasicActionBlock: React.FC<Props> = () => {
  const [isActionSelectorOpen, setActionSelectorOpen] =
    useState<boolean>(false);
  const [isVariableSelectorOpen, setVariableSelectorOpen] =
    useState<boolean>(false);
  const cleanupRef = useRef<any>(null);

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
                  setTimeout(() => cleanupRef.current?.());
                }
              });
            }}
          >
            Say
          </BlockActionName>

          <AnimatePresence>
            {isActionSelectorOpen && (
              <Selector
                items={Array.from({ length: 10 }, (_, i) => ({
                  title: 'Touch location',
                  value: 'Touch',
                  description:
                    "When a player arrives in the specified 'specified area'",
                }))}
              />
            )}
          </AnimatePresence>
        </SelectorWrapper>

        <SelectorWrapper>
          <BlockVariable
            $isSelectorOpen={isVariableSelectorOpen}
            onClick={(event) => {
              cleanupRef.current = raiseAncestorControlBlock(event.target);
              setVariableSelectorOpen((prev) => !prev);
              setTimeout(() => {
                if (isVariableSelectorOpen) {
                  setTimeout(() => cleanupRef.current?.());
                }
              });
            }}
          >
            text
          </BlockVariable>

          <AnimatePresence>
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
          </AnimatePresence>
        </SelectorWrapper>

        <BlockSuffix>to All</BlockSuffix>
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

  background: #f0eefe;

  /* body/01-bold */

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.0125em;

  /* main/04 */

  color: #6559f6;
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
