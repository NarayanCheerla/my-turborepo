import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY_POKEMON_DETAILS = "Get Pomemon Details";

type PokemonDetailsResponse = {
  sprites: {
    front_default: string;
  };
};

type PokemonDetailsInputType = {
  url: string;
};

const getPokomonDetails = async ({
  url,
}: PokemonDetailsInputType): Promise<PokemonDetailsResponse> => {
  const response = await axios.get(url);
  return response.data;
};
const useGetPokemonDetails = ({ url }: PokemonDetailsInputType) => {
  return useQuery({
    queryKey: [QUERY_KEY_POKEMON_DETAILS],
    queryFn: () => getPokomonDetails({ url }),
  });
};

export default useGetPokemonDetails;
