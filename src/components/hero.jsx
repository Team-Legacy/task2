import React from 'react'
import { Box, Text } from "@chakra-ui/react"
import { Image,Flex } from '@chakra-ui/react'

const hero = () => {
  return (
    <>
    <Text color="blue"fontSize="60px" fontWeight="md" pl="50px">
      The Best Books
    </Text>
    <Text color="black"fontSize="30px" fontWeight="md" pl="50px">
      upload your files
    </Text>
    <Flex justifyContent="center" alignItems="center" pt="90px">
      <Box boxSize='sm' >
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />          
      </Box>
      <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      </Box>
      <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      </Box>
      <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      </Box>
      <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      </Box>

    </Flex>
      
     
    </>
  )
}

export default hero


