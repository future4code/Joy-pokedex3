import { React } from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from "../../hooks/useRequestData";
import Header from '../../components/header/Header'
import {
    CardPokemon,
    TypeButton,
    StatsArea,
    StatsItem,
    DivMaior
  } from "./styled";
import { 
  Box,
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
            {/* <IconButton icon={<MdCatchingPokemon/>} size='sm'/> */}
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
            <CardPokemon 
              type={pokeType}
            >
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
              </CardPokemon>
              <Grid
                  rows={[3]}
                  columns={[1, 2, 2]}
                  justifyContent={'center'}
                  gap={15}
                  flexWrap={'wrap'}
                >
                  <GridItem 
                    rowSpan={[1]} 
                    colSpan={[2]} 
                    marginBottom={'20px'}
                  >
                    <Heading 
                      as='h1' 
                      size='2xl' 
                      alignSelf={'center'} 
                      textAlign={'center'} 
                      textTransform={'capitalize'}
                      marginTop={'15px'}>
                      {pokemon.name}
                    </Heading>
                  </GridItem>
                  <GridItem 
                    rowSpan={[1]} 
                    colSpan={[1]} 
                    w={['95vw', '250px', '250px']}
                  >
                    <Box
                      p={5}
                      shadow='md'
                      borderWidth='1px'
                      flex='1'
                      borderRadius='md'
                      gap={2}
                      marginLeft={['5vw', 0, 0]}
                    >
                      {pokemon.types.length > 1 ? 
                        <Heading 
                          as='h2' 
                          size='xl' 
                          alignSelf={'center'} 
                          textAlign={'center'} 
                          marginBottom={'6px'}
                        >
                          Types
                        </Heading> : 
                        <Heading 
                          as='h2' 
                          size='xl' 
                          alignSelf={'center'} 
                          textAlign={'center'} 
                          marginBottom={'5px'}
                        >
                          Type
                        </Heading>}
                      <Box 
                        align={'center'}
                      >{pokemonTypes}</Box>
                    </Box>
                  </GridItem>
                  <GridItem 
                    rowSpan={[2, 3, 3]} 
                    colSpan={[2, 1, 1]}
                    w={['95vw', '560px', '560px']}
                  >
                    <Box
                      p={5}
                      shadow='md'
                      borderWidth='1px'
                      flex='1'
                      borderRadius='md'
                      marginLeft={['5vw', 0, 0]}
                    >
                      <Heading 
                        as='h2' 
                        size='xl' 
                        alignSelf={'center'} 
                        textAlign={'center'}
                      >
                        Stats
                      </Heading>
                      <Box 
                        align={'left'}
                        textTransform={'capitalize'}
                      >{pokemonStats}
                      </Box>
                    </Box>
                  </GridItem>
                  <GridItem  
                    rowSpan={[1, 1, 3]} 
                    colSpan={[1, 1, 1]}
                    w={['95vw', '250px', '250px']}
                  >
                    <Box
                      p={5}
                      shadow='md'
                      borderWidth='1px'
                      flex='1'
                      borderRadius='md'
                      marginLeft={['5vw', 0, 0]}
                      marginBottom={['20px']}
                      >
                      <Heading 
                        as='h2' 
                        size='xl' 
                        alignSelf={'center'} 
                        textAlign={'center'}
                      >Moves</Heading>
                      <Box 
                        textTransform={'capitalize'}
                      >{pokemonMoves}
                      </Box>
                    </Box>
                  </GridItem>
              </Grid>
          </DivMaior>
        )}
      </div>
    );
  };
  
  export default DetalhesPage;
  