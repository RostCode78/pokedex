import { useState } from 'react';
import styles from './css/Formulario.module.css';
import lupa from '../images/lupa.svg';

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState('');
    const [ error, guardarError ] = useState('');

    const onFocusLine = e => {
        e.target.style.borderBottom = '2px solid #f9f5f4';
    }

    const onBlurLine = e => {
        e.target.style.borderBottom = '2px solid #f9f5f45d';
    }

    return (

        <form>
            <div className={styles.row}>
                <div className={styles.form_group}>
                    <input
                        type="text"
                        className={styles.form_control}
                        placeholder="Busca un pokemon, ejemplo: Lapras o 131"
                        onChange={ e => guardarBusqueda(e.target.value)}
                        onFocus={onFocusLine}
                        onBlur={onBlurLine}
                    />
                </div>
                <div className={styles.form_submit}>
                    <input
                        type="submit"
                        className={styles.btn}
                        placeholder="Buscar"
                    />
                </div>
            </div>
        </form>

    );
}

export default Formulario;