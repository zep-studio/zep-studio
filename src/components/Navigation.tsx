import { Center, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { ZEPStudioBadge } from './ZEPStudioBadge';
import { ZEPStudioIcon } from './ZEPStudioIcon';

const Navigation: React.FC = () => {
  return (
    <Container
      h="68px"
      zIndex="99"
      bg="gray.600"
      color={'white'}
      p={3}
      justify={'space-between'}
    >
      <Center gap="12px">
        <ZEPStudioIcon icon="icon_prev_32" size={32} color="#adb5bd" />
        <GrayBreadcrumb>
          <Link to="/">ZEP studio</Link>
        </GrayBreadcrumb>
        <GrayBreadcrumb>/</GrayBreadcrumb>
        <TitleBreadcrumb>Create a new function</TitleBreadcrumb>

        <ZEPStudioBadge>Block #1</ZEPStudioBadge>
      </Center>

      <Center gap="19px">
        <PublishButton>Publish</PublishButton>
        <SquareButton>
          <ZEPStudioIcon icon="icon_more_24" size={24} color="#ADB5BD" />
        </SquareButton>
      </Center>
    </Container>
  );
};

export default Navigation;

const Container = styled(Flex)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const GrayBreadcrumb = styled.span`
  /* subtitle/02 */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  /* gray/03 */

  color: #adb5bd;
`;
const TitleBreadcrumb = styled.span`
  /* subtitle/02 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  /* gray/00 */

  color: #ffffff;
`;

const PublishButton = styled.button`
  background: #6559f6;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 13px 26px;

  /* body/01-bold */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.0125em;

  /* lightTheme/grayscale/gray0 */

  color: #f8f9fa;
`;
const SquareButton = styled.button`
  width: 45px;
  height: 45px;

  /* gray/04 */

  border: 1.5px solid #4d5359;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
