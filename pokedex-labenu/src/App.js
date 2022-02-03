import { React } from 'react'
import Router from './routes/Router';
import GlobalStyle from './constants/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalState from './contexts/GlobalState';


function App() {

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
       const pokemon = pokemon

  return (
    <ChakraProvider>

      <GlobalState.Provider value={pokemon}>
        <GlobalStyle />
        <Router />
      </GlobalState.Provider>

    </ChakraProvider>
  );
})

export default App;