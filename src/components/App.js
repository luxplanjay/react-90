import { HiBeaker } from 'react-icons/hi';
import { PilotList } from './PilotList';
import pilots from '../pilots.json';

export const App = () => {
  return (
    <div>
      <h1>
        Top rated pilots <HiBeaker size="40" />
      </h1>

      <PilotList pilots={pilots} />
    </div>
  );
};
