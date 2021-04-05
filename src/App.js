import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lista from './components/Lista/Lista';
import Pokemon from './components/Pokemon/Pokemon';
import PokemonState from './context/pokemon/pokemonState';

function App() {
  return (
    <PokemonState>
      <Router>
        <Switch>
          <Route exact path="/" component={Lista}/>
          <Route exact path="/pokemon" component={Pokemon}/>
        </Switch>
      </Router>
    </PokemonState>
  );
}

export default App;
