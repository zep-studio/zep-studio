import styled from '@emotion/styled';

import { BlockFooter } from './atoms/BlockFooter';
import { BlockHeader } from './atoms/BlockHeader';

type Props = {
  satisfied: boolean;
};

export const ConditionForkBlock: React.FC<Props> = ({ satisfied }) => {
  return (
    <Container>
      <Header>
        {satisfied ? (
          <Title>If satisfied</Title>
        ) : (
          <Title>If not satisfied</Title>
        )}
      </Header>
      <BlockFooter />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
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
