const addButton = document.getElementById("addBtn");
const searchButton = document.getElementById("searchBtn");
const clearButton = document.getElementById("clearBtn");
const searchBar = document.getElementById("searchBar");
const nameInput = document.getElementById("name");
const mobileInput = document.getElementById("mobile");
const emailInput = document.getElementById("email");
const table = document.getElementById("table");
const error = document.getElementById("error");

let isAscending = false;

const contacts = [
  {
    name: "NO RESULTS",
    mobile: "NO RESULTS",
    email: "NO RESULTS",
  },
  {
    name: "ANO RESULTS",
    mobile: "NO RESULTS",
    email: "NO RESULTS",
  },
  {
    name: "BNO RESULTS",
    mobile: "NO RESULTS",
    email: "NO RESULTS",
  },
  {
    name: "CNO RESULTS",
    mobile: "NO RESULTS",
    email: "NO RESULTS",
  },
];
let searchResult = [];

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    nameInput.value == "" ||
    mobileInput.value == "" ||
    emailInput.value == ""
  ) {
    error.innerHTML = "Please fill all fields";
    return;
  }

  const nameRegex = /^[A-Za-z\s]*$/;
  const phoneRegex = /^\d+$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!nameRegex.test(nameInput.value) || nameInput.value.length > 20) {
    error.innerHTML =
      "Name cannot can contain letters and space and should be max 20 charecters long";
    return;
  }

  if (!emailRegex.test(emailInput.value)) {
    error.innerHTML = "Invalid email";
  }

  if (!phoneRegex.test(mobileInput.value) || mobileInput.value.length != 10) {
    error.innerHTML = "Invalid mobile number";
  }

  if (
    !nameInput.checkValidity() ||
    !mobileInput.checkValidity() ||
    !emailInput.checkValidity()
  ) {
    nameInput.reportValidity();
    mobileInput.reportValidity();
    emailInput.reportValidity();
    return;
  }
  error.innerHTML = "";

  contacts.push({
    name: nameInput.value,
    mobile: mobileInput.value,
    email: emailInput.value,
  });

  refereshList(contacts);
});

searchBar.addEventListener("keyup", () => {
  const searchTerm = searchBar.value;
  searchResult = [];
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].mobile.includes(searchTerm)) {
      searchResult.push(contacts[i]);
    }
  }

  refereshList(searchResult);
});

function toggleSort() {
  if (isAscending) {
    contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    isAscending = false;
  } else {
    contacts.sort((a, b) => (a.name < b.name ? 1 : -1));
    isAscending = true;
  }
  refereshList(contacts);
}

const refereshList = (list) => {
  if (searchBar.value == "") {
    list = [...contacts];
  }

  if (list.length == 0) {
    list.push({
      name: "NO RESULTS",
      mobile: "NO RESULTS",
      email: "NO RESULTS",
    });
  }

  table.innerHTML = `   
  <tr id="test">
    <th id="toggleName" onclick="toggleSort()">Name</th>
    <th>Mobile</th>
    <th>Email</th>
  </tr>
`;

  list.forEach((contact) => {
    const row = document.createElement("tr");
    const nameTd = document.createElement("td");
    const mobileTd = document.createElement("td");
    const emailTd = document.createElement("td");

    nameTd.textContent = contact.name;
    mobileTd.textContent = contact.mobile;
    emailTd.textContent = contact.email;

    row.appendChild(nameTd);
    row.appendChild(mobileTd);
    row.appendChild(emailTd);
    table.appendChild(row);
  });
};

refereshList();
