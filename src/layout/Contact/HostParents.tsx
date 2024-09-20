import React from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { BrideAndGroomParents } from '@/types/data.ts';

const HostParents = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <HostContainer className="pd-w">
      <HostInfo person={groom} />
      <HostInfo person={bride} />
    </HostContainer>
  );
};

export default HostParents;

const HostInfo = ({ person }: { person: BrideAndGroomParents }) => {
  return (
    <>
      <HostDetails>
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
    </>
  );
};

const HostContainer = styled.div`
  width: 100%;
  padding-left: 35px;
  padding-right: 35px;
  box-sizing: border-box;
  background: #e4edf1;
  gap: 25px;
  display: flex;
  flex-direction: column;
  font-family: 'GowunBatang';
  /* & div:last-of-type > div {
    width: 40px;
    & div:last-of-type {
      margin-left: 8px;
    }
  } */
  div:nth-of-type(1) > div,
  div:nth-of-type(3) > div {
    font-weight: 400;
  }

  div:nth-of-type(3) {
    border-top: 1px solid #eee;
    margin-top: 1rem;
    padding-top: 2rem;
  }

  div:nth-of-type(4) > p:last-child::before {
    content: 'bride';
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
  font-size: .9375rem;
  font-weight: 600;
  color: #eee;
  line-height: 2;
  width: 100%;
`;

const RelationText = styled.div`
  font-size: 0.9rem;
  line-height: 26px;
  width: 50px;
  display: flex;
  gap: 6px;
  color: #eee;
`;

const Relation = styled.div`
  width: inherit;
`;

const HighlightedName = styled.div`
  display: flex;
  justify-content: space-between;
  & p {
    font-size: 1rem;
    color: #eee;
  }
  & p:last-child {
    font-weight: bold;
    position: relative;
  }
`;