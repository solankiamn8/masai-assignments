import { createStore, combineReducers } from "redux";
import pokemonReducer from '../features/pokemon/pokemonReducer'

let rootReducer = combineReducers({
    pokemon: pokemonReducer
})

export let store = createStore(rootReducer)