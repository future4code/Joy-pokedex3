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
  GridItem,
  Flex
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
            <ButtonGroup size='sm' isAttached variant='outline' marginRight={'5px'}>
              <Button mr='-px'>Adicionar à Pokedex</Button>
              <IconButton aria-label='Add to pokedex' icon={<AddIcon />} />
            </ButtonGroup>
            <ButtonGroup size='sm' isAttached variant='outline'>
              <Button mr='-px'>Detalhes</Button>
              <IconButton aria-label='Details' icon={<SearchIcon/>} />
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