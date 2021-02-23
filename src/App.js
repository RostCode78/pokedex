import Formulario from './components/Formulario';

import PokemonsProvider from './context/PokemonsContext';

function App() {
  return (
    <PokemonsProvider>
      <Formulario/>
    </PokemonsProvider>
  );
}

export default App;
