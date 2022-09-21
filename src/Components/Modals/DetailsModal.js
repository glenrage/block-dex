import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { fetchSecondaryPokemonDetails } from '../../utils/rest_helpers';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DetailsModal = ({ open, onClose, details, customPokemonDetails }) => {
  const [secondaryDetails, setSecondaryDetails] = useState();

  useEffect(() => {
    async function fetch() {
      let response = await fetchSecondaryPokemonDetails(details?.species?.url);

      if (response) {
        setSecondaryDetails(response);
      }
    }
    fetch();
  }, [details?.species?.url]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <img
          src={
            details?.sprites?.other?.home?.front_shiny ||
            customPokemonDetails?.image
          }
          component='img'
          alt='pokemon'
          height='100'
          width='100'
        />
        <IconButton style={{ float: 'right' }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <h1>
          {details?.name.toUpperCase() ||
            customPokemonDetails?.name.toUpperCase()}
        </h1>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          {secondaryDetails
            ? secondaryDetails?.flavor_text_entries?.[1]?.flavor_text
            : customPokemonDetails?.description}
        </Typography>
        <div className='detail-column'>
          <h3>Pokemon Stats</h3>

          <p>Height - {details?.height || customPokemonDetails?.height} M</p>
          <p>Weight - {details?.weight || customPokemonDetails?.weight} KG</p>

          <p>
            Capture Rate -{' '}
            {secondaryDetails?.capture_rate ||
              customPokemonDetails?.capture_rate}
          </p>
          <p>
            Base Happiness -{' '}
            {secondaryDetails?.base_happiness ||
              customPokemonDetails?.base_happiness}
          </p>
          <p>
            Growth Rate -{' '}
            {secondaryDetails?.growth_rate.name ||
              customPokemonDetails?.growth_rate}
          </p>
        </div>
      </Box>
    </Modal>
  );
};

export default DetailsModal;
