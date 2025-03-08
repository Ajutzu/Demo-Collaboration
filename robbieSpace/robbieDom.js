DOM.insertAdjacentHTML('beforeend', `
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center bg-black text-white">
        <h1>Hi! This is Robbie</h1>
        <div class="tenor-gif-embed w-50 h-auto" data-postid="9878940352483067214" data-share-method="host" data-aspect-ratio="1.23267" data-width="100%">
        <a href="https://tenor.com/view/alarm-gif-9878940352483067214">Alarm GIF</a>from <a href="https://tenor.com/search/alarm-gifs">Alarm GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </div>
    `);

    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);