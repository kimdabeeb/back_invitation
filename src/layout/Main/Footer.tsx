import ShareKakaoBtn from '@/utils/ShareKakaoBtn';
import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import { SubTit } from '@/components/Text';

const Footer = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        alert('주소가 복사되었습니다.');
      },
      () => {
        alert('주소 복사에 실패했습니다.');
      },
    );
  };
  return (
    <SnsCont>
      <ShareKakaoBtn />
      <CopyButton type="button" onClick={handleCopy}>
        <SubTit>청첩장 주소 복사하기</SubTit>
        <Copy fill="#fff" />
      </CopyButton>
    </SnsCont>
  );
};

export default Footer;

const SnsCont = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

// const UpNarrow = styled.img`
// `.withComponent('a');

const CopyButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background: #c2b0a2;
  border: unset;
  outline: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 2.2;
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    color: #fff;
  }
`;
