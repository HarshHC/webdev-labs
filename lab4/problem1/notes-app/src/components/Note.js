import React from "react";

function Note({ text, color, deleteNote, editNote }) {
  return (
    <div className={`note ${color}`}>
      <div className="noteBar">
        <h3>Note</h3>
        <div>
          <i
            id="editIcon"
            className="fas fa-edit"
            onClick={() => {
              editNote();
            }}
          ></i>
          <i
            className="fas fa-minus-circle"
            onClick={() => {
              deleteNote();
            }}
          ></i>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Note;
