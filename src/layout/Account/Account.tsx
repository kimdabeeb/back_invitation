import { Fade } from 'react-awesome-reveal';
import styled from '@emotion/styled';
import data from 'data.json';
import AccountDetail from './AccountDetail.tsx';
import Accordion from '@/layout/Account/Accordion.tsx';
import { MainTit, SubTit } from '@/components/Text';

const Account = () => {
  const { hostInfo } = data;
  return (
    <AccountWrap className="pd-w">
      <Fade cascade direction={'up'} damping={0.3} duration={1500} className="text-wrap">
        <MainTit>마음 전하실 곳</MainTit>
        <SubTit>
          참석이 어려우신 분들을 위해 기재하였습니다
          <br />
          너그러운 마음으로 양해부탁드립니다
        </SubTit>
      </Fade>
      <HostInfoWrapper>
        {hostInfo.map((host) => {
          return (
            <Accordion title={host.host} key={host.host}>
              {host.accountInfo.map((account) => {
                return (
                  <AccountDetail
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
    </AccountWrap>
  );
};

export default Account;

const AccountWrap = styled.div`
  width: 100%;
  background: #e4edf1;
  margin: 0 auto;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 45px;
    height: 2px;
    background: #000;
    margin: 4rem auto 0;
  }

  & div.text-wrap {
    p:first-of-type {
      margin: 2rem auto 0.5rem;
    }

    p:nth-of-type(2) {
      font-size: 0.8125rem;
      line-height: 1.8;
      color: #545454;
    }
  }
`;

const HostInfoWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 35px 10px 0px;
  box-sizing: content-box;
`;
