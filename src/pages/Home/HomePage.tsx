import styled from '@emotion/styled';

import { SectionTitle } from './components/SectionTitle';

const BADGES = [
  'All',
  '✍️  Productive',
  '🎊 Event',
  '📚 Education',
  '🎊 Entertainment',
  '🛍 Commerce',
  'Etc',
];

export const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Information>
          <Title>ZEP studio</Title>
          <Description>Create your own world easily!</Description>

          <SectionTitle count={24}>Recommended functions</SectionTitle>
        </Information>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #292929;
`;
const Container = styled.main`
  width: 980px;
  height: 798px;
  overflow-y: scroll;

  padding: 40px 32px;

  background: #ffffff;
  /* Shadow/box02 */

  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;

  /* subtitle/01 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 41px;
  /* identical to box height */

  letter-spacing: 0.0025em;

  /* gray/05 */

  color: #212529;
`;
const Description = styled.p`
  /* body/01 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* gray/04 */

  color: #7e8992;
`;
