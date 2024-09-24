import styled from '@emotion/styled';
import { MainTitEn, PointTitle } from '@/components/Text.tsx';

const SendMessage = () => {
  return (
    <Information className="pd-w gsap-div">
      <MainTitEn>INFORMATION</MainTitEn>
      <PointTitle>
        안내<br/>
        <span>웨딩홀 사전 안내를 드립니다</span>
      </PointTitle>
      <Notice>
      
      </Notice>
    </Information>
  );
};

export default SendMessage;

export const Information = styled.div`
  background: #eff3e8;
  > p {
    padding: 1.25rem 0;
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