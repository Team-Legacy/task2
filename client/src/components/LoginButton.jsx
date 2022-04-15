import React from 'react'
import { Button, useColorModeValue } from '@chakra-ui/react';
import { useMoralis } from "react-moralis";

const LoginButton = ({name}) => {
  const bg = useColorModeValue("#E5E5E5", "orange.800");
  const { authenticate, isAuthenticated, user } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  
  return (
    <>
    { isAuthenticated ? 
        <Button bg={bg} size="lg">
          {user.get("ethAddress").substring(0, 5)+"...."+user.get("ethAddress").substring(user.get("ethAddress").length-6)}
        </Button>
          :
        <Button 
          bg="orange.700" color="white" 
          size="md" 
          onClick={login}
          _hover={{
            bg: "orange.600"
          }}
        >
          {name}
        </Button>
      }
    </>
  )
}

export default LoginButton