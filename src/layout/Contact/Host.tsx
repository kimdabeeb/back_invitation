import styled from '@emotion/styled';
import data from 'data.json';
import { BrideAndGroom } from '@/types/data.ts';

const Host = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <HostContainer>
      <p>신랑<HostInfo person={groom} /> · 신부<HostInfo person={bride} /></p>
    </HostContainer>
  );
};

export default Host;

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  return (
    <HostDetails>{person.name}</HostDetails>
  );
};

const HostContainer = styled.div`
  gap: 35px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 2;
  color: #020817;
  font-family: 'GowunDodum';
`;

const HostDetails = styled.span`
  white-space: nowrap;
  text-align: center;
  margin-left: 10px;
`;
