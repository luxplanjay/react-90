import { useState } from 'react';
import { TopicModal } from 'components/TopicModal';
import { Topic, Wrapper, MetaWrapper, Text, Button } from './QuizCard.styled';
import { Link, useLocation } from 'react-router-dom';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const deleteCard = () => onDelete(id);

  return (
    <Wrapper level={level}>
      <Link to={`/list/${id}`} state={{ from: location }}>
        <Topic>{topic}</Topic>
      </Link>
      <MetaWrapper>
        <Text>
          <b>Level:</b> {level}
        </Text>
        <Text>
          <b>Time:</b> {time}
        </Text>
        <Text>
          <b>Questions:</b> {questions}
        </Text>
      </MetaWrapper>
      <div>
        <Button onClick={deleteCard}>Delete</Button>
        <Button onClick={openModal}>Edit</Button>
      </div>
      <TopicModal isOpen={isModalOpen} onClose={closeModal} topic={topic} />
    </Wrapper>
  );
};
