import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from "../../hooks/useRequestData";
import Header from '../../components/header/Header'
import BASE_URL from '../../constants/baseURL'
import {
    CardPokemon,
    TypeButton,
    StatsArea,
    StatsItem,
    TypesContainer,
    MovesContainer,
    StatsContainer,
    DescriptionContainer,
    DivMaior,
    DivMoves
  } from "./styled";
import { 
  Box,
  Flex,
  Grid,
  GridItem,
  Heading
} from '@chakra-ui/react'

  const DetalhesPage = () => {
    const params = useParams();
    const [pokemon] = useRequestData(`${params.name}`);
    const pokeType = pokemon && pokemon?.types[0]?.type?.name;
  
    const pokemonTypes =
      pokemon &&
      pokemon.types.map((pokemon) => {
        return (
          <TypeButton key={pokemon.id} type={pokemon.type.name}>
            <img src={`/icons/${pokemon.type.name}.svg`} alt="imagem"/>
            <p>{pokemon.type.name}</p>
          </TypeButton>
        );
      });
  
    const pokemonMoves =
      pokemon &&
      pokemon.moves.slice(0, 5).map((pokemon) => {
        return <p key={pokemon.id}>- {pokemon.move.name}</p>;
      });
  
    const pokemonStats =
      pokemon &&
      pokemon.stats.map((pokemon) => {
        return (
          <StatsArea key={pokemon.id}>
            <p>{pokemon.stat.name}</p>
            <p>{pokemon.base_stat}</p>
            <StatsItem
              baseStat={pokemon.base_stat > 100 ? 100 : pokemon.base_stat}
              type={pokeType}
            />
          </StatsArea>
        );
      });
  
    return (
      <div>
        <Header/>
        {pokemon && (
          <DivMaior>
            <CardPokemon type={pokeType}>
           {/* //   <h4>Voltar</h4> */}
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
              </CardPokemon>
              <Grid
                  // h='200px'
                  rows='repeat(3, 1fr)'
                  columns='repeat(2, 1fr)'
                  // gap={4}
                  justifyContent={'center'}
                  gap={15}
                >
                  <GridItem rowSpan={1} colSpan={2} marginBottom={'20px'}>
                    <Heading as='h1' size='2xl' alignSelf={'center'} textAlign={'center'} textTransform={'capitalize'}>
                      {pokemon.name}
                    </Heading>
                  </GridItem>
                  {/* <DivMoves> */}
                  <GridItem rowSpan={1} colSpan={1} w={['250px']}>
                    <Box
                      p={5}
                      shadow='md'
                      borderWidth='1px'
                      flex='1'
                      borderRadius='md'
                      gap={2}
                      // marginBottom={'15px'}
                    >
                      {pokemon.types.length > 1 ? <Heading as='h2' size='xl' alignSelf={'center'} textAlign={'center'} marginBottom={'6px'}>Types</Heading> : <Heading as='h2' size='xl' alignSelf={'center'} textAlign={'center'} marginBottom={'5px'}>Type</Heading>}
                      <Box align={'center'}>{pokemonTypes}</Box>
                    </Box>
                  </GridItem>
                  <GridItem rowSpan={3} colSpan={1} w={'560px'}>
                    <Box
                      p={5}
                      shadow='md'
                      borderWidth='1px'
                      flex='1'
                      borderRadius='md'
                    >
                      <Heading as='h2' size='xl' alignSelf={'center'} textAlign={'center'}>
                        Stats
                      </Heading>
                      <div>{pokemonStats}</div>
                    </Box>
                  </GridItem>
                  <GridItem  rowSpan={3} colSpan={1} w={'250px'}>
                    <Box
                      p={5}
                      shadow='md'
                      borderWidth='1px'
                      flex='1'
                      borderRadius='md'>
                      <Heading as='h2' size='xl' alignSelf={'center'} textAlign={'center'}>Moves</Heading>
                      <div>{pokemonMoves}</div>
                    </Box>
                  </GridItem>
                  {/* </DivMoves> */}
                  {/* <StatsContainer> */}

                  {/* </StatsContainer> */}
              </Grid>
          </DivMaior>
        )}
      </div>
    );
  };
  
  export default DetalhesPage;
  