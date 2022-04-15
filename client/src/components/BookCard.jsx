import { SimpleGrid, Stack, useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  TabList,
  Tabs,
  Tab,
  TabPanel,
  TabPanels} from '@chakra-ui/react';
import Card from './BCard';
// import Button from './button';
import Form from './containers/Form';

export default function BookCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Stack px={4} py={6} w={'full'}>
        <Box px={{ base: '4px', md: '18px'}}>
          <Button 
            bg="orange.700" color="white" 
            onClick={onOpen}
            size="md" 
            _hover={{
              bg: "orange.600"
            }}
          >
            Upload
          </Button>
        </Box>
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
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} gap={4}>
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}