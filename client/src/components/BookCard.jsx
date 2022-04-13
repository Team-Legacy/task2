import { SimpleGrid, Stack, useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box} from '@chakra-ui/react';
import Card from './BCard';
import Button from './button';
import Form from './containers/Form';

export default function ArticleCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack>
      <Box mx={8}>
        <Button name={'Upload'} click={onOpen} />
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
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} px={10} gap={4}>
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </Stack>
  );
}