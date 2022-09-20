export const fetchPokemonData = async () => {
    const url = "https://anapioficeandfire.com/api/books";
  
    const response = await fetch(url);
  
    return response;
  };
  