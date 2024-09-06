import { useEffect, useRef, useState } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import { MainTit, MainTitEn, SubTit } from '@/components/Text';
import { Container, Wrapper, GalleryWrapper } from '@/components/ContentsWrap';
import Account from '@/layout/Account/Account.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar';
import GalleryWrap from '@/layout/Gallery/GalleryWrap';
import Invitation from '@/layout/Invitation/Invitation';
import Location from '@/layout/Location/Location';
import Main from '@/layout/Main/Main';


function App() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <Container>
        <Wrapper>
          <Main />
          <MainTit>모시는 글</MainTit>
          <Invitation />
        <GalleryWrapper ref={galleryRef}>
          <MainTitEn>Gallery</MainTitEn>
          <GalleryWrap />
        </GalleryWrapper>
          <SubTit>마음 전하실 곳</SubTit>
          <Account />
        {/* <Wrapper>
          <Heading1>오시는 길</Heading1>
          <Location />
        </Wrapper> */}
        </Wrapper>
        <FloatingBar isVisible={isVisible} />
      </Container>
    </NavermapsProvider>
  );
}

export default App;
