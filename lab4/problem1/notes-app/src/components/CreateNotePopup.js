import { useEffect, useState } from "react";

function CreateNotePopup({
  visbility,
  addNote,
  closePopup,
  editNote,
  updateNote,
}) {
  const [noteText, setNoteText] = useState("");
  const [noteColor, setNoteColor] = useState(0);

  const noteColors = ["red", "blue", "green", "yellow"];

  useEffect(() => {
    if (editNote) {
      setNoteColor(noteColors.indexOf(editNote.color));
      setNoteText(editNote.text);
    }
  }, [editNote]);

  return (
    <div
      className={`Popup ${noteColors[noteColor]}`}
      style={{ display: visbility ? "block" : "none" }}
    >
      <div className="createNoteHeader">
        <h2>Create a Note</h2>
        <button
          id="closeBtn"
          onClick={() => {
            closePopup();
          }}
        >
          x
        </button>
      </div>

      <div className="colors">
        {noteColors.map((color, index) => {
          return (
            <div
              className={`${color} colorbox`}
              onClick={() => {
                setNoteColor(index);
              }}
            ></div>
          );
        })}
      </div>
      <textarea
        name="note"
        id="noteTextArea"
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
      ></textarea>
      <button
        id="addNote"
        onClick={() => {
          if (noteText === "") return;
          if (editNote) {
            updateNote({
              text: noteText,
              color: noteColors[noteColor],
            });
          } else {
            addNote({
              text: noteText,
              color: noteColors[noteColor],
            });
          }

          setNoteColor(0);
          setNoteText("");
          closePopup();
        }}
      >
        {editNote ? "Update" : "Create"}
      </button>
    </div>
  );
}

export default CreateNotePopup;
