import { Profile } from './Profile';

export const PilotList = ({ pilots }) => {
  return (
    <ul>
      {pilots.map(pilot => {
        return (
          <li key={pilot.id}>
            <Profile pilot={pilot} />
          </li>
        );
      })}
    </ul>
  );
};
