import React from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { BrideAndGroomParents } from '@/types/data.ts';

const HostParents = () => {
  const { groom, bride } = data.greeting.host;
  return (
      <HostContainer>
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
  width: 90%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin: 3rem auto 2rem;
  font-family: 'GowunBatang';
  & div > div:first-of-type {
    font-weight: 600;
  }
  & div:last-of-type > div {
    width: 40px;
    & div:last-of-type {
      margin-left: 8px;
    }
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
    font-size: 0.9375rem;
    color: #eee;
  }
`;