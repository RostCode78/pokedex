import Formulario from './components/Formulario';
import ListaPokemons from './components/ListaPokemons';

import PokemonsProvider from './context/PokemonsContext';

function App() {
  return (
    <PokemonsProvider>
      <Formulario/>
      <ListaPokemons/>
    </PokemonsProvider>
  );
}

export default App;
