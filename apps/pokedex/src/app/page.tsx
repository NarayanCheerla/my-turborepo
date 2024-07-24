"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Card } from "@repo/ui/card";
import useGetPokemons from "../hooks/useGetPokemons";
import { useAppDispatch } from "./features/pokemon/hooks";
import { setPokemon } from "./features/pokemon/pokemon-slice";
import type { PokemonDetailsResponse, PokemonResponse } from "../types";

const Pokemons = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isErrorPokemonDetails, setIsErrorPokemonDetails] = useState(false);
  const [loadingPokemonDetails, setLoadingPokemonDetails] = useState(false);
  const [pokemons, setPokemons] = useState<PokemonDetailsResponse[]>([]);
  const { data, error, isError, isLoading, isSuccess } = useGetPokemons();

  const fetchPokemonDetails = async (data: PokemonResponse) => {
    const fetchedPokemons = await Promise.all(
      data?.results?.map(async (pokemon) => {
        try {
          const response = await axios.get(pokemon.url);
          return response.data;
        } catch (error) {
          console.error(error);
          setIsErrorPokemonDetails(true);
        }
      })
    );
    setPokemons(fetchedPokemons);
    setLoadingPokemonDetails(false);
  };

  useEffect(() => {
    if (isSuccess && data && data.results.length > 0) {
      setLoadingPokemonDetails(true);
      fetchPokemonDetails(data);
    }
  }, [data, isSuccess]);

  const handleClick = (data: PokemonDetailsResponse) => {
    dispatch(setPokemon(data));
    router.push("/pokemon-details");
  }
  return (
    <div className="">
      <h1 className="font-bold text-lg">Pokemons List</h1>
      {(isLoading || loadingPokemonDetails) && "Loading..."}
      {isError && (
        <div className="text-red-500">{`Error: ${error.message}`}</div>
      )}
      {isErrorPokemonDetails && (
        <div className="text-red-500">Error while fetching pokemon details</div>
      )}

      <div className="flex flex-wrap gap-4">
        {pokemons?.map((data) => (
          <Card key={data.name}>
          <div
            onClick={() => handleClick(data)}
            className="flex flex-col items-center"
          >
            <Image
              width="100"
              height="50"
              src={data.sprites.front_default}
              alt={data.name ?? "pokemon image"}
            />
            <h1 className="font-bold">{`${data.id}.${data.name}`}</h1>
          </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
