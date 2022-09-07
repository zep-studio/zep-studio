import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

type Props = {
  imageURL?: string;
  title?: string;
  description?: string;
  badge?: string;
};

export const FunctionCard: React.FC<Props> = ({
  imageURL,
  title,
  description,
  badge,
}) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate('/studio')}>
      <ImageWrapper>
        {!!imageURL && <Image src={imageURL} />}
        {!!badge && (
          <BadgeList>
            <Badge>{badge}</Badge>
          </BadgeList>
        )}
      </ImageWrapper>

      <FunctionInformation>
        <FunctionName>{title}</FunctionName>
        <FunctionDescription>{description}</FunctionDescription>
      </FunctionInformation>
    </Container>
  );
};

const Container = styled.li`
  width: calc((100% - 24px) / 3);
  cursor: pointer;
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

const BadgeList = styled.ul`
  position: absolute;
  left: 12px;
  bottom: 12px;
`;
const Badge = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 16px;
  gap: 10px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 8px;

  /* body/01-bold */

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
`;

const FunctionInformation = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const FunctionName = styled.h3`
  margin: 0;

  /* subtitle/02 */

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
