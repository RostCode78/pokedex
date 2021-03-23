import { useContext, useState, useEffect } from 'react';
import pokemonContext from '../context/pokemon/pokemonContext';
import styles from './css/Formulario.module.css';
import lupa from '../images/lupa.svg';
import Error from './Error';

const Formulario = () => {

    // Extraer pokemon de state inicial
    const pokemonsContext = useContext(pokemonContext);
    const { buscarPokemon } = pokemonsContext;

    const [ pokemon, guardarPokemon ] = useState({
        nombre: ''
    });
    const [ error, guardarError ] = useState('');

    // Extraer nombre de pokemon
    const { nombre } = pokemon;

    const onChangePokemon = e => {
        guardarPokemon({
            ...pokemon,
            [e.target.name] : e.target.value
        });
    }

    useEffect( () => {
        buscarPokemon(nombre.toLowerCase());
        // eslint-disable-next-line
    }, [nombre])

    const onFocusLine = e => {
        e.target.style.borderBottom = '2px solid #f9f5f4';
    }

    const onBlurLine = e => {
        e.target.style.borderBottom = '2px solid #f9f5f45d';
    }

    const buscarNombre = e => {
        e.preventDefault();

        // Validar
        if( nombre.trim() === '' ) {
            guardarError(true);
            return;
        }
        guardarError(false);

    }

    return (

        <form
            onSubmit={buscarNombre}
        >
            <div className={styles.row}>
                <div className={styles.form_group}>
                    <input
                        type="text"
                        className={styles.form_control}
                        placeholder="Busca un pokemon, ejemplo: Lapras/131"
                        onFocus={onFocusLine}
                        onBlur={onBlurLine}
                        name="nombre"
                        value={nombre}
                        onChange={ onChangePokemon }
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