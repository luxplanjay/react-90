import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(3)};
`;

export const ListItem = styled.li`
  flex-basis: ${p => `calc((100% - ${p.theme.spacing(6)}) / 3)`};
`;
