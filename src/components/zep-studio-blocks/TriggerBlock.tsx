import styled from '@emotion/styled';

import { ZEPStudioIcon } from '../ZEPStudioIcon';
import { BlockAttribute } from './atoms/BlockAttribute';
import { BlockFooter } from './atoms/BlockFooter';
import { BlockHeader } from './atoms/BlockHeader';

type Props = {};

export const TriggerBlock: React.FC<Props> = () => {
  return (
    <Container>
      <Header>
        <ZEPStudioIcon icon="icon_trigger_24" color="white" size={24} />
        <Title>When the trigger</Title>
        <TriggerIntent>When someone says something</TriggerIntent>
        <Title>happens</Title>
      </Header>
      <BlockFooter />
    </Container>
  );
};

const Container = styled.div`
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

  /* gray/00 */

  color: #ffffff;
`;
