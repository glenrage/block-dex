import { render, screen } from '@testing-library/react';

import Gallery from './Components/Gallery/Gallery.js';
import MainOverview from './Components/MainOverview.js';
import AddPokemonForm from './Components/AddPokemon/AddPokemonForm.js';
import CustomGallery from './Components/CustomGallery/CustomGallery.js';
import DetailCard from './Components/DetailCard/DetailCard.js';
import ErrorHandler from './Components/ErrorHandler.js';

import userEvent from '@testing-library/user-event';

describe('Simple PokeDecks Integration Tests', () => {
  describe('Happy Path Component rendering', () => {
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
      await screen.findByText('CHARMANDER');
      await screen.findByText('CHARMELEON');
    });

    it('Should render Gallery with 20 pokemon cards', async () => {
      render(<Gallery />);

      const test = await screen.findAllByTestId('detail-card');

      expect(test.length).toBe(20);
    });

    it('Should render Custom Gallery', async () => {
      const { container } = render(<CustomGallery />);

      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const customGallery = container.getElementsByClassName('custom-gallery');

      expect(customGallery.length).toBe(1);
    });

    it('Should render Add New Pokemon Form', async () => {
      render(<AddPokemonForm />);

      await screen.findByText('Add your own custom Pokemon');
    });

    it('should render detail card and additional details when clicked', async () => {
      render(
        <DetailCard
          name='test pokemon'
          url='https://pokeapi.co/api/v2/pokemon-species/28/'
        />
      );

      userEvent.click(
        screen.getByRole('button', {
          name: /pokemon/i,
        })
      );

      await screen.findByText('TEST POKEMON');
    });
  });

  describe('Error Boundary', () => {
    it('should render fallback component upon error', () => {
      const ThrowError = () => {
        throw new Error('Testing error boundary');
      };

      render(
        <ErrorHandler fallback={<ErrorHandler />}>
          <ThrowError />
        </ErrorHandler>
      );

      expect(screen.getByTestId('error-fallback')).toBeVisible();
    });
  });
});
