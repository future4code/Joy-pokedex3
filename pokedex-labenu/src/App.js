import * as React from 'react';
import Router from './routes/Router';
import GlobalStyle from './constants/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalState from './contexts/GlobalState';
import axios from 'axios';
import BASE_URL from './constants/baseURL';

function App() {

return (
  <ChakraProvider>
    {/* <GlobalState.Provider> */}
      <GlobalStyle />
      <Router />
    {/* </GlobalState.Provider> */}
  </ChakraProvider>
)
}

export default App