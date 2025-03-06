const memes = [
  {
    text: "When the backend works but frontend breaks...",
    url: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  },
  {
    text: "Fixing one bug...",
    url: "https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/giphy.gif",
  },
  {
    text: "When the API works on first try",
    url: "https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif",
  },
];

const randomMeme = memes[Math.floor(Math.random() * memes.length)];

DOM.insertAdjacentHTML(
  "beforeend",
  `
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center bg-success">
            <div class="meme-section text-center mt-4">
        <h3>${randomMeme.text}</h3>
        <img src="${randomMeme.url}" alt="Meme" width=500" class="rounded shadow-lg border border-dark">
    </div>
    </div>

`
);
