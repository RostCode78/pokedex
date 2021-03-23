import { useContext, useEffect } from 'react';
import pokemonContext from '../context/pokemon/pokemonContext';
import Pokemon from './Pokemon';
import styled from '@emotion/styled';

const Row = styled.div`
    width: 100%;
    height: auto;
    padding: 50px 0;
    background-color: #f9f5f4;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const ListaPokemons = () => {

    // Extraer pokemon de state inicial
    const pokemonsContext = useContext(pokemonContext);
    const { busqueda, catchemall, pokemons, obtenerPokemons } = pokemonsContext;

    useEffect(() => {
        obtenerPokemons(pokemons);
        // eslint-disable-next-line
    }, [pokemons]);

    return (
        <Row>
            {catchemall.map(pokemon => (
                <Pokemon
                    key={pokemon.url}
                    pokemon={pokemon}
                />
            ))}
        </Row>
    );
}

export default ListaPokemons;