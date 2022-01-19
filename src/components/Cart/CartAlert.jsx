import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ff7fd4',
  border: '4px solid #528be7',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function CartAlert() {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Cart Modal</Button> */}
      <Modal
        // open={open}
        // onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in CartAlert, a modal componente
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Este es un texto de prueba para el Cart Modal NUCO
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}