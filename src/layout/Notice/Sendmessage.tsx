import styled from '@emotion/styled';
import { MainTitEn, PointTitle } from '@/components/Text.tsx';


const ThanksTo = () => {
  return (
    <Information className="pd-w">
      <MainTitEn>INFORMATION</MainTitEn>
      <PointTitle>안내</PointTitle>
      <PointTitle>사전 안내를 드립니다</PointTitle>
    </Information>
  );
};

export default ThanksTo;

export const Information = styled.div`
  width: 100%;
  background:#afc8d4;
`;
