"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@repo/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import useGetPokemons from "../hooks/useGetPokemons";
import type { PokemonDetailsResponse } from "../types";
import { useAppDispatch } from "./features/pokemon/hooks";
import { setPokemon } from "./features/pokemon/pokemon-slice";
import useGetPokemonDetails from "../hooks/useGetPokemonDetails";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const Pokemons = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [url, setUrl] = useState(API_URL);
  const [nextUrl, setNextUrl] = useState("");
  const [urls, setUrls] = useState<string[]>([]);
  const [previousUrl, setPreviousUrl] = useState("");
  const pokemonDetails = useGetPokemonDetails({ urls });
  const { data, error, isError, isLoading, isFetching, isSuccess, refetch } =
    useGetPokemons(url);

  useEffect(() => {
    if (isSuccess) {
      setNextUrl(data.next ?? "");
      setPreviousUrl(data.previous ?? "");
      setUrls(data.results.map((pokemon) => pokemon.url));
    }
  }, [data, isSuccess]);

  const handleClick = (data: PokemonDetailsResponse) => {
    dispatch(setPokemon(data));
    router.push("/pokemon-details");
  };

  return (
    <div className="w-2/3 m-auto">
      <h1 className="font-bold text-lg">Pokemons List</h1>
      {isLoading && "Loading..."}
      {isError && (
        <div className="text-red-500">{`Error: ${error.message}`}</div>
      )}
      {!isLoading && (
        <>
          <div className="flex justify-between">
            <Button onClick={() => setUrl(previousUrl)} disable={!previousUrl}>
              Previous
            </Button>
            <Button onClick={() => setUrl(nextUrl)} disable={!nextUrl}>
              Next
            </Button>
          </div>
          {isFetching ? "Fecthing.." : (
            <div className="flex flex-wrap gap-4 justify-around">
              {pokemonDetails?.map(({ data, isLoading }, index) => (
                <React.Fragment key={data?.name ?? index}>
                  {!isLoading && (
                    <div
                      onClick={() => handleClick(data)}
                      className="flex flex-col items-center border bg-gray-50 rounded-md p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 cursor-pointer hover:ui-border-neutral-700 hover:ui-bg-neutral-800/30"
                    >
                      <Image
                        width="100"
                        height="50"
                        src={data.sprites.front_default}
                        alt={data.name ?? "pokemon image"}
                      />
                      <h1 className="font-bold">{`${data.id}.${data.name}`}</h1>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Pokemons;
