import {
    Box,
    Button,
    FormControl,
    FormLabel,

    Input,
    InputGroup,
    Stack,
    Textarea,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';


  export default function Form() {
  
    return (
        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}>
                <Box
                    bg={useColorModeValue('white', 'gray.700')}
                    borderRadius="lg"
                    p={8}
                    color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                    shadow="base">
                    <VStack spacing={5}>
                        <FormControl isRequired>
                            <FormLabel>Title</FormLabel>

                            <InputGroup>
                                <Input type="text" name="name" placeholder="Your Title" />
                            </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Description</FormLabel>

                            <Textarea
                                name="message"
                                placeholder="A Short Description"
                                rows={4}
                                resize="none"
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Insert Image</FormLabel>
                            <InputGroup>
                                <Input type="file" border={'none'} />
                            </InputGroup>
                        </FormControl>

                        <Button
                        colorScheme="orange"
                        bg="orange.400"
                        color="white"
                        _hover={{
                            bg: 'orange.500',
                        }}
                        isFullWidth>
                        Send Message
                        </Button>
                    </VStack>
                </Box>
            </Stack>
        </VStack>
    );
  }