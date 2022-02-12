import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GlobalStateContext from "../../contexts/GlobalContextState";
import { goToDetalhes } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { 
  Box,
  Image,
  ButtonGroup,
  IconButton,
  Button,
  Grid,
  GridItem,
  Flex,
  Icon,
  Tooltip
} from '@chakra-ui/react';
import { 
AddIcon
} from '@chakra-ui/icons'
import {
  BsInfoCircle
} from 'react-icons/bs'


export default function CardPokemon({ name, pokemon, adicionarPokedex}) {
  const navigate = useNavigate();
  const [fotoPokemon, setFotoPokemon] = useState();
  const [id, setId] = useState(0);
  const [types, setTypes] = useState([])
  const { setPokedex, setOpen, setPokeSnack, setOpenRelease} = useContext(GlobalStateContext);
  

  const pegarInformacoesPokemon = async () => {
    try {
      const res = await axios.get(pokemon.url);
      setFotoPokemon(res.data.sprites.other["official-artwork"].front_default);
      setId(res.data.id)
      setTypes(res.data.types)
    } catch (err) {
      console.log(err);
    }
  };

  const pokemonTypes =
    pokemon &&
    types.map((types) => {
      return (
        <Flex 
          key={types.type.name} 
          type={types.type.name}
          >
          <Tooltip label={types.type.name} textTransform={'capitalize'}>
            <Image src={`/icons/${types.type.name}.svg`} alt={types.type.name}/>
          </Tooltip>
        </Flex>
      );
    });

  useEffect(() => {
    pegarInformacoesPokemon();
  }, []);

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image 
            src={fotoPokemon}  
            w={'200px'}
            maxW={'200px'}                                                                                        
            alt={pokemon.name} />                                                                               
          <Box p='6'>
              <Box
                display='flex'
                justifyContent={'center'}
              >
                {pokemonTypes}
              </Box>

            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              textTransform={'capitalize'}
              marginBottom={'5px'}
              isTruncated
            >
              {pokemon.name} 
            </Box>
            <Tooltip
              label={'Adicionar à Pokedex'}>
              <ButtonGroup size='sm' isAttached variant='outline' marginRight={[null, null, '5px']} marginBottom={['7px', null, null]}>
                <Button mr='-px' onClick={() => adicionarPokedex(pokemon, setPokedex, setOpen, setPokeSnack, setOpenRelease)}>Adicionar à Pokedex</Button>
                <IconButton aria-label='Add to pokedex' icon={<AddIcon />} onClick={() => adicionarPokedex(pokemon, setPokedex, setOpen, setPokeSnack, setOpenRelease)}/>
              </ButtonGroup>
            </Tooltip>

            <Tooltip
              label={'Detalhes'}>
              <ButtonGroup size='sm' isAttached variant='outline'>
                <Button  onClick={() => goToDetalhes(navigate, pokemon.name)} mr='-px'>Detalhes</Button>
                <IconButton  onClick={() => goToDetalhes(navigate, pokemon.name)} aria-label='Details' icon={<BsInfoCircle/>} />
              </ButtonGroup>
            </Tooltip>
          </Box>
        </Box>
  );
}
