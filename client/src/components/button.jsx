import React from 'react'
import { Button } from '@chakra-ui/react';

const button = ({name}) => {
  return (
    <div>
        <Button 
              bg="orange.700" color="white" 
              size="md" 
            //   onClick={handleLogin}
              _hover={{
                bg: "orange.600"
              }}
            >
              {name}
            </Button>
    </div>
  )
}

export default button