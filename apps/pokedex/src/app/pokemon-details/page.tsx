"use client";
import Image from "next/image";
import { useAppSelector } from "../features/pokemon/hooks";

const PokemonDetails = () => {
    const pokemonDetails = useAppSelector(state => state.pokemon.pokemon);
    return (
        <div>
            <h1 className="text-6xl">{`${pokemonDetails.id}.${pokemonDetails.name}`}</h1>
            <Image
              width="200"
              height="180"
              src={pokemonDetails.sprites.other.dream_world.front_default}
              alt={pokemonDetails.name}
            />
            <div className="flex flex-col">
                {
                    pokemonDetails.stats.map(stat => (
                        <h1 key={`${stat.stat.name}-${stat.base_stat}`} className="text-2xl">{`${stat.stat.name} - ${stat.base_stat}`}</h1>
                    ))
                }
            </div>
        </div>
    )
}

export default PokemonDetails;