import { Center } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { ZEPStudioIcon } from '../../ZEPStudioIcon';

type Props = {};

export const BlockFooter: React.FC<Props> = () => {
  return (
    <Container>
      <Center gap="8px">
        <ZEPStudioIcon icon="icon_plus_24" size={24} />
        <ButtonTitle>Create a new block</ButtonTitle>
      </Center>
    </Container>
  );
};

const Container = styled.button`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;

  /* gray/00 */

  background: #ffffff;
  border-radius: 0px 0px 12px 12px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f2f2f2;
  }
`;

const ButtonTitle = styled.div`
  /* body/01 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* gray/03 */

  color: #adb5bd;
`;
