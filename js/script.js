const BASE_URL = "https://v2.jokeapi.dev/joke/Any?safe-mode";
const displayContainer = document.querySelector(".container")

async function fetchJokes() {
    try {
    const response = await fetch(BASE_URL);
    const jokes = await response.json();
    console.log(jokes)

    if (jokes.type === "twopart") {
        displayJoke(jokes)
        document.title = jokes.setup;
    } else {
        displayJoke2(jokes)
        document.title = jokes.joke;
    }   

    }
    catch(error){
        console.log(error);
    }
}

fetchJokes();

function displayJoke(jokes) {
    displayContainer.innerHTML = `
        <h2>Joke: ${jokes.type}</h2>
        <div class="joke setup">${jokes.setup}</div>
        <div class="joke punchline">${jokes.delivery}</div>             
        `;
}

function displayJoke2(jokes) {
    displayContainer.innerHTML = `
        <h2>Joke: ${jokes.type}</h2>
        <div class="joke setup">${jokes.joke}</div>
        `;
}