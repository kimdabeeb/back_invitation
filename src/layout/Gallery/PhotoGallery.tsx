import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Gallery, Item } from 'react-photoswipe-gallery';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import 'photoswipe/style.css';
import '@/layout/Gallery/gallery.css'
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'contain',
    width: '100%',
    // aspectRatio: '1/1'
  };

  return (
    <ContentsWrap>
      <Gallery>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ type: 'fraction', clickable: true }}>
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <Item original={image.source} thumbnail={image.source} width="1920" height="1280">
                  {({ ref, open }) => (
                    <img
                      style={smallItemStyles}
                      alt={image.alt}
                      src={image.source}
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      onClick={open}
                    />
                  )}
                </Item>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Gallery>
    </ContentsWrap>
  );
};

export default PhotoGallery;

const ContentsWrap = styled.div`
  width: 100%;
  padding: 0 18px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
