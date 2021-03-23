import { useReducer, useState, useEffect } from 'react';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import axios from 'axios';

const PokemonState = props => {

    // Crear el state del Context
    const [ pokemons, guardarPokemons ] = useState([]);

    // Ejecutar el llamado al API
    useEffect(() => {
        const obtenerPokemons = async (limit) => {
            const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`;

            const response = await axios.get(url);

            guardarPokemons(response.data.results);
        }
        obtenerPokemons(898);
    }, [])

    return (
        <PokemonContext.Provider
            value={{
                pokemons
            }}
        >
            { props.children }
        </PokemonContext.Provider>
    )

}

export default PokemonState;