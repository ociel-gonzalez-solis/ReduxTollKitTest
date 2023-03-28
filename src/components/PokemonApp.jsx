import { usePokemons } from "./hooks";

export const PokemonApp = () => {
  const {} = usePokemons();
  return (
    <>
      <h1>PokemonApp</h1>

      <hr />

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
};
