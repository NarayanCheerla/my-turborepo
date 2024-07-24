"use client";

import { useAppSelector } from "../features/pokemon/hooks";

const PokemonDetails = () => {
    const pokemonDetails = useAppSelector(state => state.pokemon.pokemon);
    return (
        <div>
            Pokemon Details...{pokemonDetails.name}
        </div>
    )
}

export default PokemonDetails;