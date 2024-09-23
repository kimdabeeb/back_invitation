import styled from '@emotion/styled';

export const MainTit = styled.p`
  font-family: 'GowunBatang';
  font-size: 1rem;
  line-height: 3;
  color: #000;
`;

export const MainTitEn = styled.p`
  font-family: 'SometimesTimes';
  letter-spacing: 1.5px;
  font-weight: 400;
  font-style: normal;
  font-size: 2.25rem;
  color: rgb(17, 17, 17);
  opacity: 0.9;
`;

export const SubTit = styled.p`
  font-family: 'GowunDodum';
  font-size: 0.9375rem;
  font-weight: bold;
  align-self: flex-start;
`;

export const SubTitKR = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 0.95rem;
  font-weight: 200;
  letter-spacing: -.35px;
  word-spacing: -.35px;
  margin: 1.25rem auto;
`;

export const SubTitEn = styled.p`
  font-family: 'Autography';
  font-size: .95rem;
  font-weight: normal;
`;

export const PointTitle = styled.p`
  font-family: 'GowunBatang';
  font-size: 0.95rem;
  line-height: 2.2;
  color: #666;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-size: .9375rem;
  color: #eee;
  white-space: pre-line;
  word-spacing: -0.35px;
  line-height: 2;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
`;
