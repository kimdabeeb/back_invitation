import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import UpNarrow from '@/assets/icons/upnarrow.png?url';

const Footer = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        alert('주소가 복사되었습니다.😉😉');
      },
      () => {
        alert('주소 복사에 실패했습니다.🥲🥲');
      },
    );
  };
  return (
    <SnsCont>
      <KakaoButton className="py-2 px-2" type="button">
        <span>카카오톡으로 청첩장 전하기</span>
        <img src={UpNarrow} />
      </KakaoButton>
      <CopyButton className="py-2 px-2" type="button" onClick={handleCopy}>
        <span>청첩장 주소 복사하기</span>
        <Copy />
      </CopyButton>
    </SnsCont>
  );
};

export default Footer 

const SnsCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const UpNarrow = styled.img`
//   /* width: 100%;
//   padding: 10px 0;
//   background: #fffcae;
//   border: unset;
//   outline: none;
//   box-shadow: none;
//   font-size: 0.6875rem;
//   display: flex;
//   align-items: center;
//   color: #1a1a1a;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   & img {
//     width: 35px;
//     height: 35px;
//   }
//   & span {
//     font-family: 'Pretendard', sans-serif;
//     margin-top: 5px;
//   } */
// `;
// `.withComponent('a');

const KakaoButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background: #fce777;
  & img {
    width: 14px;
    height: 14px;
  }
`;
const CopyButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background: #c2b0a2;
`;
