import { useEffect, useState } from 'react';
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
    <div className='gallery'>
      {console.log('rendering')}
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
  );
};

export default CustomGallery;
