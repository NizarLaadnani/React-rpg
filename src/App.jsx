import { useState } from "react";
import CharacterForm from "./components/CharacterForm.jsx";
import CharacterList from "./components/CharacterList.jsx";
import CharacterDetails from "./components/CharacterDetails.jsx";
import Battle from "./components/Battle.jsx";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  function addCharacter(char) {
    setCharacters((chars) => [...chars, char]);
  }

  const selected = characters.find((c) => c.id === selectedId);

  return (
    <>
      <CharacterForm onAdd={addCharacter} />
      <h2>Liste des personnages</h2>
      <CharacterList characters={characters} onSelect={setSelectedId} />
      <CharacterDetails character={selected} />
      <Battle characters={characters} />
    </>
  );
}

export default App;
