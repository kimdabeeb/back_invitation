import styled from '@emotion/styled';
// import data from 'data.json';
import mainImg from '@/assets/images/img_9.png';

const Main = () => {
  // const { greeting } = data;
  return (
    <MainWrap>
      <MainImg src={mainImg} />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
`;

const MainImg = styled.img`
  /* border-radius: 200px 200px 0 0;
  width: 100%;
  max-width: 450px;
  padding-top: 20px; */
  border-radius: 500px 500px 0 0;
  width: 100%;
  max-width: 950px;
  /* aspect-ratio: 1/1.8; */
`;
