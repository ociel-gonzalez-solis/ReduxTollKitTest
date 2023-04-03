import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../store";

export const usePokemons = () => {
  const dispatch = useDispatch();
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);

  const newPokemonPage = (newPage) => {
    dispatch(getPokemons(newPage));
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return { newPokemonPage, page, pokemons, isLoading };
};
