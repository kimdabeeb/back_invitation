import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { MainTitEn, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <div className="pd-w" style={{ width: '100%', margin: '0 auto'}}>
      <MainTitEn>Location</MainTitEn>
      <LocationWrapper>
        <PointTitle style={{ fontWeight: '600' }}>{mapInfo.address1}</PointTitle>
        <PointTitle style={{ fontWeight: '400', margin: '-2px auto 35px', fontSize: '.85rem' }}>
          {mapInfo.address2}
        </PointTitle>
        {/* <Caption textAlign={'center'}>{mapInfo.address2}</Caption> */}
        <Map />
        <MapButtons />
        <Address />
      </LocationWrapper>
    </div>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
