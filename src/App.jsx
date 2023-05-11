import { HStack } from "@chakra-ui/react";
import { Notes } from "./components";

function App() {
  const notesKey = "notes";
  let notes = JSON.parse(localStorage.getItem(notesKey));

  if (!Array.isArray(notes)) {
    // If `notes` is not an array or is null, create an empty array
    notes = [];
    localStorage.setItem(notesKey, JSON.stringify(notes));
  }
  return (
    <HStack  justifyContent="center" alignItems="center" h="100vh" >
     <Notes /> 
    </HStack>
  );
}

export default App;
