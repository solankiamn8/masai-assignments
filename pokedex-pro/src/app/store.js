import { createStore, combineReducers } from "redux";
import { pokemonReducer } from '../features/pokemon/pokemonReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer
});

export const store = createStore(rootReducer);
