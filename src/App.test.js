import { render, screen } from '@testing-library/react';
import Gallery from './Components/Gallery/Gallery.js';
import MainOverview from './Components/MainOverview.js';
import AddPokemonForm from './Components/AddPokemon/AddPokemonForm.js';
import CustomGallery from './Components/CustomGallery/CustomGallery.js';

// test('renders learn react link', () => {
//   const view = render(<Gallery />);

//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Simple PokeDecks Integration Tests', () => {
  describe('Happy Path rendering', () => {
    it('Should render Main Overview Tabs', async () => {
      render(<MainOverview />);

      await screen.findByText('Pokemon Gallery');
      await screen.findByText('Add New Pokemon');
      await screen.findByText('Custom Pokemon Gallery');
    });

    it('Should render Gallery and expected Pokedex initial fetch results', async () => {
      render(<Gallery />);

      await screen.findByText('BULBASAUR');
      await screen.findByText('IVYSAUR');
      await screen.findByText('VENUSAUR');
    });

    it('Should render Custom Gallery', async () => {
      const { container } = render(<CustomGallery />);

      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const boxes = container.getElementsByClassName('gallery');

      expect(boxes.length).toBe(1);
    });

    it('Should render Add New Pokemon Form', async () => {
      render(<AddPokemonForm />);

      await screen.findByText('Add your own custom Pokemon');
    });
  });

  describe('Pokedecks API requests', () => {
    it('Should render Main Overview Page', async () => {
      render(<MainOverview />);

      await screen.findByText('PokeyDecks results');
    });

    it('Should render Gallery', async () => {
      render(<MainOverview />);

      await screen.findByText('PokeyDecks results');
    });

    it('Should render Custom Gallery', async () => {
      render(<MainOverview />);

      await screen.findByText('PokeyDecks results');
    });

    it('Should render Add New Pokemon section', async () => {
      render(<MainOverview />);

      await screen.findByText('PokeyDecks results');
    });
  });
});
