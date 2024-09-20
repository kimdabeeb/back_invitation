import styled from '@emotion/styled';
import Car from '@/assets/icons/car.svg?react';
import Bus from '@/assets/icons/bus.svg?react';
import Subway from '@/assets/icons/subway.svg?react';
import Parking from '@/assets/icons/parking.svg?react';

// import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  //const { locationInfo } = data;
  return (
    <WayWrapper>
      {/* {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Way key={title}>
            <PointTitle>{title}</PointTitle>
            <Caption>{desc}</Caption>
          </Way>
        );
      })} */}
      <Way>
        <li>
          <p><Car />자가용</p>
          <p>내비게이션 : '웨딩여율리' 또는 '노총회관' 검색 <br/>서울시 영등포구 국제금융로6길 26</p>
        </li>
        <hr />
        <li>
          <p><Bus />버스</p>
          <p>여의도역 또는 한국거래소(구 증권거래소) 하차 도보 3분</p>
          <ul>
            <li><p style={{ color:'blue'}}>간선버스</p><span>153, 162, 261, 262, 362, 461, 503, 600, 700, 753</span></li>
            <li><p style={{ color:'green'}}>지선버스</p><span>11-1, 11-2, 88, 88-1, 83, 510, 530, 5012, 5618, 5623, 5713, 6513, 6628, 6630, 6654, 7613</span></li>
            <li><p style={{ color:'red'}}>광역버스</p><span>320, 301, 5609, 7007-1</span></li>
          </ul>
        </li>
        <hr />
        <li>
          <p><Subway />지하철</p>
          <p><b style={{ color:'purple'}}>5호선</b> · <b style={{ color:'gold'}}>9호선</b> 여의도역 5번 출구 (도보 3분)</p>
        </li>
        <hr />
        <li>
          <p><Parking />주차</p>
          <p>본 건물 및 여의도포스트타워 하객 2시간 무료<br/>(웨딩홀 5층 안내데스크에서 주차권 수령)<br />주차현장 주차 요원 안내를 받아주세요</p>
        </li>
      </Way>
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px;
  gap: 20px;
`;

const Way = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  li {
    font-family: 'Pretendard', sans-serif;
    font-weight: 400;
    color: #1a1a1a;
      /* padding: 1rem 0 1.5rem;
    box-sizing: border-box;
    border-bottom: 1px solid #666; */ p {
      font-size: 0.825rem;
      line-height: 1.85;
    }
    p:first-of-type {
      font-weight: bold;
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
    }
    p > svg {
      margin-right: 8px;
    }

    & ul {
      padding-top: 1rem;
      li {
        padding: 0.5rem 0;
        border-bottom: unset;
        font-size: 0.825rem;
        p:first-of-type {
          font-weight: bold;
          padding: 0;
        }
      }
    }
  }

  hr {
    width: 100%;
    border: 0;
    border-top: 1px solid #eee;
    margin: 1.5rem 0;
  }
`;
