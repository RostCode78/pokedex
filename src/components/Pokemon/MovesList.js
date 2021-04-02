import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const Pruebas = styled.div`
    width: 100%;
    height: auto;
    padding: 50px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #ffff88;
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
                    <h2>{movimiento.move.name}</h2>
                ))
            :
                <h2>Sigue intentando viejo...</h2>
            }
        </Pruebas>
    );
}

export default MovesList;