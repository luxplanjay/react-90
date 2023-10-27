import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: ${p => p.theme.spacing(3)};
  list-style: none;
`;
