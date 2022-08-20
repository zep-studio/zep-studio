import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';

import {
  SCRIPTAPP_EVENT_LISTENERS_ON_SAY,
  SCRIPTAPP_LIFECYCLE_ON_INIT,
} from '../../blocks/scriptapp';
import { ZEPStudioIcon } from '../ZEPStudioIcon';
import { BlockAttribute } from './atoms/BlockAttribute';
import { BlockFooter } from './atoms/BlockFooter';
import { BlockHeader } from './atoms/BlockHeader';
import {
  ControlBlockContainer,
  raiseAncestorControlBlock,
} from './atoms/ControlBlockContainer';
import { Selector, SelectorWrapper } from './atoms/Selector';
import { ControlBlockProps, TriggerBlockDraft } from './types';

const TRIGGERS = [
  {
    title: 'When app is initialized',
    value: SCRIPTAPP_LIFECYCLE_ON_INIT,
    description: 'Called once when running the app the first time',
  },
  {
    title: 'When someone says something',
    value: SCRIPTAPP_EVENT_LISTENERS_ON_SAY,
    description: 'When a player says something in the default chat UI',
  },
];

type Props = ControlBlockProps & {
  trigger: string | undefined;
  setBlock: (block: Partial<TriggerBlockDraft>) => void;
  onAddNewBlock: (blockType: string) => void;
};

export const TriggerBlock: React.FC<Props> = ({
  children,
  trigger,
  setBlock,
  onAddNewBlock,
}) => {
  const [isTriggerSelectorOpen, setTriggerSelectorOpen] =
    useState<boolean>(false);
  const cleanupRef = useRef<any>(null);

  const triggerDisplayName = useMemo(() => {
    if (!trigger) {
      return null;
    }
    return TRIGGERS.find((v) => v.value === trigger)?.title ?? null;
  }, [trigger]);

  return (
    <Container>
      <Header>
        <ZEPStudioIcon icon="icon_trigger_24" color="white" size={24} />
        <Title>When the trigger</Title>

        <SelectorWrapper>
          <TriggerIntent
            $isSelectorOpen={isTriggerSelectorOpen}
            onClick={(event) => {
              cleanupRef.current = raiseAncestorControlBlock(event.target);
              setTriggerSelectorOpen((prev) => !prev);
              setTimeout(() => {
                if (isTriggerSelectorOpen) {
                  setTimeout(() => cleanupRef.current?.(), 200);
                }
              });
            }}
          >
            {triggerDisplayName || 'Select...'}
          </TriggerIntent>
          <AnimatePresence>
            {isTriggerSelectorOpen && (
              <Selector
                items={TRIGGERS}
                onSelect={(trigger) => {
                  setBlock({ trigger } as TriggerBlockDraft);

                  setTriggerSelectorOpen((prev) => !prev);
                  setTimeout(() => {
                    if (isTriggerSelectorOpen) {
                      setTimeout(() => cleanupRef.current?.(), 200);
                    }
                  });
                }}
              />
            )}
          </AnimatePresence>
        </SelectorWrapper>

        <Title>happens</Title>
      </Header>
      {children}
      <BlockFooter parentBlockType="trigger" onAddNewBlock={onAddNewBlock} />
    </Container>
  );
};

const Container = styled(ControlBlockContainer)`
  width: fit-content;
`;
const Header = styled(BlockHeader)`
  /* main/01 */

  background: #6559f6;

  gap: 12px;
`;

const Title = styled.span`
  /* subtitle/02 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* gray/00 */

  color: #ffffff;
`;

const TriggerIntent = styled(BlockAttribute)`
  padding: 12px;
  padding-left: 16px;

  /* white-10% */

  background: rgba(255, 255, 255, 0.1);

  /* body/01-bold */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.0125em;

  border: 2px solid transparent;

  /* gray/00 */

  color: #ffffff;

  transition: all 0.2s ease-in-out;

  ${({ $isSelectorOpen }) =>
    $isSelectorOpen &&
    css`
      /* white-10% */

      background: rgba(255, 255, 255, 0.1);
      /* white-10% */

      border: 2px solid rgba(255, 255, 255, 0.1);

      /* gray/02 */

      color: #e3e7ec;
    `};
`;
