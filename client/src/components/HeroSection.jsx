//jshint esversion:8
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Hero from '../assets/undraw_online_organizer_re_156n.svg'
import Upload from '../assets/undraw_upload_re_pasx.svg';
import Share from '../assets/undraw_share_re_9kfx.svg';
import Button from './button'
import { useEffect, useRef, useState,useCallback } from 'react';
import ArticleCard from './ArticleCard';
import BookCard  from './BookCard';


const images = [Hero,Upload, Share];
const texts = ["Retrieve files","Upload files ", "Share files with other users"];
const delay = 3000;


export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [newText, setnewText] = useState("");
  const timeoutRef = useRef(null);

  const resetTimeout =() =>{
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * texts.length);
    setnewText(texts[index]);
  }, []);


  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
        // setnewText((prevIndex) =>
        //   prevIndex === texts.length -1 ? 0 : prevIndex + 1
        // ),
      delay
    );
    const intervalID = setInterval(shuffle, 3000);

    return () => {
      resetTimeout();
      clearInterval(intervalID);
    };
  }, [
    index, 
    shuffle
  ]);

  return (
    <Box px={8}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} width={'full'}>
        <Flex py={8} px={8} flex={1} align={'center'} justify={'space-between'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Heading
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                Develop your
              </Heading>
              <br />{' '}
              <Heading color={'orange.400'} as={'span'}>
                Emagination
              </Heading>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.200'}>
              A Decentralized Library, that allows users to 
              <Text 
                fontSize={'lg'} 
                color={'orange.500'} 
                fontWeight={700}
                letterSpacing={'2px'}
              >{newText}</Text>
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button name={"Get Started"} />
            </Stack>
          </Stack>
        </Flex>
        <Flex overflow='hidden' maxW={'xl'} my='0' mx='auto'>
          <Flex 
          flex={1} 
          whiteSpace={'nowrap'}
          transition='ease 1000ms'
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {images.map((image, index) => (
            <Image
              display={'inline-block'}

              alt={'Login Image'}
              objectFit={'contain'}
              key={index}
              src={image}
            />
          ))}
          </Flex>
        </Flex>
      </Stack>
      <Heading p={8}>Articles</Heading>
      <ArticleCard />
      <Heading p={8}>Books</Heading>
      <BookCard />
    </Box>
  )
}
