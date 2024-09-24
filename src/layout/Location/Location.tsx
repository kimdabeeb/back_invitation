import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { MainTitEn, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper className="pd-w gsap-div">
      <MainTitEn>Location</MainTitEn>
      <PointTitle style={{ fontWeight: '600', padding: '2.25rem 0 2.5rem' }}>
        {mapInfo.address1}
        <p style={{ fontWeight: '400', fontSize: '.85rem' }}>{mapInfo.address2}</p>
      </PointTitle>
      <Map />
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  background: #f3f5f0;
  display: flex;
  flex-direction: column;
`;
