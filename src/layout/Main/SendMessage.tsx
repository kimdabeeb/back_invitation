import styled from '@emotion/styled';
import { MainTitEn, PointTitle } from '@/components/Text.tsx';

const SendMessage = () => {
  return (
    <Information className="pd-w gsap-div">
      <MainTitEn>INFORMATION</MainTitEn>
      <PointTitle>안내</PointTitle>
      <PointTitle>사전 안내를 드립니다</PointTitle>
    </Information>
  );
};

export default SendMessage;

export const Information = styled.div`
  background:#afc8d4;
`;
