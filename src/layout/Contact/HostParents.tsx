import React from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { Wrapper } from '@/components/ContentsWrap';
import { BrideAndGroomParents } from '@/types/data.ts';

const HostParents = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <Wrapper>
      <HostContainer>
        <HostInfo person={groom} />
        <HostInfo person={bride} />
      </HostContainer>
    </Wrapper>
  );
};

export default HostParents;

const HostInfo = ({ person }: { person: BrideAndGroomParents }) => {
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
  font-size: rem;
  /* color: #4f4f4f; */
  color: #eee;
`;

const HostContainer = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-family: 'GowunBatang';
  & div > div:first-of-type {
    font-size: 0.8125rem;
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
