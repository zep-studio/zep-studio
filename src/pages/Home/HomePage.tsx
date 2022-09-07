import styled from '@emotion/styled';

import { BadgeList } from './components/BadgeList';
import { FunctionCard } from './components/FunctionCard';
import { SectionTitle } from './components/SectionTitle';
import { TopButtons } from './components/TopButtons';

const BADGES = [
  'All',
  '✍️  Productive',
  '🎊 Event',
  '📚 Education',
  '🎊 Entertainment',
  '🛍 Commerce',
  'Etc',
];

const FUNCTION_CARDS = [
  {
    imageURL: '/assets/functions/function-thumbnail-01.png',
    title: 'Space entry',
    description: 'Actions when entering a space',
    badge: '🎊 Event',
  },
  {
    imageURL: '/assets/functions/function-thumbnail-02.png',
    title: 'Attendance check',
    description: 'Actions when characters collide',
    badge: '🎊 Event',
  },
  {
    imageURL: '/assets/functions/function-thumbnail-03.png',
    title: 'Play music',
    description: 'Play music under certain conditions',
    badge: '🎊 Entertainment',
  },
  {
    imageURL: '/assets/functions/function-thumbnail-04.png',
    title: 'Examples with Time',
    description: 'A function at a specified time interval(ms)',
    badge: '✍️  Productive',
  },
  {
    imageURL: '/assets/functions/function-thumbnail-05.png',
    title: 'Customer service',
    description: 'Actions when a player send a message',
    badge: '🛍 Commerce',
  },
  {
    imageURL: '/assets/functions/function-thumbnail-06.png',
    title: 'Attendance check',
    description: 'Actions whenever a player leaves',
    badge: '📚 Education',
  },
];

export const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <TopButtons />

        <Header>
          <Information>
            <TitleJustForSEO>ZEP studio</TitleJustForSEO>
            <TitleTypography src="/assets/brands/zep-studio-typography.svg" />
            <Description>Create your own world easily!</Description>
          </Information>
          <SectionTitle count={24}>Recommended functions</SectionTitle>
        </Header>

        <BadgeList badges={BADGES} />

        <CardList>
          {FUNCTION_CARDS.map((item) => (
            <FunctionCard key={item.imageURL} {...item} />
          ))}
        </CardList>
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
  position: relative;

  padding: 40px 32px;

  background: #ffffff;
  /* Shadow/box02 */

  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const TitleJustForSEO = styled.h1`
  display: none;
`;
const TitleTypography = styled.img`
  width: 224.21px;
  height: 40px;
`;

const Description = styled.p`
  /* body/01 */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* gray/04 */

  color: #7e8992;
`;

const CardList = styled.ul`
  margin-top: 32px;
  width: 100%;
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  row-gap: 36px;
`;
