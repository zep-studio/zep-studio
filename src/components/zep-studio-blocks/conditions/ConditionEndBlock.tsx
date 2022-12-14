import styled from '@emotion/styled';

import { ZEPStudioIcon } from '../../ZEPStudioIcon';
import { BlockFooter } from '../atoms/BlockFooter';
import { BlockHeader } from '../atoms/BlockHeader';
import { ControlBlockContainer } from '../atoms/ControlBlockContainer';
import { ControlBlockProps } from '../types';

type Props = ControlBlockProps & {
  blockId: string;
  onAddNewBlock: (
    blockType: string,
    position: ['location', string, 'if' | 'else'] | ['below', string],
  ) => void;
};

export const ConditionEndBlock: React.FC<Props> = ({
  blockId,
  children,
  onAddNewBlock,
}) => {
  return (
    <Container>
      <Header>
        <ZEPStudioIcon icon="icon_action_24" color="white" size={24} />
        <Title>Condition</Title>
      </Header>
      {children}
      <BlockFooter
        parentBlockId={blockId}
        parentBlockType="condition-end"
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
  background: #74c1d9;

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
