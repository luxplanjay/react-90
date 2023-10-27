import { CardWrapper, Text, Accent } from './Profile.styled';

export const Profile = ({ pilot: { avatar, name, email, age, rank } }) => {
  return (
    <CardWrapper $rank={rank}>
      <img src={avatar} alt={name} width="120" height="120" />
      <Text>
        <Accent>Username:</Accent> {name}
      </Text>
      <Text>
        <Accent>Email:</Accent> {email}
      </Text>
      <Text>
        <Accent>Age:</Accent> {age}
      </Text>
      <Text>
        <Accent>Rank:</Accent> {rank}
      </Text>
    </CardWrapper>
  );
};
