import { useContext, useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import pokemonContext from '../../context/pokemon/pokemonContext';
import MovesList from './MovesList';
import ReturnBtn from './ReturnBtn';
import axios from 'axios';
import './Pokemon.css';

const Pokemon = () => {

    // Extraer pokemon de state inicial
    const pokemonsContext = useContext(pokemonContext);
    const { pokemon } = pokemonsContext;

    const history = useHistory();

    const [ species, guardarSpecie ] = useState([]);
    const [ poke, guardarPoke ] = useState([]);
    const [ carga, guardarCarga ] = useState(false);

    useEffect( () => {

        const url1 = async () => {
            const url = pokemon[0].url;
            const url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokemon[0].url.substring(34, pokemon[0].url.length -1)}`;

            const [ poke, species ] = await Promise.all([
                axios(url),
                axios(url2)
            ]);

            guardarPoke(poke.data);
            guardarSpecie(species.data);
            console.log("poke", poke.data);
            console.log("species", species.data);
            guardarCarga(true);
        }
        url1();
        // eslint-disable-next-line
    }, []);

    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('000'+pokemon[0].url.substring(34, pokemon[0].url.length -1)).slice(-3)}.png`;
    let nombre, id, type1, type2, genero, descripcion, grupohuevo, grupociclo, amistad, color;
    let habilidad1, habilidad2, habilidad3, habilidad4;
    let hp, atk, satk, def, sdef, spd;
    let background1, background2, tipo1, tipo2;
    let dostipos = false;
    let dosgrupos = false;
    let moves;

    if ( carga ) {
        type1 = poke.types[0].type.name;
        nombre = poke.name;
        id = ('000' + poke.id).slice(-3);
        
        if ( poke.types.length === 1 ) {
            dostipos = false;
        } else {
            dostipos = true;
            type2 = poke.types[1].type.name;
        }

        genero = species.genera[5].genus;

        if ( species.flavor_text_entries.length === 2 ) {

            descripcion = species.flavor_text_entries[0].flavor_text;

        } else if ( species.flavor_text_entries[5].language.name === 'es' ) {

            descripcion = species.flavor_text_entries[5].flavor_text;

        } else if ( species.flavor_text_entries[6].language.name === 'es' ) {

            descripcion = species.flavor_text_entries[6].flavor_text;

        } else if ( species.flavor_text_entries[26].language.name === 'es' ) {

            descripcion = species.flavor_text_entries[26].flavor_text;

        } else if ( species.flavor_text_entries[10].language.name === 'es' ) {

            descripcion = species.flavor_text_entries[10].flavor_text;

        } else if ( species.flavor_text_entries[22].language.name === 'es' ) {

            descripcion = species.flavor_text_entries[22].flavor_text;

        } else if ( species.flavor_text_entries[12].language.name === 'es' ) {

            descripcion = species.flavor_text_entries[12].flavor_text;

        } else {

            descripcion = species.flavor_text_entries[0].flavor_text;

        }

        if ( species.egg_groups.length === 0 ) {
            dosgrupos = false;
        } else if ( species.egg_groups.length === 1 ) {
            dosgrupos = false;
            grupohuevo = species.egg_groups[0].name;
        } else if ( species.egg_groups.length === 2 ){
            dosgrupos = true;
            grupohuevo = species.egg_groups[0].name;
            grupociclo = species.egg_groups[1].name;
        }

        amistad = species.base_happiness;
        color = species.color.name;
        habilidad1 = poke.abilities[0].ability.name;

        if ( poke.abilities.length === 2 ) {

            habilidad2 = poke.abilities[1].ability.name;

        } else if ( poke.abilities.length === 3 ) {

            habilidad2 = poke.abilities[1].ability.name;
            habilidad3 = poke.abilities[2].ability.name;

        } else if ( poke.abilities.length === 4 ) {

            habilidad2 = poke.abilities[1].ability.name;
            habilidad3 = poke.abilities[2].ability.name;
            habilidad4 = poke.abilities[3].ability.name;

        }

        hp = poke.stats[0].base_stat;
        atk = poke.stats[1].base_stat;
        satk = poke.stats[2].base_stat;
        def = poke.stats[3].base_stat;
        sdef = poke.stats[4].base_stat;
        spd = poke.stats[5].base_stat;
        moves = poke.moves;
        
    }

    useEffect( () => {

        background1 = document.querySelector('.background-top-1');
        background2 = document.querySelector('.background-bottom-2');
        tipo1 = document.querySelector('.tipo1');
        tipo2 = document.querySelector('.tipo2');

        switch( type1 ) {
            case 'grass':
                return (
                    background1.style.backgroundColor = "#9AC79C",
                    background2.style.backgroundColor = "#9AC79C",
                    tipo1.style.backgroundColor = "#9AC79C"
                )
            case 'fire':
                return (
                    background1.style.backgroundColor = "#E28569",
                    background2.style.backgroundColor = "#E28569",
                    tipo1.style.backgroundColor = "#E28569"
                )
            default:
                return
        }
    }, [carga])

    return (
        <div className="box">
            <ReturnBtn/>

            <div className="background-top-1">
                <div className="nombre-id">
                    <h2>{nombre}</h2>
                    <p>#{id}</p>
                </div>
                <div className="types">
                        <p className="tipo1">{type1}</p>
                    { dostipos 
                    ?
                        <p className="tipo2">{type2}</p>
                    :
                        null
                    }
                </div>
                <div className="imagen">
                    <img src={url} alt={nombre}/>
                </div>
            </div>
            <div className="background-top-2"></div>
            <div className="background-bottom-1"></div>
            <div className="background-bottom-2"></div>

        </div>
    );
}

export default Pokemon;