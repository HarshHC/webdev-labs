fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log("All titles with more than 6 letters:");
    console.log("");
    data.map((post) => {
      if (post.title.length > 6) {
        console.log(post.title);
      }
    });

    console.log("");
    console.log("All word frequency maps body of all posts:");
    console.log("");

    const freqs = {};

    data.map((post) => {
      const words = post.body.split(" ");
      words.map((word) => {
        if (freqs[word]) {
          freqs[word]++;
        } else {
          freqs[word] = 1;
        }
      });
    });

    Object.keys(freqs).map((key) => {
        console.log(`${key} = ${freqs[key]}`);
      });
  });
