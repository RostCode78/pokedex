import {
    OBTENER_POKEMONS,
    BUSCAR_POKEMON,
    FILTRAR_POKEMON,
    POKEMON_ACTUAL,
    MOSTRAR_DATOS,
    MOSTRAR_STATS,
    MOSTRAR_MOVES
} from '../../types/index';

export default ( state, action ) => {
    switch( action.type ) {
        case OBTENER_POKEMONS:
            return {
                ...state,
                catchemall: action.payload
            }
        case BUSCAR_POKEMON:
            return {
                ...state,
                busqueda: action.payload
            }
        case FILTRAR_POKEMON:
            return {
                ...state,
                catchemall: state.catchemall.filter( pokemon => pokemon.name.match(action.payload))
            }
        case POKEMON_ACTUAL:
            return {
                ...state,
                pokemon: state.catchemall.filter( pokemon => pokemon.url.match(action.payload))
            }
        case MOSTRAR_DATOS:
            return {
                ...state,
                dataicon: true,
                statsicon: false,
                movesicon: false
            }
        case MOSTRAR_STATS:
            return {
                ...state,
                dataicon: false,
                statsicon: true,
                movesicon: false
            }
        case MOSTRAR_MOVES:
            return {
                ...state,
                dataicon: false,
                statsicon: false,
                movesicon: true
            }
        default:
            return state;
    }

}