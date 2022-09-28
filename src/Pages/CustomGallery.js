import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Layout from '../Components/Layout/Layout.js';
import DetailCard from '../Components/DetailCard/DetailCard.js';

const CustomGallery = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('customPokemon'));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <Layout>
      <Box
        className='custom-gallery'
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <h4>Your newly created pokemon will be shown here</h4>
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
    </Layout>
  );
};

export default CustomGallery;
