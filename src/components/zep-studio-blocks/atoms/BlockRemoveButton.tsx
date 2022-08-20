import styled from '@emotion/styled';

import { ZEPStudioIcon } from '../../ZEPStudioIcon';

type Props = {};

export const BlockRemoveButton: React.FC<Props> = () => {
  return (
    <Button>
      <ZEPStudioIcon icon="icon_close_24" size={24} color="#ADB5BD" />
    </Button>
  );
};

const Button = styled.button`
  margin: ${-30 + 24}px;
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
