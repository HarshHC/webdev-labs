import React from "react";

function Note({ text, color }) {
  return (
    <div className={`note ${color}`}>
      <div className="noteBar">
        <h3>Note</h3>
        <div>
          <i id="editIcon" className="fas fa-edit"></i>
          <i className="fas fa-minus-circle"></i>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Note;
