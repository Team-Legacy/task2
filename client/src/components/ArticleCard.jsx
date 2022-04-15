import React, { useState, useEffect, useCallback } from 'react';
import { useColorModeValue, 
    SimpleGrid, 
    useToast, Stack, useDisclosure,
  Box,
  Button,
    Center,
    Heading,
    Text,
    HStack,
    Image,
    IconButton,
    Link,
    Flex,
} from '@chakra-ui/react';
import { BiCloudDownload, BiShare, BiUpvote, BiBulb } from 'react-icons/bi';
import Card from './ACard';
// import Button from './button';
import Form from './containers/Form';
import { ethers } from 'ethers';

import DftpABI from '.././ABI/Dftp.json';

export default function ArticleCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("#E5E5E5", "gray.800");
    const toast = useToast();
    const toastID = 'toast';

    const [ isLoading, setIsLoading ] = useState()
    const [ isApproved, setIsApproved ] = useState(false)
    const [pData, setPdata] = useState([]);

    useEffect(() => {
      getPublic();
    }, []) ;

    const getPublic = async () => {
      setIsLoading(true);
    try {
      const { ethereum } = window;
      const contractAddress = "0xb20fbd2A9e9db2ce827BB3d3e02CF627d6660CB9";
      const dftpABI = DftpABI.abi;
        //setLoading(true);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        console.log(contractAddress);
        console.log(dftpABI);
        const dFtpContract = new ethers.Contract(
          contractAddress,
          dftpABI,
          signer
        );

        const publicData = await dFtpContract.getAllPublicSharedFiles({
          gasLimit: 300000,
        });

        console.log(publicData);
        // if((publicData.length == 1 && publicData[0][0]== 0) || publicData[0][0]== 0){
        //   //console.log(publicData[0]);
        // }
        // else{
        //   setPdata(publicData);
        // }

        var data = [];
        console.log(publicData);
        for(let i=0; i<publicData.length;i++){
          if(publicData[i][0] != 0){
            data.push(publicData[i]);
          }
        }
        setPdata(data);
        
        setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  return (
    <Stack px={4} w={'full'}>
      <Box px={{ base: '4px', md: '18px'}}>
        <Button 
          bg="orange.700" color="white" 
          //onClick={onOpen}
          size="md" 
          _hover={{
            bg: "orange.600"
          }}
        >
          Public Library
        </Button>
      </Box>
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={4}>
        {pData.map((item) => { 
          
            return (
              <Center py={6} direction={{ base: 'column', md: 'row' }}>
                <Box
                  maxW={'400px'}
                  w={'100%'}
                  // bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}>
                   <Image
                        src={`https://ipfs.io/ipfs/${item[3]}`}
                        layout={'cover'}
                      />
                    
                  <Box px={6} py={4}>
                    <Stack>
                      <Link href={`https://ipfs.io/ipfs/${item[3]}`}>
                        <Heading
                          color={'orange.500'}
                          fontSize={'2xl'}
                          fontFamily={'body'}>
                          {item[1]}
                        </Heading>
                      </Link>
                      <Text color={'gray.500'}>
                        {item[2]}
                      </Text>
                      <Text color={'gray.500'}>
                      {'Created Date: '+new Date(+item[8]).toLocaleString()}
                    </Text>
                    </Stack>
                  </Box>
                </Box>
              </Center>

            );
          })}
        {/* <Card /> */}
      </SimpleGrid>
    </Stack>
  );
}