import styled from 'styled-components';

const getBorderColor = props => {
  switch (props.$rank) {
    case 'novice':
      return 'green';
    case 'intermediate':
      return 'blue';
    case 'expert':
      return 'orangered';
    default:
      return props.theme.colors.accent;
  }
};

export const CardWrapper = styled.div`
  border: 5px solid ${getBorderColor};
  border-radius: ${p => p.theme.radii.md};
  padding: ${p => p.theme.spacing(3)};
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  margin-bottom: ${p => p.theme.spacing(2)};
  color: ${p => p.theme.colors.accent};

  &:hover {
    background-color: teal;
  }
`;

export const Accent = styled.b`
  color: orange;
`;
