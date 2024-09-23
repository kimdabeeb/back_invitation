import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.png?url';
import toss from '@/assets/icons/toss.png?url';

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}
const AccountDetail = ({
  name,
  relation,
  bank,
  account,
  kakaopayAccount,
  tossAccount,
}: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert('계좌번호가 복사되었습니다.😉');
      },
      () => {
        alert('계좌번호 복사에 실패했습니다.🥲');
      },
    );
  };

  return (
    <Wrapper>
      <Info>
        <Relation>{relation}</Relation>
        <Name>{name}</Name>
      </Info>
      <Details>
          {bank} {account}
        <AccountMethod>
          <CopyButton onClick={handleCopy}>
            <Copy fill="#eee" />
          </CopyButton>
          <AccountLinks>
            {kakaopayAccount && (
              <AccountButton href={kakaopayAccount} target="_blank" rel="noreferrer">
                <KakaopayImg src={kakaopay} alt="kakaopay" />
              </AccountButton>
            )}
            {tossAccount && (
              <AccountButton href={tossAccount} target="_blank" rel="noreferrer">
                <TossImg src={toss} alt="toss" />
              </AccountButton>
            )}
          </AccountLinks>
        </AccountMethod>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #dfdfdf;
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
  font-family: 'GowunDodum';
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
`;

const Relation = styled.span`
  color: #595959;
  font-family: 'GowunBatang';
  font-weight: bold;
`;

const Name = styled.span`
  font-size: 0.8125rem;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: white;
`;

const AccountLinks = styled.div`
  display: flex;
  width: 100%;
  gap: 2px;
`;

const AccountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  padding: 0 0.8em;
  width: inherit;
  font-size: 0.7rem;
  gap: 2px;
  color: #1a1a1a;
  text-decoration: none;
  outline: none;
  box-shadow: none;
`.withComponent('a');


const KakaopayImg = styled.img`
  width: 50px;
`;

const TossImg = styled.img`
  width: 70px;
`;

export default AccountDetail;
