import styled from '@emotion/styled';

import { BlockFooter } from '../atoms/BlockFooter';
import { BlockHeader } from '../atoms/BlockHeader';
import { ControlBlockContainer } from '../atoms/ControlBlockContainer';
import { ControlBlockProps } from '../types';

type Props = ControlBlockProps & {
  blockId: string;
  satisfied: boolean;
  onAddNewBlock: (
    blockType: string,
    position: ['location', string, 'if' | 'else'] | ['below', string],
  ) => void;
};

export const ConditionForkBlock: React.FC<Props> = ({
  blockId,
  satisfied,
  children,
  onAddNewBlock,
}) => {
  return (
    <Container>
      <Header>
        {satisfied ? (
          <Title>If satisfied</Title>
        ) : (
          <Title>If not satisfied</Title>
        )}
      </Header>
      {children}
      <BlockFooter
        parentBlockId={blockId}
        parentBlockType={`condition-fork-${satisfied ? 'if' : 'else'}`}
        onAddNewBlock={onAddNewBlock}
      />
    </Container>
  );
};

const Container = styled(ControlBlockContainer)`
  width: fit-content;
  min-width: 300px;
  min-height: 200px;
`;
const Header = styled(BlockHeader)`
  background: #7e8992;

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
