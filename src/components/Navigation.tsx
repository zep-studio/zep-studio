import { Center, Flex, useToast } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { publish } from '../core/publish';
import { zipZepApp } from '../core/zip';
import { generatedCodeState } from '../store/generatedCodeState';
import { ZEPStudioBadge } from './ZEPStudioBadge';
import { ZEPStudioIcon } from './ZEPStudioIcon';

const token = `.AspNetCore.Session=CfDJ8F1b9ttwOadPjVuGHkYnESqZ1oE%2BpTWK0jW7XELN0zg7F%2FT3iW%2BPRbaHSPbkz%2Fdkn2epqcmjynyDjmFyWrdotx%2BSYigPn9xGgWrR8xO2i0nloUdd7CeMxIcsbSGoovoiDk%2BOSWl1XewcM71P2i7ebpd4x6nMCIfbgcdk9qN5TYCQ; max-age=2592000; path=/; secure; samesite=lax; httponly`;

type NavigationProps = {
  onClickPublish?: () => void;
};
const Navigation: React.FC<NavigationProps> = ({ onClickPublish }) => {
  const toast = useToast();

  const generatedCode = useRecoilValue(generatedCodeState);

  const onPublishClick = useCallback(async () => {
    onClickPublish?.();
    try {
      const zip = await zipZepApp(generatedCode);
      const id = await publish({
        token,
        name: 'Hi ZEP Studio!',
        description: 'Published by ZEP Studio',
        file: zip,
        type: 2,
      });
      toast({
        title: 'Publish Successful!',
        description: "We've published your amazing ZEP App!",
        status: 'success',
        duration: 6000,
        isClosable: true,
      });
      document.querySelector('iframe')!.src += '';
      console.log(id);
    } catch (err) {
      console.error(err);
    }
  }, [generatedCode, onClickPublish, toast]);

  const navigate = useNavigate();

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
        <ZEPStudioIcon
          icon="icon_prev_32"
          size={32}
          color="#adb5bd"
          onClick={() => navigate(-1)}
        />
        <GrayBreadcrumb>
          <Link to="/">ZEP studio</Link>
        </GrayBreadcrumb>
        <GrayBreadcrumb>/</GrayBreadcrumb>
        <TitleBreadcrumb>Create a new function</TitleBreadcrumb>

        <ZEPStudioBadge>Block #1</ZEPStudioBadge>
      </Center>

      <Center gap="19px">
        <PublishButton onClick={onPublishClick}>Publish</PublishButton>
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
  z-index: 1000;
`;

const GrayBreadcrumb = styled.span`
  /* subtitle/02 */

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
