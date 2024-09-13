import styled from '@emotion/styled';
import data from 'data.json';
import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/layout/Account/Accordion.tsx';
import { MainTit, SubTit } from '@/components/Text';

const Account = () => {
  const { hostInfo } = data;
  return (
    <>
      <MainTit>마음 전하실 곳</MainTit>
      <SubTit>참석이 어려우신 분들을 위해 기재하였습니다<br />너그러운 마음으로 양해부탁드립니다</SubTit>
      <HostInfoWrapper>
        {hostInfo.map((host) => {
          return (
            <Accordion title={host.host} key={host.host}>
              {host.accountInfo.map((account) => {
                return (
                  <AccountWrap
                    key={account.name}
                    name={account.name}
                    relation={account.relation}
                    bank={account.bank}
                    account={account.account}
                    kakaopayAccount={account.kakaopayAccount}
                    tossAccount={account.tossAccount}
                  />
                );
              })}
            </Accordion>
          );
        })}
      </HostInfoWrapper>
    </>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
