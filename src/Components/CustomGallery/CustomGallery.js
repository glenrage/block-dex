import { useEffect, useState, useContext } from 'react';
import DetailCard from '../DetailCard/DetailCard.js';
import { PokedexContext } from '../../context';

const CustomGallery = () => {
  const [items, setItems] = useState([]);

  console.log('itesm', items);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('customPokemon'));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <>
      <div className='CustomGallery'>
        {items?.length
          ? items.map((item) => {
              return <DetailCard name={item.name} url={item.url} />;
            })
          : null}
      </div>
    </>
  );
};

export default CustomGallery;
