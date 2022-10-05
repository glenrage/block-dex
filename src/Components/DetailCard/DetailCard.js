import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DetailsModal from '../Modals/DetailsModal';
import Typography from '@mui/material/Typography';
import { fetchPokemonDetails } from '../../utils/rest_helpers';

const DetailCard = ({ name, url, customPokemonDetails }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [pokemonDetails, setPokemonDetails] = useState();

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
      <DetailsModal
        open={open}
        onClose={handleClose}
        details={pokemonDetails}
        customPokemonDetails={customPokemonDetails}
      />
      <Card
        sx={{ width: 200, margin: 2, height: 220 }}
        data-testid='detail-card'
      >
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
                : pokemonDetails?.sprites?.other?.dream_world?.front_default ||
                  pokemonDetails?.sprites?.front_default
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
