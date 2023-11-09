import ReactModal from 'react-modal';

const styles = {
  overlay: {
    backgroundColor: 'orange',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
  },
};

ReactModal.setAppElement('#root');

export const TopicModal = ({ isOpen, onClose, topic }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={styles}
      contentLabel="Topic modal"
    >
      <p>
        <b>{topic}</b>
      </p>
      <button onClick={onClose}>Close</button>
    </ReactModal>
  );
};
