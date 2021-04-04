import { useContext } from 'react';
import styled from '@emotion/styled';
import styles from './css/Pokemon.module.css';
import { useHistory } from 'react-router-dom';
import pokemonContext from '../context/pokemon/pokemonContext';

const Card = styled.div`
    width: 320px;
    height: 100px;
    margin: 0 15px 25px 15px;
    padding: 10px;
    background-color: #E7E7E7;
    border: 5px solid #E7E7E7;
    box-shadow: 4px 4px 8px #00000032, -4px -4px 8px #FFFFFF52;
    border-radius: 30px;
    cursor: pointer;
    transition: .1s ease-in-out;
    display: flex;
    align-items: center;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:hover{
        box-shadow: 4px 4px 8px #00000022, -4px -4px 8px #FFFFFF22;
    }
    &:active{
        box-shadow: 4px 4px 8px #00000012, -4px -4px 8px #FFFFFF12;
    }
`

const Pokemon = ({ pokemon }) => {

    // Extraer pokemon de state inicial
    const pokemonsContext = useContext(pokemonContext);
    const { pokemonActual } = pokemonsContext;

    const history = useHistory();

    const seleccionarPokemon = async nombre => {
        await pokemonActual(nombre);
        history.push('/pokemon');
    }

    return (

            <Card
                onClick={ () => seleccionarPokemon(pokemon.url) }
            >
                <div className={styles.text}>
                    <p>#{('000'+pokemon.url.substring(34, pokemon.url.length -1)).slice(-3)}</p>
                    <h2>{pokemon.name}</h2>
                </div>
                <div className={styles.image}>
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('000'+pokemon.url.substring(34, pokemon.url.length -1)).slice(-3)}.png`} alt={`Imagen de ${pokemon.name}`}/>
                </div>
                
            </Card>
            
    );
}

export default Pokemon;
