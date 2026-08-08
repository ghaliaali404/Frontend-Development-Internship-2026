export interface PokemonData {
  id: number;
  name: string;
  height: number; // in decimeters
  weight: number; // in hectograms
  sprites: {
    front_default: string;
    other?: {
      'official-artwork'?: {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}