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
      color={props.color}
    />
  );
};

const IconImage = styled.span<{
  size: number;
  icon: string;
  color: string | undefined;
}>`
  display: flex;

  ${({ size }) => css`
    width: ${size}px;
    min-width: ${size}px;

    height: ${size}px;
    min-height: ${size}px;
  `};

  ${({ color, icon }) =>
    !color
      ? css`
          background-image: url('/assets/icons/${icon}.svg');
        `
      : !!icon &&
        css`
          mask-image: url('/assets/icons/${icon}.svg');
          mask-repeat: no-repeat;
          mask-size: contain;
          background-color: ${color};
        `};
`;
