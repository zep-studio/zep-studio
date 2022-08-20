import styled from '@emotion/styled';

type Props = {
  imageURL?: string;
};

export const FunctionCard: React.FC<Props> = ({ imageURL }) => {
  return (
    <Container>
      <ImageWrapper>
        {!!imageURL && <Image src={imageURL} />}
        <BadgeList />
      </ImageWrapper>

      <FunctionInformation>
        <FunctionName>FunctionCard</FunctionName>
        <FunctionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </FunctionDescription>
      </FunctionInformation>
    </Container>
  );
};

const Container = styled.li`
  width: calc((100% - 24px) / 3);
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1.72254335;
  border-radius: 12px;
  background-color: #e2e7ec;

  position: relative;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const BadgeList = styled.ul``;

const FunctionInformation = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const FunctionName = styled.h3`
  margin: 0;

  /* subtitle/02 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* gray/06 */

  color: #262a2e;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const FunctionDescription = styled.p`
  margin: 0;

  /* body/01 */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  /* gray/04 */

  color: #7e8992;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
