import React, { useState, useEffect, useCallback ,useRef} from 'react';
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
      Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { BiCloudDownload, BiShare, BiUpvote, BiBulb } from 'react-icons/bi';
import Card from './ACard';
// import Button from './button';
import Form from './containers/Form';
import { useAuth } from '../context/AuthContext';
import { ethers } from 'ethers';

import DftpABI from '../ABI/Dftp.json';

export default function MyFilesCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("#E5E5E5", "gray.800");
    const toast = useToast();
    const toastID = 'toast';

    const [ isLoading, setIsLoading ] = useState()
    const [ isApproved, setIsApproved ] = useState(false)
    const [pData, setPdata] = useState([]);
    const [ isSent, setIsSent ] = useState(false);
    const addressRef = useRef();
    const checkRef = useRef();

    useEffect(() => {
      getPublic();
    }, []) ;

    

    const getPublic = async () => {
      setIsLoading(true);
    try {
      const { ethereum } = window;
      const contractAddress = "0xb20fbd2A9e9db2ce827BB3d3e02CF627d6660CB9";
      const dftpABI = DftpABI.abi;
        setIsLoading(true);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        console.log(contractAddress);
        console.log(dftpABI);
        const dFtpContract = new ethers.Contract(
          contractAddress,
          dftpABI,
          signer
        );
         console.log("yanick"); 
        const publicData = await dFtpContract.getAllMyUploadedFiles({
          gasLimit: 300000,
        });

        
        console.log(publicData);
        setPdata(publicData);
        setIsLoading(false);
    } catch (error) {
      console.log("yanick");
      console.log(error);
      console.log(error.message);
    }
    setIsLoading(false);
  };

  const removeAddress = async (_id) => {
    
    setIsLoading(true);
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      
      
      const address = addressRef.current.value;// address to be removed
      var myArray = [address];
      const id = _id;
      console.log(myArray);
      console.log(id);

      if (ethereum) {

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

        const UploadTxn = await dFtpContract.removeSharedPeers(
            id,
            myArray,

          {
            gasLimit: 3000000,
          }
        );

        console.log("Mining...", removeAddress.hash);
        setTimeout(() => {
              setIsSent(true)
          }, 1000);
          toast({
              toastID,
              title: 'Addresses has been removed from Sharing',
              description: "Please check explorer.",
              status: 'success',
              duration: 3000,
              isClosable: true,
          })
      }
      setIsLoading(false);
      //handle smartcontract here
    } catch (error) {
      setIsLoading(false);
      toast({
          toastID,
          title: 'An Error Occurred',
          description: error,
          status: 'error',
          duration: 3000,
          isClosable: true,
      })
      console.log(error);

    }
  };

  const addAddress = async (_id) => {
    
    setIsLoading(true);
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      
      
      const address = addressRef.current.value;// address to be removed
      var myArray = [address];
      const id = _id;
      console.log(myArray);
      console.log(id);

      if (ethereum) {

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

        const UploadTxn = await dFtpContract.addSharedPeers(
            id,
            myArray,

          {
            gasLimit: 3000000,
          }
        );

        console.log("Mining...", addAddress.hash);
        setTimeout(() => {
              setIsSent(true)
          }, 1000);
          toast({
              toastID,
              title: 'Addresses has been added to Sharing',
              description: "Please check explorer.",
              status: 'success',
              duration: 3000,
              isClosable: true,
          })
      }
      setIsLoading(false);
      //handle smartcontract here
    } catch (error) {
      setIsLoading(false);
      toast({
          toastID,
          title: 'An Error Occurred',
          description: error,
          status: 'error',
          duration: 3000,
          isClosable: true,
      })
      console.log(error);

    }
  };

  const changeVisibility = async (_id) => {
    
    setIsLoading(true);
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      
      
      var visible = checkRef.current.checked;// if private or public, value is true or false
      const id = _id;
      console.log(visible);
      console.log(id);

      if (ethereum) {

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

        const UploadTxn = await dFtpContract.changeVisibility(
            id,
            visible,

          {
            gasLimit: 3000000,
          }
        );

        console.log("Mining...", changeVisibility.hash);
        setTimeout(() => {
              setIsSent(true)
          }, 1000);
          toast({
              toastID,
              title: 'Visibility Status has been changed',
              description: "Please check explorer.",
              status: 'success',
              duration: 3000,
              isClosable: true,
          })
      }
      setIsLoading(false);
      //handle smartcontract here
    } catch (error) {
      setIsLoading(false);
      toast({
          toastID,
          title: 'An Error Occurred',
          description: error,
          status: 'error',
          duration: 3000,
          isClosable: true,
      })
      console.log(error);

    }
  };

  return (
    <Stack px={4} w={'full'} py={6}>
      <Box px={{ base: '4px', md: '18px'}}>
        <Button 
          bg="orange.700" color="white" 
          onClick={onOpen}
          size="md" 
          _hover={{
            bg: "orange.600"
          }}
        >
          Add New Item
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form />
          </ModalBody>
        </ModalContent>
      </Modal>
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
                        w={'full'}
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
                    </Stack>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                      justifyContent={'space-between'}
                      >
                      <Flex alignItems={'center'} direction={'row' } justifyContent={'center'} fontWeight='700'>
                        <IconButton
                            aria-label="share"
                            isRound={true}
                            _hover={{ bg: 'orange.700' }}
                            variant="ghost"
                            size="lg"
                            icon={<BiShare size="28px" />}
                          /> {item[7].length}
                      </Flex>
                      <Flex alignItems={'center'} direction={'row' } justifyContent={'center'} fontWeight='700'>
                       <IconButton
                        aria-label="download"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'orange.700' }}
                        icon={<BiBulb size="28px" />}
                      />{item[2]}
                      </Flex>


                      
                      <IconButton
                        aria-label="share"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'orange.700' }}
                        icon={<BiUpvote size="28px" />}
                      />
                    </HStack>
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