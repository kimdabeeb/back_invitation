import React from 'react';
import data from 'data.json';
import { BrideAndGroomParents } from '@/types/data.ts';
import styled from '@emotion/styled';

const HostParents = () => {
  const { groom, bride } = data.greeting.host;

  return (
    <HostContainer className="pd-w gsap-div">
      <HostInfo person={groom} />
      <HostInfo person={bride} />
    </HostContainer>
  );
};

export default HostParents;

const HostInfo = ({ person }: { person: BrideAndGroomParents }) => {
  return (
    <div style={{display:'flex', flexDirection:'column', rowGap: '2rem'}}>
      <HostDetails >
        {person.parents && (
          <>
            {person.parents.map((parent, index) => (
              <React.Fragment key={index}>
                {index > 0 && ' · '}
                {parent.name}
              </React.Fragment>
            ))}
          </>
        )}
        <RelationText>
          <div>의</div>
          <Relation>{person.relation}</Relation>
        </RelationText>
      </HostDetails>
      <HighlightedName>
        <p>{person.position}</p>
        <p>{person.name}</p>
      </HighlightedName>
    </div>
  );
};

const HostContainer = styled.div`
  padding-left: 35px;
  padding-right: 35px;
  box-sizing: border-box;
  background: #e4edf1;
  gap: 25px;
  display: flex;
  flex-direction: column;
  font-family: 'GowunBatang';
  div:nth-of-type(3) > div {
    font-weight: 400;
  }

  > div:nth-of-type(2) {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 2rem;
  }

  div:nth-of-type(2) > p:last-child::before {
    content: 'groom';
    font-size: 0.75rem;
    font-weight: 400;
    position: absolute;
    top: -5px;
    right: 35px;
  }

  div:nth-of-type(4) > p:last-child::before {
    content: 'bride';
    font-size: 0.75rem;
    font-weight: 400;
    position: absolute;
    top: -5px;
    right: 35px;
  }
`;

const HostDetails = styled.div`
  white-space: nowrap;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: #262626;
`;

const RelationText = styled.div`
  font-size: 0.9rem;
  margin: 0;
  line-height: 26px;
  width: 50px;
  display: flex;
  gap: 6px;
  color: #757575;
`;

const Relation = styled.div`
  width: inherit;
`;

const HighlightedName = styled.div`
  display: flex;
  justify-content: space-between;
  & p {
    font-size: .9375rem;
    color: #262626;
  }
  & p:last-child {
    font-weight: bold;
    position: relative;
  }
`;