import { styled } from 'styled-components';

export const Loader = styled.div`
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5rem;
  height: 5rem;
  margin-left: -3.125rem;
  margin-top: -3.125rem;
  border: 0.313rem solid #fff;
  border-bottom-color: #1655bb;
  border-radius: 50%;
  z-index: 100;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
