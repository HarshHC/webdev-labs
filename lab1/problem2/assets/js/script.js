const createNoteBtn = document.getElementById("createNoteBtn");
const createNote = document.getElementById("createNote");
const closeBtn = document.getElementById("closeBtn");
const addNote = document.getElementById("addNote");
const noteTextArea = document.getElementById("note");
const notesList = document.getElementById("list");
const colorBoxes = document.querySelectorAll(".colorbox");
const noteColors = ["red", "blue", "green", "yellow"];
const colorCodes = [
  "rgb(209, 123, 123)",
  "rgb(78, 138, 184)",
  "rgb(129, 232, 129)",
  "rgb(255, 229, 127)",
];

let selectedColor = 0;
let editMode = false;
let editPos = -1;

let notes = [
  {
    text: "hello",
    color: "yellow",
  },
];

closeBtn.addEventListener("click", () => {
  createNote.style.display = "none";
});

for (let i = 0; i < colorBoxes.length; i++) {
  colorBoxes[i].addEventListener("click", (event) => {
    selectedColor = i;
    createNote.style.background = colorCodes[i];
  });
}

addNote.addEventListener("click", () => {
  if (noteTextArea.value === "") {
    return;
  }

  if (editMode) {
    notes[editPos].text = noteTextArea.value;
    notes[editPos].color = noteColors[selectedColor];
  } else {
    notes.push({
      text: noteTextArea.value,
      color: noteColors[selectedColor],
    });
  }

  noteTextArea.value = "";
  refreshNotes();
});

createNoteBtn.addEventListener("click", () => {
  if (createNote.style.display === "block") {
    createNote.style.display = "none";
  } else {
    createNote.style.display = "block";
  }
});

const refreshNotes = () => {
  let allNotes = "";

  notes.forEach((note, i) => {
    allNotes += ` 
  <div class="note ${note.color}">
    <div class="noteBar">
      <h3>Note</h3>
      <div>
        <i id="editIcon" class="fas fa-edit" onclick="editNote(${i})"></i>
        <i class="fas fa-minus-circle" onclick="deleteNote(${i})"></i>
      </div>
      
    </div>
    <p>${note.text}</p>
  </div>
  `;
  });

  notesList.innerHTML = allNotes;
};

refreshNotes();

function deleteNote(pos) {
  let list = [...notes];
  list.splice(pos, 1);
  notes = [...list];

  refreshNotes();
}

function editNote(pos) {
  editMode = true;
  editPos = pos;
  noteTextArea.value = notes[pos].text;

  createNote.style.display = "block";
}
