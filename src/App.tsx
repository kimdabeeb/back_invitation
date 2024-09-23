import { useEffect, useRef, useState } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import { Container, Wrapper, GalleryWrapper } from '@/components/ContentsWrap';
import Main from '@/layout/Main/Main';
import Footer from '@/layout/Main/Footer';
import Account from '@/layout/Account/Account.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar';
import PhotoGallery from '@/layout/Gallery/PhotoGallery';
import Invitation from '@/layout/Invitation/Invitation';
import Notification from '@/layout/Notice/Notification';
import ThanksTo from '@/layout/Notice/Sendmessage';
import Location from '@/layout/Location/Location';
import CalendarWrap from '@/layout/Calendar/CalendarWrap';
import HostParents from './layout/Contact/HostParents';

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
          <Invitation />
          <CalendarWrap />
        </Wrapper>
        <HostParents />
        <GalleryWrapper ref={galleryRef} className="pd-w">
          <PhotoGallery />
        </GalleryWrapper>
        <Wrapper>
          <Location />
          <Notification />
          <Account />
          <ThanksTo />
        </Wrapper>
        <Footer />
        <FloatingBar isVisible={isVisible} />
      </Container>
    </NavermapsProvider>
  );
}

export default App;
