import styled from '@emotion/styled';

import { ZEPStudioIcon } from '../ZEPStudioIcon';
import { BlockFooter } from './atoms/BlockFooter';
import { BlockHeader } from './atoms/BlockHeader';

type Props = {};

export const ConditionEndBlock: React.FC<Props> = () => {
  return (
    <Container>
      <Header>
        <ZEPStudioIcon icon="icon_action_24" color="white" size={24} />
        <Title>Condition</Title>
      </Header>
      <BlockFooter />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
`;
const Header = styled(BlockHeader)`
  background: #74c1d9;

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