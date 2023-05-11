import {
  Box,
  HStack,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AddNote from "./AddNote";
import { EditIcon, DeleteIcon, InfoIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, searchNotes } from "../redux/NoteSlice";
import EditNote from "./EditNote";
import Note from "./Note";

const Notes = () => {
  const { notes, filteredNotes } = useSelector((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isNoteOpen, onOpen:onNoteOpen,  onClose:onNoteClose } = useDisclosure();
  const [id, setId] = useState(null);

  const noteList = filteredNotes?.length ? filteredNotes : notes;


  const dispatch = useDispatch();
  const handleEditNote = (note) => {
    setId(note.id);
    onOpen();
  };
  const handleNote = (note) => {
    setId(note.id);
    onNoteOpen();
  };
  return (
    <Box p={6}>
      <HStack >
        <AddNote />

        <Input
          placeholder="Search for Notes"
          onChange={(e) => dispatch(searchNotes({ value: e.target.value }))}
          pt={-5}
        />
      </HStack>
      <Box>
        <TableContainer bg={"white"} w={['sm', '2xl']} p={6} rounded="lg" shadow="lg" mt={4}>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Title</Th>
                <Th>Note</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {noteList?.map((note, index) => (
                <Tr key={note.title} >
                  <Td>{index + 1}</Td>
                  <Td>{note.title}</Td>
                  <Td wordBreak="break-all">{note.note.slice(0, 20)}...</Td>
                  <Td>
                    <EditIcon  onClick={() => handleEditNote(note)} />
                    <DeleteIcon mx={2} onClick={() => dispatch(deleteNote(note.id))} />
                    <InfoIcon onClick={() => handleNote(note)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <EditNote isOpen={isOpen} onClose={onClose} noteId={id} />
      <Note noteId={id} onClose={onNoteClose} isOpen={isNoteOpen}  />
    </Box>
  );
};

export default Notes;
