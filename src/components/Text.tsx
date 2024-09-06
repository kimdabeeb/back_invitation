import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: 'GowunBatang';
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 3;
  color: #333;
`;

export const Heading2 = styled.p`
  font-size: .8125rem;
  margin: 10px;
`;

export const PointTitle = styled.p`
  font-family: 'Pretendard', sans-serif;
  line-height: 1;
  margin: 0;
  color: #666;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  font-size: .75rem;
  line-height: 1.6;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
`;
