import { useContext, useEffect } from 'react';
import pokemonContext from '../context/pokemon/pokemonContext';
import Pokemon from './Pokemon';
import Spinner from './Spinner';
import styled from '@emotion/styled';

const Row = styled.div`
    width: 100%;
    height: auto;
    padding: 50px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50px;
`;

const ListaPokemons = () => {

    // Extraer pokemon de state inicial
    const pokemonsContext = useContext(pokemonContext);
    const { busqueda, catchemall, pokemons, cargando, obtenerPokemons, filtrarPokemon } = pokemonsContext;

    useEffect(() => {
        obtenerPokemons(pokemons);
        // eslint-disable-next-line
    }, [pokemons]);

    useEffect(() => {
        obtenerPokemons(pokemons);
        filtrarPokemon(busqueda);
        // eslint-disable-next-line
    }, [busqueda]);

    return (
        <Row>
            { cargando
            ?
                <Spinner/>
            :
                catchemall.map(pokemon => (
                    <Pokemon
                        key={pokemon.url}
                        pokemon={pokemon}
                    />
                ))
            }
        </Row>
    );
}

export default ListaPokemons;