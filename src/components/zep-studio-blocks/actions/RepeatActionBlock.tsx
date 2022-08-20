import { Center } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

import { ZEPStudioIcon } from '../../ZEPStudioIcon';
import { BlockAttribute } from '../atoms/BlockAttribute';
import { BlockHandle } from '../atoms/BlockHandle';
import { BlockRemoveButton } from '../atoms/BlockRemoveButton';
import { raiseAncestorControlBlock } from '../atoms/ControlBlockContainer';
import { Selector, SelectorWrapper } from '../atoms/Selector';
import { ControlBlockProps } from '../types';

type Props = ControlBlockProps & {};

export const RepeatActionBlock: React.FC<Props> = ({ children }) => {
  const [isActionSelectorOpen, setActionSelectorOpen] =
    useState<boolean>(false);
  const [isVariableSelectorOpen, setVariableSelectorOpen] =
    useState<boolean>(false);
  const cleanupRef = useRef<any>(null);

  return (
    <RepeatScopeList $hasChildren={!!children}>
      <Container className="action-block">
        <RepeatIndicator>
          <ZEPStudioIcon icon="icon_repeat_24" size={24} color="#ADB5BD" />
        </RepeatIndicator>
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
              Say
            </BlockActionName>

            <AnimatePresence>
              {isActionSelectorOpen && (
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
          <SelectorWrapper>
            <BlockVariable
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
              text
            </BlockVariable>
            <AnimatePresence>
              {isVariableSelectorOpen && (
                <Selector
                  items={Array.from({ length: 10 }, (_) => ({
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

      {!!children && <ChildrenContent>{children}</ChildrenContent>}
    </RepeatScopeList>
  );
};

type RepeatScopeListProps = {
  $hasChildren: boolean;
};
const RepeatScopeList = styled.div<RepeatScopeListProps>`
  display: flex;
  flex-direction: column;

  ${({ $hasChildren }) =>
    $hasChildren &&
    css`
      /* gray/02 */

      border-bottom: 1px solid #e3e7ec;
    `};
`;
const ChildrenContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .action-block {
    padding-left: 36px;
  }
`;

const Container = styled.div`
  /* Auto layout */

  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;

  /* gray/00 */

  background: #f3f5f9;
`;

const RepeatIndicator = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  /* gray/02 */

  background: #e3e7ec;
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
