"use client";
import Image from "next/image";
import { useAppSelector } from "../features/pokemon/hooks";

const PokemonDetails = () => {
    const pokemonDetails = useAppSelector(state => state.pokemon.pokemon);
    return (
        <div>
            Pokemon Details...{pokemonDetails.name}
            
            <Image
              width="300"
              height="300"
              src={pokemonDetails.sprites.other.dream_world.front_default}
              alt={pokemonDetails.name}
            />
        </div>
    )
}

export default PokemonDetails;