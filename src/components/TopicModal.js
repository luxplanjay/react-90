import { ModalBase } from './ModalBase';

export const TopicModal = ({ isOpen, onClose, topic }) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <p>
        <b>{topic}</b>
      </p>
      <button onClick={onClose}>Close</button>
    </ModalBase>
  );
};
