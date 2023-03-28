import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../store";

export const usePokemons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return {};
};
