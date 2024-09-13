document.body.innerHTML=` <div class="wrapper">
        <span>&#128514;</span>
        <p id="joke"></p>
        <button id="btn">Get Random Joke</button>
        <div class="categories">
            <select id="category">
                <option value="Any">Any</option>
                <option value="Programming">Programming</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>
        </div>
        <div class="history">
            <h2>Joke History</h2>
            <ul id="history"></ul>
        </div>
        <div class="share">
            <button id="shareBtn">Share Joke</button>
        </div>
        <div class="theme-toggle">
            <button id="toggleTheme">Toggle Dark Mode</button>
        </div>
        <div id="loading" class="loading">Loading...</div>
    </div>`
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const historyContainer = document.getElementById("history");
const shareBtn = document.getElementById('shareBtn');
const toggleThemeBtn = document.getElementById('toggleTheme');
const loadingIndicator = document.getElementById('loading');
const categorySelect = document.getElementById('category');
const urlBase = "https://v2.jokeapi.dev/joke/";

let jokeHistory = [];

const getJoke = () => {
    jokeContainer.classList.remove("highlight");
    jokeContainer.classList.remove("fade");
    loadingIndicator.style.display = 'block';

    const category = categorySelect.value;
    const categoryUrl = `${urlBase}${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;

    fetch(categoryUrl)
    .then(data => data.json())
    .then(item => {
        const joke = item.joke;
        jokeContainer.textContent = joke;
        jokeContainer.classList.add("fade");
        jokeContainer.classList.add("highlight");

        if (joke) {
            jokeHistory.push(joke);
            updateHistory();
        }
    })
    .finally(() => {
        loadingIndicator.style.display = 'none';
    });
}

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Joke copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy joke: ', err);
        });
}

const updateHistory = () => {
    historyContainer.innerHTML = '';
    jokeHistory.slice(-5).forEach(joke => {
        const item = document.createElement('li');
        item.textContent = joke;
        item.addEventListener('click', () => copyToClipboard(joke));
        historyContainer.appendChild(item);
    });
}

const shareJoke = () => {
    if (jokeContainer.textContent) {
        const joke = jokeContainer.textContent;
        if (navigator.share) {
            navigator.share({
                title: 'Random Joke',
                text: joke,
                url: location.href
            }).catch(console.error);
        } else {
            alert('Share functionality is not supported on this browser.');
        }
    }
}

const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
}

btn.addEventListener("click", getJoke);
jokeContainer.addEventListener("click", () => {
    if (jokeContainer.textContent) {
        copyToClipboard(jokeContainer.textContent);
    }
});
shareBtn.addEventListener('click', shareJoke);
toggleThemeBtn.addEventListener('click', toggleTheme);

getJoke();
