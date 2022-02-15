import { React, useEffect, useContext, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import CardPokemon from "../../components/PokemonCard/CardPokemon";
import ChoosenCard from "../../components/ChoosenCard/ChoosenCard";
import { ListaPoke, DivPaginacao, MainDiv } from "./styled";
import GlobalStateContext from "../../contexts/GlobalContextState";
import { adicionarPokedex } from "../../services/adicionarPoke";
import { removerPokedexfromHome } from "../../services/removerPokeFromHome";
import Header from '../../components/header/Header';
import { Flex, Grid } from "@chakra-ui/react";

const HomePage = () => {

  const { pokedex, paginaPoke, setOpenRelease, openRelease, open} = useContext(GlobalStateContext);
  const [pokemons] = useRequestData(`?offset=${paginaPoke}&limit=21`);

  useEffect(() => {

  }, [pokedex]);


  const pokemonsList =
    pokedex &&
    pokemons &&
    pokemons.results.map((pokemon) => {
      let pokemonExists = pokedex.find((p) => p.name === pokemon.name);
      if (pokemonExists) {
        return (
          <ChoosenCard
            key={pokemon.name}
            name={pokemon.name}
            pokemon={pokemon}
            removerPokedexfromHome={removerPokedexfromHome}
          />
        );
      } else {
        return (
          <CardPokemon
            key={pokemon.name}
            name={pokemon.name}
            pokemon={pokemon}
            adicionarPokedex={adicionarPokedex}
          />
        );
      }
    });
    
  return (
 <div>
    <Header/>
    <Flex align={'center'} justify={'center'}>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6} align={'center'} marginTop={['13px']}>
            {pokemonsList}
        </Grid>
    </Flex>
    </div>
  );
};

export default HomePage;