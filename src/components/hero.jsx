import React from 'react'
import { Box, Text,Image,Flex,Stack,Button } from "@chakra-ui/react"
import images from "../../src/assets/city-g5543ba277_1920.jpg"
import image_1 from "../../src/assets/eiffel-tower-g63e6beb8f_1920.jpg"
import image_2 from "../../src/assets/japan-g17df8d80d_1920.jpg"
import image_3 from "../../src/assets/lake-gd395dd1bd_1280.jpg"
import image_4 from "../../src/assets/vehicles-g5e57e476e_1920.jpg"






const hero = () => {
  return (
    <>
    <Box>
    <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
       

                
        >
        The Best Books
      </Text>
     
      <Text color="black"fontSize="30px" fontWeight="md" pl="50px">
        upload your files
      </Text>
      <Flex justifyContent="space-between" alignItems="center" pt="90px" flexWrap="wrap">
        <Box boxSize='sm' >
          <Image src={images} alt='Dan Abramov' pl="10px" />
          <Text textAlign="center" pt="40px">Witches of the Wood</Text>
          <Stack spacing={4} direction='row' align='center' justify="center">
              <Button colorScheme='teal' size='lg' mt="40px">
                Read Through 
              </Button>

            </Stack>          
        </Box>
        <Box boxSize='sm'>
          <Image src={image_1} alt='Dan Abramov' />
          <Text textAlign="center" pt="40px">Witches of the Wood</Text>
          <Stack spacing={4} direction='row' align='center' justify="center">
              <Button colorScheme='teal' size='lg' mt="40px">
                Read Through 
              </Button>

            </Stack>    
        </Box>
        <Box boxSize='sm'>
          <Image src={image_2} alt='Dan Abramov' />
          <Text textAlign="center" pt="40px">Witches of the Wood</Text>
          <Stack spacing={4} direction='row' align='center' justify="center">
              <Button colorScheme='teal' size='lg' mt="40px">
                Read Through 
              </Button>

            </Stack>    
        </Box>
        <Box boxSize='sm'>
          <Image src={image_3} alt='Dan Abramov' />
          <Text textAlign="center" pt="40px">Witches of the Wood</Text>
          <Stack spacing={4} direction='row' align='center' justify="center">
              <Button colorScheme='teal' size='lg' mt="40px">
                Read Through 
              </Button>

            </Stack>    
        </Box>
        <Box boxSize='sm'>
        <Image src={image_4} alt='Dan Abramov' />
          <Text textAlign="center" pt="40px">Witches of the Wood</Text>
          <Stack spacing={4} direction='row' align='center' justify="center">
              <Button colorScheme='teal' size='lg' mt="40px">
                Read Through 
              </Button>

            </Stack>    
        </Box>

      </Flex>


    </Box>


    
    

    


  

   
      
     
    </>
    
  )
}

export default hero


