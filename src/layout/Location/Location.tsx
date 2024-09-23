import { Fade } from 'react-awesome-reveal';
import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { MainTitEn, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <Fade duration={1500} className="pd-w">
      <MainTitEn>Location</MainTitEn>
      <LocationWrapper>
        <PointTitle style={{ fontWeight: '600', padding: '2.25rem 0 2.5rem' }}>
          {mapInfo.address1}
          <p style={{ fontWeight: '400', fontSize: '.85rem' }}>{mapInfo.address2}</p>
        </PointTitle>
        {/* <Caption textAlign={'center'}>{mapInfo.address2}</Caption> */}
        <Map />
        <MapButtons />
        <Address />
      </LocationWrapper>
    </Fade>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
