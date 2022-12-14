import styled from '@emotion/styled';

type BlockAttributeProps = {
  $isSelectorOpen?: boolean;
};
export const BlockAttribute = styled.span<BlockAttributeProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 30px 12px 16px;
  width: fit-content;
  height: 43px;
  gap: 10px;

  /* gray/01 */

  background: #f3f5f9;
  border-radius: 8px;

  /* body/01 */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  /* gray/04 */

  color: #7e8992;

  cursor: pointer;
  user-select: none;
`;
