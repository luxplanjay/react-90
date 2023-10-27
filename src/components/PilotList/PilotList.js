import { Profile } from '../Profile/Profile';
import { List } from './PilotList.styled';

export const PilotList = ({ pilots }) => {
  return (
    <List>
      {pilots.map(pilot => {
        return (
          <li key={pilot.id}>
            <Profile pilot={pilot} />
          </li>
        );
      })}
    </List>
  );
};
