import styled from '@emotion/styled';

export const MainTit = styled.p`
  font-family: 'GowunBatang';
  font-size: 1rem;
  line-height: 3;
  color: #000;
`;

export const MainTitEn = styled.p`
  font-family: 'SometimesTimes';
  /* font-family: 'Ibarra Real Nova', serif; */
  /* font-family: 'Gilda Display', serif; */
  font-weight: 400;
  font-style: normal;
  font-size: 2.5rem;
  color: rgb(17, 17, 17);
  opacity: 0.9;
  margin-bottom: 3rem;
`;

export const SubTit = styled.p`
  font-family: 'GowunDodum';
  font-size: 0.9375rem;
  font-weight: bold;
  padding: 0 5px;
  align-self: flex-start;
`;

export const SubTitEn = styled.p`
  font-family: 'Autography';
  font-size: .95rem;
  font-weight: normal;
`;

export const PointTitle = styled.p`
  font-family: 'GowunBatang', sans-serif;
  line-height: 2;
  margin: 0;
  color: #666;
  white-space: pre-line;
`;


export const Caption = styled.p<{ textAlign?: string }>`
  font-size: .9375rem;
  color: #eee;
  white-space: pre-line;
  word-spacing: -0.35px;
  line-height: 2;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
`;
