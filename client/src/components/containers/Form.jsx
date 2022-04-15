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
//   import { useAuth } from '../../context/AuthContext';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';

  export default function Form() {
      const { Moralis } = useMoralis();
      const contractProcessor = useWeb3ExecuteFunction();

     // upload an image
    // const uploadImage = async () => {
    //     // Save file input to IPFS
    //     const data = fileInput.files[0];
    //     const file = new Moralis.File(data.name, data);
    //     await file.saveIPFS();
    //     console.log(file.ipfs(), file.hash());
    //     return file.ipfs();
    //   };

    //   upload metadata object
    //   const uploadMetadata = async (imageUrl) => {
    //     const name = document.getElementById("metadataName").value;
    //     const description = document.getElementById(
    //       "metadataDescription"
    //     ).value;
    //     const metadata = {
    //       name: name,
    //       description: description,
    //       image: imageUrl,
    //     };
    //     const file = new Moralis.File("file.json", {
    //       base64: btoa(JSON.stringify(metadata))});
    //     await file.saveIPFS();
    //     console.log(file.ipfs());
    //   };

      // write function to submit file
    //   const uploadFile = async () => {
    //     const image = await uploadImage();
    //     await uploadMetadata(image);
    //   };

    //  const getImg = async () =>{
    //       const query = new Moralis.Query('Applications')
    //        query.equalTo('name', 'Satoshi')
    //        query.find().then(function ([application]) {
    //        const ipfs = application.get('resume').ipfs()
    //        const hash = application.get('resume').hash()
    //        console.log('IPFS url', ipfs)
    //        console.log('IPFS hash', hash)
    //     })
    //  }

  
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
                            <FormLabel>Article URL</FormLabel>

                            <InputGroup>
                                <Input type="url" name="url" placeholder="Your URL" />
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Insert Image</FormLabel>
                            <InputGroup>
                                <Input type="file" border={'none'} name="file" />
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
                        Upload
                        </Button>
                    </VStack>
                </Box>
            </Stack>
        </VStack>
    );
  }