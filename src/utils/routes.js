import App from '../App';
import AddPokemon from '../Pages/AddPokemon/AddPokemonForm.js';

export const routes = [
  { path: '/', name: 'home', Component: <App /> },
  {
    path: '/add-pokemon',
    name: 'add-pokemon',
    Component: <AddPokemon />,
  },
];
