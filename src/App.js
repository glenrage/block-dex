import './App.css';
import Gallery from './Components/Gallery/Gallery.js';
import Layout from './Components/Layout/Layout.js';
import { PokedexContextProvider } from './context';
import AddPokemonForm from './Components/AddPokemon/AddPokemonForm.js';

function App() {
  return (
    <PokedexContextProvider>
      <Layout>
        <div className='main'>
          <AddPokemonForm />
          {/* <Gallery /> */}
        </div>
      </Layout>
    </PokedexContextProvider>
  );
}

export default App;
