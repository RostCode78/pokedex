import {
    OBTENER_POKEMONS,
    BUSCAR_POKEMON,
    FILTRAR_POKEMON
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

        default:
            return state;
    }

}