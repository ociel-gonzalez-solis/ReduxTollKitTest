import {
  counterSlice,
  decrement,
  increment,
  incrementBy,
} from "./slice/counter";
import {
  pokemonSlice,
  startLoadingPokemons,
  setPokemons,
  getPokemons,
} from "./slice/pokemon";
import { todoSlice } from "./slice/todo";

import { store } from "./store";

export {
  store,
  counterSlice,
  increment,
  decrement,
  incrementBy,
  todoSlice,
  pokemonSlice,
  startLoadingPokemons,
  setPokemons,
  getPokemons,
};
