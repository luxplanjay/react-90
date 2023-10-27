import { HiBeaker } from 'react-icons/hi';
import { Title, IconWrapper } from './PageTitle.styled';

export const PageTitle = ({ children }) => {
  return (
    <Title $variant="primary">
      {children}
      <IconWrapper>
        <HiBeaker size="40" />
      </IconWrapper>
    </Title>
  );
};
