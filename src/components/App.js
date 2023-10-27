import { PilotList } from './PilotList/PilotList';
import { GlobalStyle } from './GlobalStyle';
import { PageTitle } from './PageTitle/PageTitle';
import pilots from '../pilots.json';

export const App = () => {
  return (
    <div>
      <PageTitle>Top rated pilots</PageTitle>
      <PilotList pilots={pilots} />
      <GlobalStyle />
    </div>
  );
};
