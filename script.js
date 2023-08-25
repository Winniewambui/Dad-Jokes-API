document.querySelector(".btn").addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const jokeText = data.joke;
      document.querySelector(".text").textContent = jokeText;
    });
}
