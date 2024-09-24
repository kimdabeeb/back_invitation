import styled from '@emotion/styled';
import { MainTitEn, PointTitle, SubTitKR } from '@/components/Text.tsx';

const SendMessage = () => {
  return (
    <Information className="pd-w gsap-div">
      <MainTitEn>INFORMATION</MainTitEn>
      <PointTitle>
        안내<br/>
        <span>웨딩홀 사전 안내를 드립니다</span>
      </PointTitle>
      <Notice>
        {/* <SubTitKR>식장의 사정으로 화환은 정중히 사양합니다. 감사한 마음만 받겠습니다. </SubTitKR> */}
      </Notice>
    </Information>
  );
};

export default SendMessage;

export const Information = styled.div`
  background: #eff3e8;
  > p {
    padding-bottom:2.5rem;
    color: #111;
    span {
      opacity: .7;
    }
  }
`;

export const Notice = styled.div`
  aspect-ratio: 1/1;
  background: #fff;
  border-radius: .75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  white-space: pre-wrap;
`;