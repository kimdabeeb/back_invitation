import React from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { BrideAndGroom } from '@/types/data.ts';

const Host = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <>
      <HostContainer>
        <HostInfo person={groom} />
        <HostInfo person={bride} />
      </HostContainer>
    </>
  );
};

export default Host;

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  return (
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
      <HighlightedName>{person.name}</HighlightedName>
    </HostDetails>
  );
};

const HighlightedName = styled.span`
  font-weight: 600;
  font-size: 1rem;
  /* color: #4f4f4f; */
  color: #eee;
`;

const HostContainer = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  font-family: 'GowunBatang';
  & div > div:first-child {
    font-size: .8125rem;
  }

  & div:last-child > div {
    width: 40px;
    & div:last-child {
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
  font-weight: 600;
  color: #eee;
  line-height: 2;
`;

const RelationText = styled.div`
  font-size: 0.75rem;
  line-height: 26px;
  width: 50px;
  display: flex;
  gap: 6px;
  color: #eee;
`;

const Relation = styled.div`
  width: inherit;
`;
