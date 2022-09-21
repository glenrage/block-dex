import { useEffect, useState, useContext } from 'react';
import DetailCard from '../DetailCard/DetailCard.js';
import { PokedexContext } from '../../context';

const CustomGallery = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('customPokemon'));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
      <div className='gallery'>
        {items?.length
          ? items.map((item) => {
              return <DetailCard customPokemonDetails={item} />;
            })
          : null}
      </div>
    </>
  );
};

export default CustomGallery;
