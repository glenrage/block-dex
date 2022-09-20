import "./App.css";
import axios from 'axios'
import React, { useEffect, useState } from "react";
import Gallery from "./Components/Gallery/Gallery.js";
import Layout from "./Components/Layout/Layout.js";

function App() {

  const [pokedexData, setPokedexData] = useState([]);
  const [initialDetails, setInitialDetails] = useState([])


   const fetchPokemonData = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    const {data} = await axios.get(url)    
  
    return data
  };

  const fetchPokemonDetails = async () => {
    try {
      const response = await Promise.all(
        pokedexData?.results?.map((item) => fetch(item.url).then((res) => res.json()))
        );

      if (response) setInitialDetails(response);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    async function fetch() {
      let response = await fetchPokemonData();
    
      setPokedexData(response);

      if(response?.results) {
        await fetchPokemonDetails();
      }
    }

  

    fetch();
  },[]);

  console.log('pokedex data', pokedexData)

  console.log('intiial detials', initialDetails)

  return (
    <Layout>
      <div className="main">
        <Gallery pokemonData={pokedexData} />

      </div>
    </Layout>
  );
}

export default App;
