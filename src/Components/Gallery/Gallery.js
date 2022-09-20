import { useEffect, useState, useContext } from 'react';
import DetailCard from '../DetailCard/DetailCard.js';
import { PokedexContext } from '../../context';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

const limit = 20;

const Gallery = () => {
  const getOffset = (num) => {
    return (num - 1) * limit;
  };

  const [pokedexData, setPokedexData] = useState([]);
  const [page, setPage] = useState(1);

  const handlePaginationChange = (event, value) => {
    setPage(value);
  };

  let pokemonApiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${getOffset(
    page
  )}}`;

  const fetchPokemonData = async (url) => {
    try {
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      console.error('error fetching pokemon', error);
    }
  };

  useEffect(() => {
    async function fetch() {
      let response = await fetchPokemonData(pokemonApiUrl);

      if (response) setPokedexData(response);
    }
    fetch();
  }, [pokemonApiUrl]);

  // console.log('pokedex data', pokedexData);

  // console.log('Context test', test);
  return (
    <>
      <div className='gallery'>
        <h1>Gallery</h1>
        {pokedexData?.results?.length
          ? pokedexData.results.map((item) => {
              return <DetailCard name={item.name} url={item.url} />;
            })
          : null}
      </div>
      <Pagination count={50} page={page} onChange={handlePaginationChange} />
    </>
  );
};

export default Gallery;
