import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Spinner from '../Spinner';

const Pruebas = styled.div`
    width: 100%;
    height: auto;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Movimiento = styled.p`
    width: 90%;
    height: auto;
    padding: 20px 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5em;
    font-weight: 400;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E7E7E7;
    box-shadow: 4px 4px 8px #00000015, -4px -4px 8px #ffffff15;
    border-radius: 50px;
`;

const MovesList = ({ moves }) => {

    const [ cargar, guardarCargar ] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            guardarCargar(true);
        }, 3000);
    }, [moves])

    return ( 
        <Pruebas>
            { cargar 
            ?
                moves.map( movimiento => (
                    <Movimiento>{movimiento.move.name}</Movimiento>
                ))
            :
                <Spinner/>
            }
        </Pruebas>
    );
}

export default MovesList;