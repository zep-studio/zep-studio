import styled from '@emotion/styled';

import { ZEPStudioIcon } from '../ZEPStudioIcon';
import { BlockFooter } from './atoms/BlockFooter';
import { BlockHeader } from './atoms/BlockHeader';
import { ControlBlockProps } from './types';

type Props = ControlBlockProps & {};

export const ConditionEndBlock: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header>
        <ZEPStudioIcon icon="icon_action_24" color="white" size={24} />
        <Title>Condition</Title>
      </Header>
      {children}
      <BlockFooter />
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  min-width: 300px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.1));
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
