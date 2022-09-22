import { useEffect, useState } from 'react';
import DetailCard from '../DetailCard/DetailCard.js';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { fetchPokemonData } from '../../utils/rest_helpers.js';

const Gallery = () => {
  const limit = 20;

  const [pokedexData, setPokedexData] = useState([]);
  const [page, setPage] = useState(1);

  const getOffset = (num) => {
    return (num - 1) * limit;
  };

  const handlePaginationChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function fetch() {
      let response = await fetchPokemonData(limit, getOffset(page));

      if (response) setPokedexData(response);
    }
    fetch();
  }, [page]);

  const pageCount = pokedexData?.count
    ? Math.floor(pokedexData.count / limit)
    : 0;

  return (
    <Box className='gallery-container' data-testid='gallery-test'>
      <div className='gallery'>
        {pokedexData?.results?.length
          ? pokedexData.results.map((item) => {
              return (
                <DetailCard name={item.name} url={item.url} key={item.url} />
              );
            })
          : null}
      </div>
      <Pagination
        data-testid='pagination'
        className='pagination-bar'
        count={pageCount}
        page={page}
        onChange={handlePaginationChange}
      />
    </Box>
  );
};

export default Gallery;
