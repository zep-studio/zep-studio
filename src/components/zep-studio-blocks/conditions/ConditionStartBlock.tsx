import styled from '@emotion/styled';
import { useCallback, useState } from 'react';

import { ZEPStudioIcon } from '../../ZEPStudioIcon';
import { BlockFooter } from '../atoms/BlockFooter';
import { BlockHeader } from '../atoms/BlockHeader';
import { ControlBlockContainer } from '../atoms/ControlBlockContainer';
import { ConditionStatementBlock } from '../condition-statements/ConditionStatementBlock';
import { ControlBlockProps } from '../types';

type Props = ControlBlockProps & {
  blockId: string;
  onAddNewBlock: (
    blockType: string,
    position: ['location', string, 'if' | 'else'] | ['below', string],
  ) => void;
};

export type ConditionDraft = {
  left: string;
  operator: string;
  right: string;
};

export const ConditionStartBlock: React.FC<Props> = ({
  blockId,
  children,
  onAddNewBlock,
}) => {
  const [conditions, setConditions] = useState<ConditionDraft[]>([]);
  const onAddCondition = useCallback(() => {
    setConditions([
      {
        left: '',
        operator: '',
        right: '',
      },
    ]);
  }, []);
  return (
    <Container>
      <Header>
        <ZEPStudioIcon icon="icon_conditon_24" color="white" size={24} />
        <Title>Condition</Title>
      </Header>
      {/* {children} */}
      {conditions.map((item) => (
        <ConditionStatementBlock key={item.left} />
      ))}
      <BlockFooter
        parentBlockId={blockId}
        parentBlockType="condition-start"
        onAddCondition={onAddCondition}
        onAddNewBlock={onAddNewBlock}
      />
    </Container>
  );
};

const Container = styled(ControlBlockContainer)`
  width: fit-content;
  min-width: 300px;
`;
const Header = styled(BlockHeader)`
  background: #4d5359;

  gap: 16px;
`;

const Title = styled.span`
  /* subtitle/02 */

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* gray/00 */

  color: #ffffff;
`;
