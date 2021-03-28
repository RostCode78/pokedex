import { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import styles from './css/Pokemon.module.css';

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

    &:hover{
        box-shadow: 4px 4px 8px #00000022, -4px -4px 8px #FFFFFF22;
    }
    &:active{
        box-shadow: 4px 4px 8px #00000012, -4px -4px 8px #FFFFFF12;
    }
`

const Pokemon = ({ pokemon }) => {

    const [ poke, guardarPoke ] = useState([]);

    const obtenerPoke = async e => {
        const url = pokemon.url;

        const response = await axios.get(url);

        guardarPoke(response.data);
        console.log(response.data);
    }

    return ( 
        <Card
            onClick={obtenerPoke}
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
