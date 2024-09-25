import styled from '@emotion/styled';
import { Fade } from 'react-awesome-reveal';
import data from 'data.json';
import { BrideAndGroom } from '@/types/data.ts';

const Host = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <HostContainer>
      <Fade triggerOnce cascade delay={1400}>
        <p>신랑<HostInfo person={groom} /><span>and</span>신부<HostInfo person={bride} /></p>
      </Fade>
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
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 2;
  color: #020817;
  font-family: 'GowunDodum';
  p > span:nth-of-type(2) {
    font-family: 'JakartaSignature';
    padding: 0 10px;
    font-size: 1.125rem;
    letter-spacing: -1px;
  }
`;

const HostDetails = styled.span`
  white-space: nowrap;
  text-align: center;
  margin-left: 5px;
  font-family: 'GowunDodum';
`;
