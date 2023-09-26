import { styled } from 'styled-components';

export const Button = styled.button`
  padding: 0.75rem 1.25rem;
  border: 0.0625rem solid #1d65ed;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #3c4158;
  border-radius: 0.625rem;
  transition: 0.3s;

  &:hover {
    background-color: #1655bb;
    color: #fff;
  }
`;
