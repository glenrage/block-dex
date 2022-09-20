import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DetailsModal from '../Modals/DetailsModal';
import Typography from '@mui/material/Typography';
import './DetailCard.css';
import axios from 'axios';

const DetailCard = ({ name, url }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [pokemonDetails, setPokemonDetails] = useState();

  const fetchPokemonDetails = async (fetchUrl) => {
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

  console.log('pokemon details', pokemonDetails);

  return (
    <>
      <DetailsModal
        open={open}
        onClose={handleClose}
        details={pokemonDetails}
      />

      <Card sx={{ width: 200, margin: 2, height: 200 }}>
        <Button onClick={handleOpen}>
          <CardMedia
            component='img'
            alt='pokemon'
            height='100'
            width='100'
            image={
              pokemonDetails?.sprites?.other?.dream_world?.front_default ||
              pokemonDetails?.image
            }
          />
        </Button>

        <CardContent>
          <Typography gutterBottom variant='h4' component='div'>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DetailCard;
