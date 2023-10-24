import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TypingModal from './TypingModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  color:'red',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const handleOpen = () => props.setModalHandler(true);
  const handleClose = () => props.setModalHandler(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={props.ModalHandler}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h1">
          Dear, {props.Name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            <TypingModal/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}