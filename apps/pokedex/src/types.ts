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
  id: number;
  name: string;
  width:number;
  height:number;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      }
    }
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    }
  }[]
};
