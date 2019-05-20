// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
    constructor(container,songElement,queryElement,errorElement,musicShow) {
        this.container = container;
        this.songElement = songElement;
        this.queryElement = queryElement;
        this.errorElement = errorElement;
        this.musicShow = musicShow;
        this.submit = this.container.querySelector('input[type=submit]');

        this.themeList = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];

        this.data = null;
        this.songData = null;

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.fetchSong = this.fetchSong.bind(this);
        // TODO(you): Implement the constructor and add fields as necessary.
        this.fetchSong();
        this.queryElement.value = this.themeList[Math.floor(Math.random() * this.themeList.length)]

        this.submit.addEventListener('click',(e)=>{
            if(!(this.queryElement.value && this.songElement.value)) return;

            e.preventDefault();
            e.stopPropagation();
            this.data = {
                theme: queryElement.value,
                song: this.songData[songElement.value].songUrl
            }
            console.log(this.data);
            this.hide();
            musicShow(this.data,this.show);
        });

    }
    fetchSong(){
        fetch("https://fullstackccu.github.io/homeworks/hw4/songs.json")
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                this.songData = data;
                for(var d in data){
                    let option = document.createElement('option');
                    option.setAttribute('value',d);
                    let text = document.createTextNode(data[d].artist + ": "+ data[d].title);
                    option.appendChild(text);
                    this.songElement.appendChild(option);
                }
            })
    }

    show() {
        this.container.classList.remove('inactive');
    }
    hide() {
        this.container.classList.add('inactive');
    }
    // TODO(you): Add methods as necessary.
}
