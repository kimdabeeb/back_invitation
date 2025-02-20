import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from '@emotion/styled';
import Host from '../Contact/Host.tsx';

const Invitation = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('div').forEach((item) => {
        if (window.innerHeight > item.getBoundingClientRect().top) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <InvitationWrapper className="pd-w">
        <Fade triggerOnce cascade damping={0.25} duration={1000}>
          <ul className="IntroTit">
            <li>
              우리가 사랑함은 그가 먼저 우리를 사랑하셨음이라
              <br />
              <span>요한일서 4:19</span>
            </li>
            <li>하나님의 떄에 서로 만난 두 사람이</li>
            <li>은혜로 결실을 맺게 되었습니다.</li>
            <li>둘이 하나가 되어 평생 서로를 돕는 배필로</li>
            <li>서약하는 자리에 기도와 축복으로 함께 해주신다면</li>
            <li>더 없는 감사와 기쁨으로간직하겠습니다.</li>
          </ul>
          <Host />
        </Fade>
      </InvitationWrapper>
      <div
        className="gsap-div"
        style={{
          marginTop: '3rem',
          width: '100%',
          aspectRatio: '1/1.5',
          background: '#3c78d8',
        }}></div>
      <style>{`
        .IntroTit {
          li {
            white-space: pre;
            letter-spacing: -.15px;
            word-spacing: -.35px;
            font-size: 0.875rem;
            line-height: 3;
          }
          & li:first-of-type {
            margin-bottom: 3rem;
            line-height: 2.5;
            & span {
            font-size: 0.75rem;
          }
        }
    `}</style>
    </>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding-bottom: 0;
`;

