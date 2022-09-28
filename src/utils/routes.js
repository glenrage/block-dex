import App from '../App';
import AddPokemon from '../Pages/AddPokemon/AddPokemonForm.js';
import CustomGallery from '../Pages/CustomGallery';

export const routes = [
  { path: '/', key: 'home', Component: <App /> },
  {
    path: 'add-pokemon',
    key: 'add-pokemon',
    Component: <AddPokemon />,
  },
  {
    path: 'custom-gallery',
    key: 'custom-gallery',
    Component: <CustomGallery />,
  },
];
