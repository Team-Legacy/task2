
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

const APP_ID = "Q5w4ViN0PE1P7JvLi3Lr1eJ2q7nJQ9Gzj8gh5xM0";
const SERVER_URL = "https://9twp7uqapae7.usemoralis.com:2053/server";

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