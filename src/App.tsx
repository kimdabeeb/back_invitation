import { useEffect, useRef, useState } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import gsap from 'gsap-trial';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { Container, Wrapper, GalleryWrapper } from '@/components/ContentsWrap';
import Intro from '@/layout/Main/Intro';
import Footer from '@/layout/Main/Footer';
import Account from '@/layout/Account/Account.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar';
import PhotoGallery from '@/layout/Gallery/PhotoGallery';
import Invitation from '@/layout/Invitation/Invitation';
import SendMessage from '@/layout/Main/SendMessage';
import Location from '@/layout/Location/Location';
import CalendarWrap from '@/layout/Calendar/CalendarWrap';
import HostParents from './layout/Contact/HostParents';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

    useGSAP(() => {
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        ignoreMobileResize: true,
      });

      const contents = document.querySelectorAll('.gsap-div');
      contents.forEach((content) => {
        gsap.fromTo(
          content,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            scrollTrigger: {
              trigger: content,
              markers: true,
              start: 'top 75%',
              //end: 'bottom bottom',
              toggleActions: 'play none none none',
              once: false,
            },
          },
        );
      });
      return () => {
        smoother.kill();
      };
    }, []);



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
      <Container id="smooth-wrapper">
        <Wrapper id="smooth-content">
          <Intro />
          <Invitation />
          <CalendarWrap />
          <HostParents />
          <GalleryWrapper ref={galleryRef} className="pd-w gsap-div">
            <PhotoGallery />
          </GalleryWrapper>
          <Location />
          <Account />
          <SendMessage />
          <Footer />
          <FloatingBar isVisible={isVisible} />
        </Wrapper>
      </Container>
    </NavermapsProvider>
  );
}

export default App;
