import React from 'react'
import '@fontsource/raleway/700.css'
import '@fontsource/open-sans/700.css'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Button from './LoginButton';

const Links = [
  {a: '/', text: 'Home'},
  {a: '/article', text: 'Articles'}, 
  {a: '/book', text: 'Books'}, 
];


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <HStack spacing={8} alignItems={'center'}>
            
          </HStack> */}
          <Link href='/' fontSize={'3xl'} _hover={{
							textDecoration: "none",
							color: "gray.500",
						}}>
            <Heading>Navo</Heading>
          </Link>
            <HStack
              fontSize={'xl'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.700',
                  }}
                  key={link.text}
                  href={link.a}>
                  <Text>{link.text}</Text>
                </Link>
              ))}
            </HStack>
          <Flex alignItems={'center'}>
            <Button name="Connect wallet" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, i) => (
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: 'gray.700',
                  }}
                  href={link.a}>
                  <Text>{link.text}</Text>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>

  )
}

export default Navbar
