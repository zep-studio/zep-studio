import styled from '@emotion/styled';

import { ZEPStudioIcon } from '../../ZEPStudioIcon';
import { BlockFooter } from '../atoms/BlockFooter';
import { BlockHeader } from '../atoms/BlockHeader';
import { ControlBlockContainer } from '../atoms/ControlBlockContainer';
import { ControlBlockProps } from '../types';

type Props = ControlBlockProps & {
  onAddNewBlock: (
    blockType: string,
    position: [string, 'if' | 'else'] | 'below',
  ) => void;
};

export const ConditionStartBlock: React.FC<Props> = ({
  children,
  onAddNewBlock,
}) => {
  return (
    <Container>
      <Header>
        <ZEPStudioIcon icon="icon_conditon_24" color="white" size={24} />
        <Title>Condition</Title>
      </Header>
      {children}
      <BlockFooter
        parentBlockType="condition-start"
        onAddNewBlock={onAddNewBlock}
      />
    </Container>
  );
};

const Container = styled(ControlBlockContainer)`
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
