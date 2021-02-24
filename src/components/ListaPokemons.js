import { useContext } from 'react';
import { PokemonsContext } from '../context/PokemonsContext';
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

    // Extraer los pokemons
    const { pokemons } = useContext(PokemonsContext);

    return (
        <Row>
            { pokemons.map(pokemon => (
                <Pokemon
                    key={pokemon.url}
                    pokemon={pokemon}
                />
            )).slice(0,25) }
        </Row>
    );
}

export default ListaPokemons;