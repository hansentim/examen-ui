import React, { useState } from 'react';
//Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function TheModal({open, setOpen}) {
  //Stänga modal
  const handleClose = () => setOpen(false);

  return <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hello there Buddy!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thanks for looking at our test, this buttons only function is to
            give you this message!
          </Typography>
        </Box>
      </Modal>
  </div>;

  
}
//Style för modalen
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: '#fdfdfd',
    borderRadius: 5,
    boxShadow: 24,
    p: 10,
  };
  

export default TheModal;
