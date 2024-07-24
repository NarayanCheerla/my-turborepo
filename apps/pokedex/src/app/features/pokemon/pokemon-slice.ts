import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { PokemonDetailsResponse as PokemonType } from "../../../types";

interface PokemonState {
   pokemon: PokemonType
}

const initialState: PokemonState = {
    pokemon: {
        name: "",
        sprites: {
            front_default: "",
            other: {
                dream_world: {
                  front_default: ""
                }
              }
          },
          
    }
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setPokemon(state, action: PayloadAction<PokemonType>){
            state.pokemon = action.payload;
        },
    }
});

export const {setPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;