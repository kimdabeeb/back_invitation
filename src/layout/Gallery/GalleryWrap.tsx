import { useState } from 'react';
import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.tsx';

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <ContentsWrap>
      <ImageMoreWrap isMoreView={isMoreView}>
        {!isMoreView && <WhiteGradientOverlay />}
        <PhotoGallery />
      </ImageMoreWrap>
      {!isMoreView && (
        <PlusButton onClick={onClickImageMoreViewButton}>more</PlusButton>
      )}
    </ContentsWrap>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  margin: 15px 0 30px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageMoreWrap = styled.div<{ isMoreView: boolean }>`
  position: relative;
  max-height: ${(props) =>
    props.isMoreView
      ? ''
      : '50vh'}; /* isMoreView 상태가 true일 때는 높이 제한 없이, false일 때는 195px로 작게 보이도록 */
  overflow: hidden;
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 90%
  );
`;

const PlusButton = styled.div`
  font-family: 'Playpen Sans', cursive;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 0.8125rem;
  color: #262626;
`;
