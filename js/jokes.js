const url = "https://v2.jokeapi.dev/joke/Any?amount=10";
const displayJokes = document.querySelector(".results");

async function getJokes() {
  try {
    const response = await fetch(url);
    const jokes = await response.json();
    console.log(jokes);

    for (let i of Object.keys(jokes.jokes)) {
      console.log(i);
      if (i >= 5) {
        break;
      }

      displayJokes.innerHTML += `         
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="card">
            <div class="joke-detail">
                <h4>${jokes.jokes[i].type}</h4>
                <div class="setup">${jokes.jokes[i].setup}</div>
                <div class="punchline">${jokes.jokes[i].delivery}</div>
            </div>
          </div>
        </div>
        `;
    }
    
  } catch (error) {
    console.log(error);
    displayJokes.innerHTML = ("error", error);
  }
}
  
getJokes();