import * as React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BASE_URL from '../../constants/baseURL';
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
  Icon
} from '@chakra-ui/react';
import { 
AddIcon,
SearchIcon
} from '@chakra-ui/icons'
import {
  FaFireAlt
} from 'react-icons/fa'
import {
  GiHighGrass
} from 'react-icons/gi'
import {
  IoIosWater
} from 'react-icons/io'
import {
  FcFlashOn
} from 'react-icons/fc'
import {
  BsInfoCircle
} from 'react-icons/bs'
import GlobalState from '../../contexts/GlobalState';

export default function CardPokemon() {
    const [pokemonList, setPokemonList] = React.useState([])
    const navigate = useNavigate()
    
    const getPokemonList = () => {
      axios.get(`${BASE_URL}?limit=26&offset=0/`)
      .then((res) => {
          setPokemonList(res.data.results)
          // console.log(res.data.results)
      })
      .catch((err) => {
          console.log(err)
      })
    }
  
    React.useEffect(() =>{
      getPokemonList()
    }, [])


    let number = 0

    const pokeNumber = () => {
      while (number <= 26) {
        console.log(number)
        number ++;

        return number
      }
    }
  
   const renderedPokemonList = pokemonList.map((pokemon)=>{

    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber()}.png`}  
            w={'200px'}
            maxW={'200px'}                                                                                        
            alt={pokemon.name} />                                                                               
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                ícone do elemento ex:<Icon as={FaFireAlt} color='red.500' w={'20px'} h={'20px'}/> // <Icon as={GiHighGrass} color='green.400' w={'20px'} h={'20px'}/> // <Icon as={IoIosWater} color='blue.400' w={'20px'} h={'20px'}/> // <Icon as={FcFlashOn} w={'20px'} h={'20px'}/> &bull; número (ou nº da evolução tipo 1/3, sei lá)
              </Box>
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
            <ButtonGroup size='sm' isAttached variant='outline' marginRight={'5px'}>
              <Button mr='-px'>Adicionar à Pokedex</Button>
              <IconButton aria-label='Add to pokedex' icon={<AddIcon />} />
            </ButtonGroup>
            <ButtonGroup size='sm' isAttached variant='outline'>
              <Button  onClick={() => goToDetalhes(navigate, pokemon.name)} mr='-px'>Detalhes</Button>
              <IconButton  onClick={() => goToDetalhes(navigate)} aria-label='Details' icon={<BsInfoCircle/>} />
            </ButtonGroup>
          </Box>
        </Box>
    )
  })

  return (
    <Flex align={'center'} justify={'center'}>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6} align={'center'} marginTop={['13px']}>
        {renderedPokemonList}
      </Grid>
    </Flex>
  );
}