import { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const Card = styled.div`
    width: 250px;
    height: 280px;
    margin: 0 22px 45px 22px;
    padding: 0 10px;
    background-color: #f9f5f4;
    border: 5px solid #f9f5f4;
    box-shadow: 4px 4px 8px #00000032, -4px -4px 8px #FFFFFF52;
    border-radius: 30px;
    cursor: pointer;
    transition: .2s ease-in-out;

    &:hover{
        box-shadow: 4px 4px 8px #FF000022, -4px -4px 8px #0000FF22;
    }
    &:active{
        box-shadow: 4px 4px 8px #FF000012, -4px -4px 8px #0000FF12;
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
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.substring(34, pokemon.url.length -1)}.png`} alt={`Imagen de ${pokemon.name}`}/>
            <p>{pokemon.name}</p>
        </Card>
    );
}

export default Pokemon;
