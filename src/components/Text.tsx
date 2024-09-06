import styled from '@emotion/styled';

export const MainTit = styled.p`
  font-family: 'GowunBatang';
  font-size: 1rem;
  line-height: 3;
  color: #000;
`;

export const MainTitEn = styled.p`
  font-family: 'The Girl Next Door', cursive;
  font-weight: 400;
  font-style: normal;
  /* font-family: 'Playpen Sans', cursive;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal; */
  font-size: 1.25rem;
  color: #000;
`;

export const SubTit = styled.p`
  font-family: 'GowunDodum';
  font-size: 0.9375rem;
  font-weight: bold;
  padding: 0 5px;
  align-self: flex-start;
`;

export const PointTitle = styled.p`
  font-family: 'Pretendard', sans-serif;
  line-height: 1;
  margin: 0;
  color: #666;
  white-space: pre-line;
`;

export const IntroTit = styled.div`
  font-size: 0.75rem;
  line-height: 2;
  & span {
    font-size: 0.6875rem;
  }
  & p {
    line-height: 3;
  }
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-size: .9375rem;
  color: #eee;
  white-space: pre-line;
  word-spacing: -0.35px;
  line-height: 2;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
`;
