const createNoteBtn = document.getElementById("createNoteBtn");
const createNote = document.getElementsByClassName("createNote");

alert(createNote.style);

createNoteBtn.onclick = () => {
  createNote.styles.display = "inline";
};
