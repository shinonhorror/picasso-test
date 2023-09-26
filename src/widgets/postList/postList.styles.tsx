import { styled } from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 80vh;
  margin: 20px;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.4375rem;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background: #878787;
    border-radius: 1rem;
    border: 0.063rem solid #fff;
  }
`;
