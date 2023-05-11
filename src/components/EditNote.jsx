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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../redux/NoteSlice";

function EditNote({ noteId, isOpen, onClose }) {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state);

  const findNote = notes?.find((item) => item.id === noteId);

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (findNote) {
      setNote(findNote.note);
      setTitle(findNote.title);
    }
  }, [findNote]);

  const handleSubmit = () => {
    const data = {
      id: findNote.id,
      title,
      note,
    };
    dispatch(updateNote(data));
    setTitle("");
    setNote("");
    onClose();
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl onSubmit={handleSubmit}>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Note</FormLabel>
              <Textarea
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
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

export default EditNote;
