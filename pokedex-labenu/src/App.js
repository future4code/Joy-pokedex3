import {React} from 'react'
import Router from './routes/Router';
import GlobalStyle from './constants/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <GlobalStyle/>
      <Router/>
    </ChakraProvider>
  );
}

export default App;