import * as React from 'react';
import Router from './routes/Router';
import GlobalStyle from './constants/GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalState from './contexts/GlobalState';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalState>
        <ChakraProvider>
            <GlobalStyle />
              <BrowserRouter>
                <Router />
              </BrowserRouter>
        </ChakraProvider>
      </GlobalState>
    </>
  )};

export default App