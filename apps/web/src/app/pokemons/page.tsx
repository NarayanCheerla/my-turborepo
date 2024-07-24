"use client";
import Image from "next/image";
import useGetPokemons from "../../hooks/useGetPokemons";
import useGetPokemonDetails from "../../hooks/useGetPokemonDetails";

const Pokemons = () => {
  const { data, error , isError, isLoading } = useGetPokemons();
  const {data: pokemonDetails, isError: isDetailsError, error: detailsError, isLoading: isLoadingDetails} = useGetPokemonDetails({
    url: "https://pokeapi.co/api/v2/pokemon/1/"
  })
  return (
    <div className="">
      <h1 className="font-bold text-lg">Pokemons List</h1>
      {(isLoading || isLoadingDetails) && "Loading..."}
      {isError && <div className="text-red-500">{`Error: ${error.message}`}</div>}
      {isDetailsError && <div className="text-red-500">{`Error: ${detailsError.message}`}</div>}
      <div className="flex flex-wrap gap-4">
        {data?.results?.map((pokemon) => (
          <div
            key={pokemon.name}
            className="flex flex-col items-center border bg-slate-300 rounded-md p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 cursor-pointer"
          >
            <Image
              width="100"
              height="50"
              src={pokemonDetails?.sprites.front_default ?? ""}
              alt={pokemon.name}
            />
            <h1 className="font-bold">{pokemon.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
