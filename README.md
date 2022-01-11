# PokemonTV

Unofficial 3rd party PokemonTV website / client which supports a number of devices. Binarys are build for the Nintendo Switch. Content is fetched from the official API.


### Why?

PokemonTV exists on a number of devices but not on all. If your device has a webbrowser, you can just go to [https://slluxx.github.io/pokemontv/](https://slluxx.github.io/pokemontv/) and watch the current content online.

I had to work with the API because some browsers don't support displaying the official website (mainly the Nintendo Switch).

### But a Nintendo Switch client already exists?

Yes, thats true. But people with a banned console or those who use 90DNS to stay hidden from nintendo have no way of watching the content. 


### How does it work?

The [API branch](https://github.com/Slluxx/pokemontv/tree/api) fetches the complete content of the API from each language and stores it because direct access to the API from a browser throws CORS errors.

The [main branch](https://github.com/Slluxx/pokemontv/tree/main) is the source-code of the website. Its build with the Vue3 framework and Bootstrap5. A GitHub Action compiles the source and pushes it to the gh-pages branch.

The [gh-pages branch](https://github.com/Slluxx/pokemontv/tree/gh-pages) is the compiled source-code of the main branch and is whats used on [the website](https://slluxx.github.io/pokemontv/).

The [switch-client branch](https://github.com/Slluxx/pokemontv/tree/switch-client) is the source-code of the homebrew for the Nintendo Switch. The homebrew just opens a simple webbrowser and loads the [the website](https://slluxx.github.io/pokemontv/).


### Notes

The website includes an iframe to the official player. Id like to get around that with a custom player (a low quality mp4 stream and a high quality m3u8 stream are exposed by the API) but the Nintendo Switchs browser is very limited and the few tests i did with it showed that i should just stop trying for a full custom solution. 

If anyone wants to add branches for binarys, i am open for PRs.