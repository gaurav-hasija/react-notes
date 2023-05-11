import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/NoteSlice";
import { v4 as uuidv4 } from "uuid";

function AddNote() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const id = uuidv4();

 const [title, setTitle] = useState('')
 const [note, setNote] = useState('')

  const handleSubmit = () => {
    const data = {
      id,
      title,
      note,
    };
    dispatch(addNote(data));
    setTitle('')
    setNote('')
    onClose();
  };

  return (
    <Box>
      <Button onClick={onOpen} width="full" colorScheme="whatsapp">
        Add Note
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl onSubmit={handleSubmit}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Note</FormLabel>
              <Textarea  placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default AddNote;
