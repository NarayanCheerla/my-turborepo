import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { PokemonDetailsResponse as PokemonType } from "../../../types";

interface PokemonState {
   pokemon: PokemonType
}

const initialState: PokemonState = {
    pokemon: {
        id: 0,
        name: "",
        sprites: {
            front_default: "",
            other: {
                dream_world: {
                  front_default: ""
                }
              }
          },
          stats: [{
            base_stat: 0,
            stat: {
              name: ""
            }
          }]
          
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