import { useState } from "react";
import "./App.css";
import CreateNotePopup from "./components/CreateNotePopup";
import Note from "./components/Note";

function App() {
  const [createNoteVisible, setCreateNoteVisible] = useState(false);
  const [notesList, setNotesList] = useState([
    {
      text: "hello",
      color: "yellow",
    },
  ]);

  const addNote = (note) => {
    setNotesList([...notesList, note]);
  };

  return (
    <div className="App">
      <main>
        <nav>
          <h1>Notes App</h1>
          <button
            onClick={() => {
              setCreateNoteVisible(!createNoteVisible);
            }}
          >
            Create Note
          </button>
        </nav>
        <div className="notes">
          {notesList.map((note) => {
            return <Note text={note.text} color={note.color} />;
          })}
        </div>
      </main>

      <CreateNotePopup
        visbility={createNoteVisible}
        addNote={addNote}
        closePopup={() => {
          setCreateNoteVisible(false);
        }}
      />
    </div>
  );
}

export default App;
