// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
    constructor() {
        const menuElement = document.querySelector("#menu");
        const songSelectorElement = document.querySelector("#song-selector");
        const queryInputElement = document.querySelector("#query-input");
        const errorElement = document.querySelector("#error");
        const musicElement = document.querySelector("#music-screen");
        // const menuElement = document.querySelector("#menu");
        // TODO(you): Implement the constructor and add fields as necessary.
        this.music = new GifDisplay(musicElement);
        this.menu = new MenuScreen(menuElement,songSelectorElement,queryInputElement,errorElement,this.music.show);

    }
    // TODO(you): Add methods as necessary.
}
