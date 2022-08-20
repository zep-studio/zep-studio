import { Center } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ZEPStudioIcon } from '../../ZEPStudioIcon';
import { BlockAttribute } from '../atoms/BlockAttribute';
import { BlockHandle } from '../atoms/BlockHandle';
import { BlockRemoveButton } from '../atoms/BlockRemoveButton';
import { ControlBlockProps } from '../types';

type Props = ControlBlockProps & {};

export const RepeatActionBlock: React.FC<Props> = ({ children }) => {
  return (
    <RepeatScopeList $hasChildren={!!children}>
      <Container className="action-block">
        <RepeatIndicator>
          <ZEPStudioIcon icon="icon_repeat_24" size={24} color="#ADB5BD" />
        </RepeatIndicator>
        <BlockHandle />
        <Center gap="8px">
          <BlockActionName>Say</BlockActionName>
          <BlockVariable>text</BlockVariable>
          <BlockSuffix>to All</BlockSuffix>
        </Center>
        <BlockRemoveButton />
      </Container>

      {!!children && <ChildrenContent>{children}</ChildrenContent>}
    </RepeatScopeList>
  );
};

type RepeatScopeListProps = {
  $hasChildren: boolean;
};
const RepeatScopeList = styled.div<RepeatScopeListProps>`
  display: flex;
  flex-direction: column;

  ${({ $hasChildren }) =>
    $hasChildren &&
    css`
      /* gray/02 */

      border-bottom: 1px solid #e3e7ec;
    `};
`;
const ChildrenContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .action-block {
    padding-left: 36px;
  }
`;

const Container = styled.div`
  /* Auto layout */

  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;

  /* gray/00 */

  background: #f3f5f9;
`;

const RepeatIndicator = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  /* gray/02 */

  background: #e3e7ec;
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
