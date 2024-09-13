import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/img_9.png';

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 100%;
  max-width: 450px;
  padding-top: 20px;
`;

const MainTitle = styled.p`
  font-family: 'NanumSquare';
  font-size: 1.75rem;
  color: #2f2120;
  line-height: 2;
  white-space: pre-line;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 0.8125rem;
  color: #000000;
  line-height: 2;
  white-space: pre-line;
`;
