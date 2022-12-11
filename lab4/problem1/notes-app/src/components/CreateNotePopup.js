import { useState } from "react";

function CreateNotePopup({ visbility, addNote, closePopup }) {
  const [noteText, setNoteText] = useState("test");
  const [noteColor, setNoteColor] = useState(0);

  const noteColors = ["red", "blue", "green", "yellow"];

  return (
    <div
      className={`Popup ${noteColors[noteColor]}`}
      style={{ visibility: visbility ? "visible" : "hidden" }}
    >
      <div className="createNoteHeader">
        <h4>Create a Note</h4>
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
      <textarea name="note" id="note" cols="26" rows="10"></textarea>
      <button
        id="addNote"
        onClick={() => {
          addNote({
            text: noteText,
            color: noteColors[noteColor],
          });
        }}
      >
        Create
      </button>
    </div>
  );
}

export default CreateNotePopup;
