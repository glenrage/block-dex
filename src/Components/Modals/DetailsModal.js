import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DetailsModal({ open, onClose, details }) {
  const [secondaryDetails, setSecondaryDetails] = useState();

  const fetchSecondaryData = async (url) => {
    try {
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      console.error('error fetching pokemon', error);
    }
  };

  useEffect(() => {
    async function fetch() {
      let response = await fetchSecondaryData(details?.species?.url);

      if (response) setSecondaryDetails(response);
    }
    fetch();
  }, [details?.species?.url]);

  // console.log('secondary ', secondaryDetails);

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <h1>{details?.name.toUpperCase()}</h1>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {secondaryDetails?.flavor_text_entries?.[1]?.flavor_text}
          </Typography>
          <div className='detail-column'>
            <h3>Pokemon Stats</h3>

            <p>Height - {details?.height} "</p>
            <p>Weight - {details?.weight} lbs</p>

            <p>Capture Rate - {secondaryDetails?.capture_rate}</p>
            <p>Base Happiness - {secondaryDetails?.base_happiness}</p>
            <p>Growth Rate - {secondaryDetails?.growth_rate.name}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
