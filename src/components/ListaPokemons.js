import { useContext } from 'react';
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
    const { pokemons } = pokemonsContext;

    return (
        <Row>
            { pokemons.map(pokemon => (
                <Pokemon
                    key={pokemon.url}
                    pokemon={pokemon}
                />
            )) }
        </Row>
    );
}

export default ListaPokemons;