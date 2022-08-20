import styled from '@emotion/styled';

import { BlockFooter } from '../atoms/BlockFooter';
import { BlockHeader } from '../atoms/BlockHeader';
import { ControlBlockContainer } from '../atoms/ControlBlockContainer';
import { ControlBlockProps } from '../types';

type Props = ControlBlockProps & {
  satisfied: boolean;
  onAddNewBlock: (
    blockType: string,
    position: [string, 'if' | 'else'] | 'below',
  ) => void;
};

export const ConditionForkBlock: React.FC<Props> = ({
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
        parentBlockType="condition-fork"
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

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* gray/00 */

  color: #ffffff;
`;
