const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Giphy Data:", data);
    })
    .catch(error => {
        console.error("There was an error fetching the gifs:", error);
    });

    const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchTerm = "sun";
const limit = 10;
const offset = 2;

const url2 = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;

fetch(url2)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Problem with request: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Sun Gifs:", data);
    })
    .catch(err => console.error("Fetch Error:", err));

    async function getStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const objectStarWars = await response.json();
        console.log(objectStarWars.result);
    } catch (error) {
        console.error("Could not fetch Star Wars data:", error);
    }
}

getStarship();

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
