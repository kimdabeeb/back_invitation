import styled from '@emotion/styled';
import data from 'data.json';
import NaverMap from '@/assets/icons/naver_map.png?url';
import KakaoMap from '@/assets/icons/kakao_map.png?url';

const MapButtons = () => {
  const { naverMap, kakaoMap } = data.mapInfo;

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(naverMap)}><img src={NaverMap} />네이버지도</Button>
      <Button onClick={() => window.open(kakaoMap)}><img src={KakaoMap} />카카오맵</Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px 0;
  gap: 8px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 50%;
  margin: 10px 0;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  text-decoration: none;
  gap: 15px;
  & img {
    width: 25px;
    aspect-ratio: 1/1;
  }
`.withComponent('a');
