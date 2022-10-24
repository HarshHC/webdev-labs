const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const profilePic = document.getElementById("profilePic");
const name = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const userLocation = document.getElementById("location");
const numRepos = document.getElementById("numRepos");
const list = document.getElementById("list");

let repoList = [];

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  getProfileData(searchBar.value);
  getRepos(searchBar.value);
});

const getProfileData = (user) => {
  const promise = new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    const url = `https://api.github.com/users/${user}`;
    request.addEventListener("loadend", function () {
      const response = JSON.parse(this.responseText);
      if (this.status === 200) {
        resolve([response]);
      } else {
        reject([this, response]);
      }
    });
    request.open("GET", url, true);
    request.send();
  });

  promise.then(
    function (response) {
      const data = response[0];

      profilePic.src = data.avatar_url;
      name.innerHTML = "Name: " + data.name;
      username.innerHTML = "Username: " + (data.login ?? "Unavailable");
      email.innerHTML = "Email: " + (data.email ?? "Unavailable");
      userLocation.innerHTML = "Location: " + (data.location ?? "Unavailable");
      numRepos.innerHTML =
        "Number of Repos: " + (data.public_repos ?? "Unavailable");
    },
    function (errorMessage) {
      alert("User not found!");
      console.log(errorMessage);
    }
  );
};

const getRepos = (user) => {
  const promise = new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    const url = `https://api.github.com/users/${user}/repos`;
    request.addEventListener("loadend", function () {
      const response = JSON.parse(this.responseText);
      if (this.status === 200) {
        resolve([response]);
      } else {
        reject([this, response]);
      }
    });
    request.open("GET", url, true);
    request.send();
  });

  promise.then(
    function (response) {
      repoList = response[0];
      list.innerHTML = "";
      items = "";

      repoList.forEach((repo) => {
        items += `
        <div class="repo">
            <h3 class="repoName">${repo.name}</h3>
            <p class="repoDesc">${repo.description ?? "No Description"}</p>
        </div>
        `;
      });

      list.innerHTML = items;
    },
    function (errorMessage) {
      alert("Repos not found!");
      console.log(errorMessage);
    }
  );
};
