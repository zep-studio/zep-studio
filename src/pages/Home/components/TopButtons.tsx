import styled from '@emotion/styled';

import { ZEPStudioIcon } from '../../../components/ZEPStudioIcon';

type Props = {};

export const TopButtons: React.FC<Props> = () => {
  return (
    <AbsoluteContainer>
      <ButtonList>
        <OutlineButton>
          My functions <FunctionCount>3</FunctionCount>
        </OutlineButton>
        <PrimaryButton>Create my function</PrimaryButton>
      </ButtonList>

      <ZEPStudioIcon icon="icon_close_24" size={32} color="#262A2E" />
    </AbsoluteContainer>
  );
};

const AbsoluteContainer = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const ButtonList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const OutlineButton = styled.button`
  height: 45px;

  /* Auto layout */
  padding: 13px 26px;
  gap: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  /* gray/00 */

  background: #ffffff;
  /* main/04 */

  border: 1.5px solid #6559f6;
  border-radius: 8px;

  /* body/01-bold */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.0125em;

  /* main/04 */

  color: #6559f6;
`;
const FunctionCount = styled.span`
  color: #7e8992;
`;
const PrimaryButton = styled.button`
  height: 45px;

  padding: 13px 26px;
  gap: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  /* main/01 */

  background: #6559f6;
  border-radius: 8px;

  /* body/01-bold */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.0125em;

  /* lightTheme/grayscale/gray0 */

  color: #f8f9fa;
`;
