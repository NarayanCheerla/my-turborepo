import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const QUERY_KEY_POKEMONS_LIST = "Get Pomemons List";

 type PokemonResponse = {
    count: number;
    next: string;
    previous: string | null;
    results: [
    {
        name: string;
        url: string;
    }
 ]
}


const getPokomons = async (): Promise<PokemonResponse> => {
    const response = await axios.get(API_URL);
    return response.data;
}
const useGetPokemons = () => {
    return useQuery({
        queryKey: [QUERY_KEY_POKEMONS_LIST],
        queryFn: () => getPokomons(),
    })
};

export default useGetPokemons;