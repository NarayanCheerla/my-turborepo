import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import type { PokemonResponse } from "../types";

const QUERY_KEY_POKEMONS_LIST = "Get Pomemons List";

const getPokomons = async (url: string): Promise<PokemonResponse> => {
    const response = await axios.get(url);
    return response.data;
}
const useGetPokemons = (url:string) => {
    return useQuery({
        queryKey: [QUERY_KEY_POKEMONS_LIST, url],
        queryFn: () => getPokomons(url),
        staleTime: Infinity
    })
};

export default useGetPokemons;