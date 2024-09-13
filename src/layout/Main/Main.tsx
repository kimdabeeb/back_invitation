import styled from '@emotion/styled';
// import data from 'data.json';
import mainImg from '@/assets/images/img_9.png';

const Main = () => {
  // const { greeting } = data;
  return (
    <MainWrap>
      <MainImg src={mainImg} />
      {/* <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle> */}
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0;
`;


const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 100%;
  max-width: 450px;
  padding-top: 20px;
`;


const SubTitle = styled.p`
  font-size: 0.8125rem;
  color: #000000;
  line-height: 2;
  white-space: pre-line;
`;
