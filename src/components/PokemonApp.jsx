import { usePokemons } from "./hooks";

export const PokemonApp = () => {
  const { newPokemonPage, page, pokemons = [], isLoading } = usePokemons();
  return (
    <>
      <h1>PokemonApp</h1>

      <hr />
      <span>Loading Pokemons: {!isLoading ? "true" : "false"}</span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => newPokemonPage(page)}>
        Next Page
      </button>
    </>
  );
};
