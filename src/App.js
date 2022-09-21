import Layout from './Components/Layout.js';
import MainOverview from './Components/MainOverview.js';
import { PokedexContextProvider } from './context';
import ErrorHandler from './Components/ErrorHandler';
import './App.css';

function App() {
  return (
    <ErrorHandler>
      <PokedexContextProvider>
        <Layout>
          <MainOverview />
        </Layout>
      </PokedexContextProvider>
    </ErrorHandler>
  );
}

export default App;
