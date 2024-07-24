export interface PokemonResponse  {
  count: number;
  next: string;
  previous: string | null;
  results: [
    {
      name: string;
      url: string;
    },
  ];
};

export interface PokemonDetailsInputType  {
  urls: string[];
};

export interface PokemonDetailsResponse  {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
};
