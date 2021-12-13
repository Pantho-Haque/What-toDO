import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Routers from './Routers';
import "./App.css";

function App() {
  return (
      <ChakraProvider theme={theme}>
        <Routers />
      </ChakraProvider>
  );
}

export default App;
