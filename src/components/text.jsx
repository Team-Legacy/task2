import React from "react"
import { Box, Text,Image,Flex,Stack,Button } from "@chakra-ui/react"


const text=()=>{
    return(
        <div>
            <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
                mt="120px"
                textAlign="center"
                >
                Read Books for a Better Future
            </Text>


            <Box display="flex" justifyContent="center"alignItems="center">
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                
                />

            </Box>

            <Flex justifyContent="center" alignItems="center" pt="50px">
                <Box boxSize='sm'>
                    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                </Box>

                <Box>
                    <Flex direction="column">
                        <Text fontSize="40px" bgGradient='linear(to-l, #7928CA, #FF0080)'>Complete Holiday Guide</Text>
                        <Button colorScheme='teal' size='lg' mt="40px">
                            Read Through 
                        </Button>
                    </Flex>

                </Box>

            </Flex>

           
               
        </div>
    )

}


export default text