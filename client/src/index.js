
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AuthProvider } from './context/AuthContext';
import { MoralisProvider } from 'react-moralis';


const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
    fonts: {
      heading: 'Open Sans, sans-serif',
      body: 'Raleway, sans-serif',
    },
  },
  config: {
    initialColorMode: 'dark',
  }
})

const APP_ID = process.envREACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

ReactDOM.render(
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
          <App />
        </MoralisProvider>
      </AuthProvider>
    </ChakraProvider>,
  document.getElementById('root')
);