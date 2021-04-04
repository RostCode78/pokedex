import { Fragment, useContext } from 'react';
import pokemonContext from '../../context/pokemon/pokemonContext';
import styled from '@emotion/styled';
import '../css/Navbar.css';
import dataOnImg from '../../images/navbar/data-active.svg';
import dataOffImg from '../../images/navbar/data-hidden.svg';
import statsOnImg from '../../images/navbar/stats-active.svg';
import statsOffImg from '../../images/navbar/stats-hidden.svg';
import movesOnImg from '../../images/navbar/moves-active.svg';
import movesOffImg from '../../images/navbar/moves-hidden.svg';

const Bar = styled.div`
    width: 80%;
    height: 70px;
    background-color: #e7e7e7;
    border: 3px solid #e7e7e7;
    box-shadow: 4px 4px 8px #00000015, -4px -4px 8px #FFFFFF15;
    border-radius: 50px;
    position: absolute;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Navbar = () => {

    // Extraer pokemon de state inicial
    const pokemonsContext = useContext(pokemonContext);
    const { dataicon, statsicon, movesicon, dataOn, statsOn, movesOn } = pokemonsContext;

    const dataClick = e => {
        dataOn();
    }

    const statsClick = e => {
        statsOn();
    }

    const movesClick = e => {
        movesOn();
    }

    return (
        <Bar>
            <div className="list-bar">
                <div className="btn-data" onClick={dataClick}>
                    { dataicon
                    ?
                        <Fragment>
                            <img src={dataOnImg} alt="DataOn"/>
                            <div className="selector">
                                <div className="point"></div>
                            </div>
                        </Fragment>
                    :
                        <img src={dataOffImg} alt="DataOff"/>
                    }
                </div>
                <div className="btn-stats" onClick={statsClick}>
                    { statsicon
                    ?
                        <Fragment>
                            <img src={statsOnImg} alt="StatsOn"/>
                            <div className="selector">
                                <div className="point"></div>
                            </div>
                        </Fragment>
                    :
                        <img src={statsOffImg} alt="StatsOff"/>
                    }
                </div>
                <div className="btn-moves" onClick={movesClick}>
                    { movesicon
                    ?
                        <Fragment>
                            <img src={movesOnImg} alt="MovesOn"/>
                            <div className="selector">
                                <div className="point"></div>
                            </div>
                        </Fragment>
                    :
                        <img src={movesOffImg} alt="MovesOff"/>
                    }
                </div>
            </div>
        </Bar>
    );
}

export default Navbar;