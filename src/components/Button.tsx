import styled from '@emotion/styled';

const Button = styled.button`
  padding: 6px;
  border-radius: 50%;
  border: 1px solid #eee;
  outline: none;
  box-shadow: none;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  color: #1a1a1a;
`.withComponent('a');

export default Button;
