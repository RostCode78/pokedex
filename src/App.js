import Formulario from './components/Formulario';
import ListaPokemons from './components/ListaPokemons';

// import PokemonsProvider from './context/PokemonsContext';
import PokemonState from './context/pokemon/pokemonState';

function App() {
  return (
    <PokemonState>
      <Formulario/>
      <ListaPokemons/>
    </PokemonState>
  );
}

export default App;
