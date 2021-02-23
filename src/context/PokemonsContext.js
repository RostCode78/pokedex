import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el Context
export const PokemonsContext = createContext();

// El Provider es donde se encuentran las funciones y state
const PokemonsProvider = (props) => {

    // Crear el state del Context
    const [ pokemons, guardarPokemons ] = useState([]);

    // Ejecutar el llamado al API
    useEffect(() => {
        const obtenerPokemons = async () => {
            const url = 'https://pokeapi.co/api/v2/pokemon/?limit=898';

            const pokemons = await axios.get(url);

            guardarPokemons(pokemons.data.results)
        }
        obtenerPokemons();
    }, [])

    return (
        <PokemonsContext.Provider
            value={{
                pokemons
            }}
        >
            {props.children}
        </PokemonsContext.Provider>
    )

}

export default PokemonsProvider;