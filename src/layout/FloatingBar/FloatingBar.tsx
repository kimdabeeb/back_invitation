
import styled from '@emotion/styled';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
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

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav isVisible={isVisible}>
      <Button onClick={handleCopy}>
        <Share fill="#ddd" />
      </Button>
      <Button onClick={handleScroll}>
        <Upward fill="#ddd" />
      </Button>
    </Nav>
  );
};

export default FloatingBar;

const Nav = styled.nav<{ isVisible: boolean }>`
  min-width: 65px;
  position: fixed;
  bottom: 30px;
  right: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
`;
