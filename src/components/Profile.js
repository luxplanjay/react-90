import { HiMail } from 'react-icons/hi';

export const Profile = ({ pilot: { avatar, name, email, age } }) => {
  return (
    <div>
      <img src={avatar} alt={name} width="120" height="120" />
      <p>
        <b>Username:</b> {name}
      </p>
      <p>
        <b>
          Email: <HiMail />
        </b>{' '}
        {email}
      </p>
      <p>
        <b>Age:</b> {age}
      </p>
    </div>
  );
};
