import { Component } from 'react';
import { TopicModal } from 'components/TopicModal';
import { Topic, Wrapper, MetaWrapper, Text, Button } from './QuizCard.styled';

export class QuizCard extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      quiz: { id, topic, level, time, questions },
      onDelete,
    } = this.props;

    return (
      <Wrapper level={level}>
        <Topic onClick={this.openModal}>{topic}</Topic>
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
        <Button onClick={() => onDelete(id)}>Delete</Button>
        <TopicModal
          isOpen={isModalOpen}
          onClose={this.closeModal}
          topic={topic}
        />
      </Wrapper>
    );
  }
}
