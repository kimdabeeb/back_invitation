import styled from '@emotion/styled';
import mainImg from '@/assets/images/img_9.png';

const Intro = () => {
  return (
    <MainWrap>
      <MainImg src={mainImg} />
    </MainWrap>
  );
};

export default Intro;

const MainWrap = styled.div`
  /* aspect-ratio: 1/1.8; */
  padding: 2rem 1.5rem 0;
`;

const MainImg = styled.img`
  border-radius: 500px 500px 0 0;
  aspect-ratio: 1/1.8;
  max-width: 100%;
`;
