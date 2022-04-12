import React from 'react'
import { Box, Text,Image,Flex,Stack,Button } from "@chakra-ui/react"



const hero = () => {
  return (
    <>
    <Text color="blue"fontSize="60px" fontWeight="md" pl="50px">
      The Best Books
    </Text>
    <Text color="black"fontSize="30px" fontWeight="md" pl="50px">
      upload your files
    </Text>
    <Flex justifyContent="center" alignItems="center" pt="90px" flexWrap="wrap">
      <Box boxSize='sm' >
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        <Text textAlign="center" pt="40px">Witches of the Wood</Text>
        <Stack spacing={4} direction='row' align='center' justify="center">
            <Button colorScheme='teal' size='lg' mt="40px">
              Read Through 
            </Button>

          </Stack>          
      </Box>
      <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        <Text textAlign="center" pt="40px">Witches of the Wood</Text>
        <Stack spacing={4} direction='row' align='center' justify="center">
            <Button colorScheme='teal' size='lg' mt="40px">
              Read Through 
            </Button>

          </Stack>    
      </Box>
      <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        <Text textAlign="center" pt="40px">Witches of the Wood</Text>
        <Stack spacing={4} direction='row' align='center' justify="center">
            <Button colorScheme='teal' size='lg' mt="40px">
              Read Through 
            </Button>

          </Stack>    
      </Box>
      <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        <Text textAlign="center" pt="40px">Witches of the Wood</Text>
        <Stack spacing={4} direction='row' align='center' justify="center">
            <Button colorScheme='teal' size='lg' mt="40px">
              Read Through 
            </Button>

          </Stack>    
      </Box>
      <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        <Text textAlign="center" pt="40px">Witches of the Wood</Text>
        <Stack spacing={4} direction='row' align='center' justify="center">
            <Button colorScheme='teal' size='lg' mt="40px">
              Read Through 
            </Button>

          </Stack>    
      </Box>

    </Flex>

    


  

   
      
     
    </>
    
  )
}

export default hero


