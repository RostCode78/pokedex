import { Fragment } from 'react';
import Formulario from '../Formulario';
import ListaPokemons from '../ListaPokemons';

const Lista = () => {
    return (
        <Fragment>
            <Formulario/>
            <ListaPokemons/>
        </Fragment>
    );
}

export default Lista;