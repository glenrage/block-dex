import { useEffect, useState, useContext } from 'react';
import DetailCard from '../DetailCard/DetailCard.js';
import Box from '@mui/material/Box';

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

  return (
    <Box className='gallery-container'>
      <div className='gallery'>
        {pokedexData?.results?.length
          ? pokedexData.results.map((item) => {
              return <DetailCard name={item.name} url={item.url} />;
            })
          : null}
      </div>
      <Pagination
        className='pagination-bar'
        count={30}
        page={page}
        onChange={handlePaginationChange}
      />
    </Box>
  );
};

export default Gallery;
