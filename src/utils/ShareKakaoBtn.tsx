import styled from '@emotion/styled';
import UpNarrow from '@/assets/icons/upnarrow.png?url';
import { SubTit } from '@/components/Text';


export default function ShareKakaoBtn() {

  const shareKakao = () => {
      if (window.Kakao) {
        const kakao = window.Kakao;

        if (!kakao.isInitialized()) {
          kakao.init('496b33d8c0ec1a3264c146db9799eb78');
        }

        kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: '라이언이 즐겨먹던 바로 그 틴케이스 치즈볼',
            description: '바라만 봐도 즐거워지는 힐링 패키지에는 시크릿 스토리가 숨어있어요.',
            imageUrl:
              'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            link: {
              // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
              mobileWebUrl: 'http://localhost:5173',
              webUrl: 'http://localhost:5173',
            },
          },
          buttons: [
            {
              title: '자세히 보기',
              link: {
                mobileWebUrl: 'http://localhost:5173',
                webUrl: 'http://localhost:5173',
              },
            },
          ],
        });
      }
    }

  return (
    <KakaoButton onClick={shareKakao}>
      <SubTit>카카오톡으로 전하기</SubTit>
      <img src={UpNarrow} />
    </KakaoButton>
  );
};

const KakaoButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background: #fce777;
  border: unset;
  outline: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 2.2;
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
    width: 14px;
    height: 14px;
  }
`;