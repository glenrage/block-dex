import axios from 'axios';

export const fetchPokemonDetails = async (fetchUrl) => {
  if (!fetchUrl) return;
  try {
    const { data } = await axios.get(fetchUrl);

    return data;
  } catch (error) {
    console.error('Error fetching pokemon details', error);
  }
};

export const fetchSecondaryPokemonDetails = async (url) => {
  if (!url) return;
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    console.error('error fetching secondary pokemon detaiils', error);
  }
};

export const fetchPokemonData = async (limit, page) => {
  let pokemonApiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${page}}`;

  try {
    const { data } = await axios.get(pokemonApiUrl);

    return data;
  } catch (error) {
    console.error('error fetching pokemon data', error);
  }
};
