import { useState } from 'react';
import styles from './css/Formulario.module.css';
import lupa from '../images/lupa.svg';
import Error from './Error';

const Formulario = () => {

    const [ pokemon, guardarPokemon ] = useState('');
    const [ error, guardarError ] = useState('');

    const onFocusLine = e => {
        e.target.style.borderBottom = '2px solid #f9f5f4';
    }

    const onBlurLine = e => {
        e.target.style.borderBottom = '2px solid #f9f5f45d';
    }

    const buscarPokemon = e => {
        e.preventDefault();

        // Validar
        if( pokemon.trim() === '' ) {
            guardarError(true);
            return;
        }
        guardarError(false);

        // Enviar el termino de búsqueda hacia el componente principal.

    }

    const onChangePokemon = e => {
        guardarPokemon (e.target.value);
    }

    return (

        <form
            onSubmit={buscarPokemon}
        >
            <div className={styles.row}>
                <div className={styles.form_group}>
                    <input
                        type="text"
                        className={styles.form_control}
                        placeholder="Busca un pokemon, ejemplo: Lapras o 131"
                        onChange={ onChangePokemon }
                        onFocus={onFocusLine}
                        onBlur={onBlurLine}
                    />
                </div>
                <div className={styles.form_submit}>
                    <button
                        type="submit"
                        className={styles.btn}
                    ><img src={lupa} alt="lupa.svg"/></button>
                </div>
            </div>

            { error ? <Error mensaje="Coloca un nombre o numero de pokemon"/> : null }

        </form>

    );
}

export default Formulario;