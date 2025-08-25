const jokePara = document.querySelector("#joke");


const getJoke = async () => {
    try {
        const url = "https://icanhazdadjoke.com/";
        const response = await fetch(url, {
            headers: { Accept: "application/json" } 
        });
        const responseJson = await response.json();
        let joke = responseJson.joke;

        jokePara.textContent = joke;
        console.log(joke)
    }
    catch(err) {
        jokePara.textContent = "An unexpected error occured";
        console.error(err);
    }
    
}

const genJokeButton = document.querySelector("button");
genJokeButton.addEventListener("click", getJoke);
