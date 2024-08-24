'use client';

import { useAppSelector } from "@/store";
import { PokemonCard } from "./PokemonCard";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { PokemonGrid } from "./PokemonGrid";

export const PokemonFavoriteGrid = () => {
  const pokemonsFavorite = useAppSelector(state => Object.values(state.pokemons.favorites));

  return (
    <>
      {
        pokemonsFavorite.length
          ? <PokemonGrid pokemons={pokemonsFavorite}/>
          : <NoFavorites/>
      }
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span>No hay favoritos</span>
    </div>
  );
};