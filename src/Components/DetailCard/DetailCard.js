import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DetailsModal from '../Modals/DetailsModal';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const DetailCard = ({ name, url, customPokemonDetails }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [pokemonDetails, setPokemonDetails] = useState();

  const fetchPokemonDetails = async (fetchUrl) => {
    if (!fetchUrl) return;
    try {
      const { data } = await axios.get(fetchUrl);

      return data;
    } catch (error) {
      console.error('Error', error);
    }
  };

  useEffect(() => {
    async function fetch() {
      const response = await fetchPokemonDetails(url);

      if (response) {
        setPokemonDetails(response);
      }
    }
    fetch();
  }, [url]);

  return (
    <>
      {customPokemonDetails ? null : (
        <DetailsModal
          open={open}
          onClose={handleClose}
          details={pokemonDetails}
        />
      )}
      <Card sx={{ width: 200, margin: 2, height: 200 }}>
        <Button onClick={handleOpen}>
          <CardMedia
            className='card-image'
            component='img'
            alt='pokemon'
            height='100'
            width='100'
            image={
              customPokemonDetails
                ? customPokemonDetails.image
                : pokemonDetails?.sprites?.other?.dream_world?.front_default
            }
          />
        </Button>
        <CardContent>
          <Typography
            sx={{ textAlign: 'center' }}
            gutterBottom
            variant='h6'
            component='div'
          >
            {customPokemonDetails
              ? customPokemonDetails.name
              : name.toUpperCase()}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailCard;
