import { css } from '@emotion/react';
import styled from '@emotion/styled';

type ZEPStudioIconProps = {
  size: 24 | 32;
  icon: string;
  className?: string;
  color?: string;
};

export const ZEPStudioIcon: React.FC<ZEPStudioIconProps> = (props) => {
  return (
    <IconImage
      className={props.className}
      size={props.size}
      icon={props.icon}
      style={{ backgroundColor: props.color }}
    />
  );
};

const IconImage = styled.span<{ size: number; icon: string }>`
  display: flex;

  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `};

  ${({ icon }) =>
    !!icon &&
    css`
      mask-image: url('/assets/icons/${icon}.svg');
    `};
`;
