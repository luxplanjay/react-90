import ReactModal from 'react-modal';

const customStyles = {
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

export const ModalBase = ({ isOpen, onClose, label = '', children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={label}
    >
      {children}
    </ReactModal>
  );
};
