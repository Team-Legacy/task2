import React from 'react'
import { Button } from '@chakra-ui/react';

const button = ({children}) => {
  return (
    <div>
        <Button 
              bg="brand.700" color="white" 
              size="md" 
            //   onClick={handleLogin}
              _hover={{
                backgroundColor: "brand.600"
              }}
            >
              {children}
            </Button>
    </div>
  )
}

export default button