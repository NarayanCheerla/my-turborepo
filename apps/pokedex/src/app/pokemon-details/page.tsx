"use client";
import Image from "next/image";
import { useAppSelector } from "../features/pokemon/hooks";
import { ConvertAsHeading } from "@repo/utils";
import { Card } from "@repo/ui/card";

const PokemonDetails = () => {
  const pokemonDetails = useAppSelector((state) => state.pokemon.pokemon);
  return (
    <div className="w-2/3 m-auto">
      <h1 className="text-6xl">{`${pokemonDetails.id}.${pokemonDetails.name}`}</h1>
      <Image
        width="200"
        height="180"
        src={pokemonDetails.sprites.other.dream_world.front_default}
        alt={pokemonDetails.name}
      />

      <div className="flex flex-col">
        {pokemonDetails.stats.map((stat) => (
          <Card key={`${stat.stat.name}-${stat.base_stat}`}>
            <h1 className="text-2xl">{`${ConvertAsHeading(stat.stat.name)} - ${stat.base_stat}`}</h1>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetails;
