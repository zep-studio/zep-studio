import styled from '@emotion/styled';

type Props = {
  children?: React.ReactNode;
  count?: number;
};
export const SectionTitle: React.FC<Props> = ({ children, count }) => {
  return (
    <Container>
      <SubtitleRow>
        <Subtitle>{children}</Subtitle>

        {typeof count !== 'undefined' && (
          <FunctionCount>{count.toLocaleString()}</FunctionCount>
        )}
      </SubtitleRow>

      <Divider />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const SubtitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;
const Subtitle = styled.h2`
  /* subtitle/02 */

  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  /* main/01 */

  color: #6559f6;
`;
const FunctionCount = styled.span`
  /* body/01 */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: right;

  /* gray/03 */

  color: #adb5bd;
`;

const Divider = styled.span`
  width: 100%;
  height: 2px;
  background-color: #6559f6;
`;
