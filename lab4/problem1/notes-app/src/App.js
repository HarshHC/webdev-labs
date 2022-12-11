import { useState } from "react";
import "./App.css";
import CreateNotePopup from "./components/CreateNotePopup";
import Note from "./components/Note";

function App() {
  const [createNoteVisible, setCreateNoteVisible] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const [editNoteIndex, setEditNoteIndex] = useState(-1);
  const [notesList, setNotesList] = useState([
    {
      text: "hello",
      color: "yellow",
    },
  ]);

  const addNote = (note) => {
    setNotesList([...notesList, note]);
  };

  const deleteNote = (index) => {
    const copy = [...notesList];
    copy.splice(index, 1);
    setNotesList(copy);
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
          {notesList.map((note, i) => {
            return (
              <Note
                text={note.text}
                color={note.color}
                editNote={() => {
                  setEditNote(note);
                  setEditNoteIndex(i);
                  setCreateNoteVisible(true);
                }}
                deleteNote={() => {
                  deleteNote(i);
                }}
              />
            );
          })}
        </div>
      </main>

      <CreateNotePopup
        visbility={createNoteVisible}
        addNote={addNote}
        editNote={editNote}
        updateNote={(newNote) => {
          if (editNote) {
            const copy = [...notesList];
            copy[editNoteIndex] = newNote;
            setNotesList(copy);
            setEditNote(null);
            setEditNoteIndex(-1);
          }
        }}
        closePopup={() => {
          setCreateNoteVisible(false);
        }}
      />
    </div>
  );
}

export default App;
