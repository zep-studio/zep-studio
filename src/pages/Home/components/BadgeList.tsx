import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

type Props = {
  badges: string[];
  active?: string;
};

export const BadgeList: React.FC<Props> = ({ badges, active }) => {
  return (
    <Container>
      {badges.map((item) => {
        const isActive = active === item;
        return (
          <Badge key={item} $active={isActive}>
            {item}
          </Badge>
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  margin-top: 20px;

  display: flex;
  align-items: center;
  gap: 8px;
`;

type BadgeProps = {
  $active?: boolean;
};
const Badge = styled.li<BadgeProps>`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 16px;

  /* gray/01 */

  background: #f1f3f5;
  border-radius: 30px;

  /* body/01-bold */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.0125em;

  /* gray/04 */

  color: #4d5359;

  ${({ $active }) =>
    $active &&
    css`
      /* main/01 */

      color: #6559f6;
    `};
`;
