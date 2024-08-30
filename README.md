# Random-joke-
JOKE
https://joke-gamma.vercel.app/
Random Joke Generator
A simple web application for generating random jokes. Users can fetch jokes, copy them to the clipboard, view a history of recent jokes, share jokes via the Web Share API, and toggle between light and dark themes.

Features
Fetch Random Jokes: Click to get a new joke from the selected category.
Copy to Clipboard: Click on a joke to copy it to the clipboard.
Joke History: View and click on the last 5 jokes to copy them.
Share Jokes: Share jokes via the Web Share API (browser support required).
Dark Mode: Toggle between light and dark themes.
Components
app.js
getJoke(): Fetches a random joke from the JokeAPI and updates the joke container and history.
copyToClipboard(text): Copies the given text to the clipboard and shows a confirmation alert.
updateHistory(): Updates the history list with the last 5 jokes.
shareJoke(): Shares the current joke via the Web Share API or shows an alert if unsupported.
toggleTheme(): Toggles between light and dark themes.
HTML Structure
.wrapper: The main container holding the joke, buttons, categories, history, and loading indicator.
#joke: Displays the current joke.
#btn: Button to fetch a new joke.
#category: Dropdown to select the joke category.
#history: Displays the history of the last 5 jokes.
#shareBtn: Button to share the joke.
#toggleTheme: Button to toggle dark mode.
#loading: Loading indicator displayed while fetching jokes.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourzahooruddin-devs/random-joke-generator.git
Navigate to the project directory:

bash
Copy code
cd random-joke-generator
Install dependencies:

bash
Copy code
npm install
Open the index.html file in your browser.

Technologies Used
HTML: Structure and layout.
CSS: Styling and responsive design.
JavaScript: Fetching jokes, managing state, and handling user interactions.
JokeAPI: API for fetching jokes.
Contributing
Contributions are welcome! Please open an issue or submit a pull request with your improvements or fixes.

License
MIT License. See the LICENSE file for details.

Contact
For questions or suggestions, feel free to email wesupposed@gmail.com.
