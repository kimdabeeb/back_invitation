import styled from '@emotion/styled';

const Button = styled.button`
  //font-family: HSSanTokki20-Regular, serif;
  padding: 0.5em 0.55em;
  border-radius: 50px;
  border: 1px solid #eee;
  outline: none;
  box-shadow: none;
  font-size: 0.7rem;
  cursor: pointer;
  background: #ffffff;
  display: flex;
  align-items: center;
  color: #1a1a1a;
  text-decoration: none;
`.withComponent('a');

export default Button;
