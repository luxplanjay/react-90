import styled from 'styled-components';

const getBgColor = props => {
  switch (props.$variant) {
    case 'primary':
      return 'orange';
    case 'secondary':
      return 'green';
    default:
      return 'blue';
  }
};

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${p => p.theme.spacing(6)};
  background-color: ${getBgColor};
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  color: blue;
`;
