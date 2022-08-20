import { Center, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <Flex h="68px" bg="#262A2E" color={'white'} p={3} justify={'space-between'}>
      <Center gap="12px">
        <IconImage />
        <GrayBreadcrumb>
          <Link to="/">ZEP studio</Link>
        </GrayBreadcrumb>
        <GrayBreadcrumb>/</GrayBreadcrumb>
        <TitleBreadcrumb>Create a new function</TitleBreadcrumb>
      </Center>
    </Flex>
  );
};

export default Navigation;

const IconImage = styled.span`
  width: 32px;
  height: 32px;
  display: flex;
  background-color: #adb5bd;
  mask-image: url('/assets/icons/icon_prev_32.svg');
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
