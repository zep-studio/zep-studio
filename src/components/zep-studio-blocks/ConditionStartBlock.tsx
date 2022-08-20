import styled from '@emotion/styled';

import { ZEPStudioIcon } from '../ZEPStudioIcon';
import { BlockFooter } from './atoms/BlockFooter';
import { BlockHeader } from './atoms/BlockHeader';
import { ControlBlockProps } from './types';

type Props = ControlBlockProps & {};

export const ConditionStartBlock: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header>
        <ZEPStudioIcon icon="icon_conditon_24" color="white" size={24} />
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
`;
const Header = styled(BlockHeader)`
  background: #4d5359;

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
