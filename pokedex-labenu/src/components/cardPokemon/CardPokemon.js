import * as React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import BASE_URL from '../../constants/baseURL';
import { 
  Box,
  Image,
  ButtonGroup,
  IconButton,
  Button,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { 
AddIcon,
SearchIcon
} from '@chakra-ui/icons'



export default function CardPokemon() {
    const [pokemonList, setPokemonList] = React.useState([])
    const getPokemonList = () => {
      axios.get(`${BASE_URL}?limit=20&offset=0/`)
      .then((res) => {
          setPokemonList(res.data.results)
          console.log(res.data.results)
      })
      .catch((err) => {
          console.log(err)
      })
    }
  
    React.useEffect(() =>{
      getPokemonList()
    }, [])
  
   const renderedPokemonList = pokemonList.map((pokemon)=>{
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image src={'https://www.lance.com.br/files/article_main/uploads/2019/05/03/5ccc50ca0b8e5.jpeg'} alt={'Yago Pikachu'} />
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
                ícone do tipo &bull; número (ou nº da evolução tipo 1/3, sei lá)
              </Box>
            </Box>

            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {pokemon.name}
            </Box>
            <ButtonGroup size='sm' isAttached variant='outline'>
              <IconButton aria-label='Add to pokedex' icon={<AddIcon />} />
              <Button mr='-px'>Adicionar à Pokedex</Button>
            </ButtonGroup>
            <ButtonGroup size='sm' isAttached variant='outline'>
              <Button mr='-px'>Detalhes</Button>
              <IconButton aria-label='Details' icon={<SearchIcon/>} />
            </ButtonGroup>
          </Box>
        </Box>


      // <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      //   <Image src={'https://www.lance.com.br/files/article_main/uploads/2019/05/03/5ccc50ca0b8e5.jpeg'} alt={'Yago Pikachu'} /> 
      //   <Box p='6'>
      //     <Box display='flex' alignItems='baseline'>
      //       <Box
      //         color='gray.500'
      //         fontWeight='semibold'
      //         letterSpacing='wide'
      //         fontSize='xs'
      //         textTransform='uppercase'
      //         ml='2'
      //       >
      //         ícone do tipo &bull; número (ou nº da evolução tipo 1/3, sei lá)
      //       </Box> 
      //     </Box>
      //     <Box
      //       mt='1'
      //       fontWeight='semibold'
      //       as='h4'
      //       lineHeight='tight'
      //       isTruncated
      //     >
      //       {pokemon.name}
      //     </Box>        
      //     <ButtonGroup size='sm' isAttached variant='outline'>
      //       <IconButton aria-label='Add to pokedex' icon={<AddIcon />} />
      //       <Button mr='-px'>Adicionar à Pokedex</Button>
      //     </ButtonGroup>
      //     <ButtonGroup size='sm' isAttached variant='outline'>
      //       <Button mr='-px'>Detalhes</Button>
      //       <IconButton aria-label='Details' icon={<SearchIcon/>} />
      //     </ButtonGroup>
      //   </Box>
      // </Box>
    )
  })

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {renderedPokemonList}
    </Grid>
  );
}