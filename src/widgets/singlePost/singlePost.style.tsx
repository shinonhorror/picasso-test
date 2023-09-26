import { styled } from 'styled-components';
import { Description } from '../../shared';

export const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.25rem;
  padding: 0 20px;
`;

export const Content = styled(Description)`
  overflow-wrap: break-word;
  word-wrap: break-word;
`;
