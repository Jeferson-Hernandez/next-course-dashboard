import { Metadata } from "next";
import { PokemonGrid } from "@/pokemons";

export const metadata: Metadata = {
  title: 'Favoritos',
  description:  'Listado de los pokemons favoritos'
};

export default async function FavoritesPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokémons Favoritos <small className="text-blue-500">Global State</small></span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}