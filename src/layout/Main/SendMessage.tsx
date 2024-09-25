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
        <SubTitKR>환경보호를 위해 화환을 정중히 사양합니다. 감사한 마음만 받겠습니다. 😊 </SubTitKR>
      </Notice>
    </Information>
  );
};

export default SendMessage;

export const Information = styled.div`
  background: #eff3e8;
  > p {
    padding-bottom: 1.5rem;
    color: #111;
    font-weight: 600;
    span {
      opacity: 0.7;
      padding-bottom: 2rem;
    }
  }
`;

export const Notice = styled.div`
  aspect-ratio: 1/0.65;
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
  > p {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    white-space: pre-wrap;
    padding: 0 30px;
    box-sizing: border-box;
    color: #8c9a6f;
    line-height: 1.8;
  }
`;