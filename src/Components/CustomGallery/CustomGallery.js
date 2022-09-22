import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import DetailCard from '../DetailCard/DetailCard.js';

const CustomGallery = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('customPokemon'));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <Box className='custom-gallery'>
      <div className='gallery'>
        {items?.length
          ? items.map((item, i) => {
              return (
                <DetailCard
                  customPokemonDetails={item}
                  key={`${i}--${item.id}`}
                />
              );
            })
          : null}
      </div>
    </Box>
  );
};

export default CustomGallery;
