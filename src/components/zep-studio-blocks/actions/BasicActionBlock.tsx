import { Center } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { BlockAttribute } from '../atoms/BlockAttribute';
import { BlockHandle } from '../atoms/BlockHandle';
import { BlockRemoveButton } from '../atoms/BlockRemoveButton';

type Props = {};

export const BasicActionBlock: React.FC<Props> = () => {
  return (
    <Container className="action-block">
      <BlockHandle />
      <Center gap="8px">
        <BlockActionName>Say</BlockActionName>
        <BlockVariable>text</BlockVariable>
        <BlockSuffix>to All</BlockSuffix>
      </Center>
      <BlockRemoveButton />
    </Container>
  );
};

const Container = styled.div`
  /* Auto layout */

  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;

  /* gray/00 */

  background: #ffffff;
`;

const BlockActionName = styled(BlockAttribute)`
  /* gray/00 */

  background: #ffffff;
  /* gray/02 */

  border: 1px solid #e3e7ec;
  border-radius: 8px;

  /* gray/06 */

  color: #262a2e;
`;

const BlockVariable = styled(BlockAttribute)`
  /* main/01 */

  background: #f0eefe;

  /* body/01-bold */

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.0125em;

  /* main/04 */

  color: #6559f6;
`;

const BlockSuffix = styled(BlockAttribute)`
  /* sub/01 */

  background: #e8f8fd;

  /* body/01-bold */

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.0125em;

  /* sub/02 */

  color: #74c1d9;
`;
