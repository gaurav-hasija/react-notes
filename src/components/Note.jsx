import {
    Box,
    Button,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
import { useSelector } from "react-redux";

  
  function Note({ noteId, isOpen, onClose }) {
    const { notes } = useSelector((state) => state);
    const findNote = notes?.find((item) => item.id === noteId);

    return (
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>View Note</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <HStack>
                <Text>Title</Text>
                <Text fontWeight="bold">{findNote?.title}</Text>
              </HStack>
              <HStack my={4}>
                <Text>Note</Text>
                <Text fontWeight="bold">{findNote?.note}</Text>
              </HStack>
            </ModalBody>
  
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                onClick={onClose}
              >
                Close
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  }
  
  export default Note;
  