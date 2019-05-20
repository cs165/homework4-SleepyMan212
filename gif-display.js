// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
//
// See HW4 writeup for more hints and details.
class GifDisplay {
    constructor(musicElement) {
        // TODO(you): Implement the constructor and add fields as necessary.
        this.container = musicElement;
        this.gifScreen1 = musicElement.querySelector('#gif-screen1');
        this.gifScreen2 = musicElement.querySelector('#gif-screen2');

        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.uniID = this.uniID.bind(this);
        this.showGif = this.showGif.bind(this);

        this.baseUrl = `https://api.giphy.com/v1/gifs/search`;
        this.param = `&rating=g&api_key=bC8P6Q7mUYvM63oU0FMsOsWgBwIUmFPN&limit=25`
        this.fetchData = this.fetchData.bind(this);
        this.imgID1 = null;
        this.imgID2 = null;
        this.screen = null;
        this.aud_player = new AudioPlayer();
        this.playBtn = null;
    }

    fetchData(query) {
        let en_param = encodeURI(`?q=${query}${this.param}`);
        console.log(this.baseUrl+en_param);;

        fetch(this.baseUrl+en_param,{method:"GET"})
            .then((data)=>{
                return data.json();
            })
            .then((json)=>{
                this.gifData = json.data;
                console.log(this.gifData);
            }).then(()=>{
                this.showGif();
                this.aud_player.setSong(this.data.song)
                this.aud_player.setKickCallback(this.showGif);
                this.aud_player.play();
                new PlayButton(this.container.querySelector('img'),this.aud_player);
            })
    }
    // TODO(you): Add methods as necessary.
    show(data,menuShow) {
        this.data = data;
        this.menuShow = menuShow;
        this.container.classList.remove('inactive');
        this.fetchData(this.data.theme);
        // console.log(this.gifData);
    }
    hide() {
        this.container.classList.add('inactive');
    }
    uniID(){
        let id;
        do {
            id = Math.floor(Math.random()*this.gifData.length);
        } while (this.imgID === id);
        this.imaID = id;
        return id;
    }
    showGif(){
        if(this.screen === 1){
            this.imgID2 = this.uniID();
            let url2 = this.gifData[this.imgID2].images.downsized.url;

            this.gifScreen1.classList.remove('hidden');
            this.gifScreen2.classList.add('hidden');
            // this.gifScreen1.classList.add('ZIndex2');
            // this.gifScreen2.classList.add('ZIndex1');
            // this.gifScreen1.classList.remove('ZIndex1');
            // this.gifScreen2.classList.remove('ZIndex2');
            this.gifScreen2.style.background=`url(${url2})`
            this.screen = 2;
        }else if(this.screen === 2){
            this.imgID1 = this.uniID();
            let url1 = this.gifData[this.imgID1].images.downsized.url;
            console.log("dawd");
            // console.log(url1);
            this.gifScreen1.classList.add('hidden');
            this.gifScreen2.classList.remove('hidden');
            // this.gifScreen1.classList.add('ZIndex1');
            // this.gifScreen2.classList.add('ZIndex2');
            // this.gifScreen1.classList.remove('ZIndex2');
            // this.gifScreen2.classList.remove('ZIndex1');
            console.log(this.gifScreen1.style.background);
            this.gifScreen1.style.background=`url(${url1})`
            console.log(this.gifScreen1.style.background);

            this.screen = 1;
        }else if(this.screen === null){
            this.imgID1 = this.uniID();
            this.imgID2 = this.uniID();
            let url1 = this.gifData[this.imgID1].images.downsized.url;
            let url2 = this.gifData[this.imgID1].images.downsized.url;
            this.gifScreen1.style.background=`url(${url1})`
            this.gifScreen2.style.background=`url(${url2})`
            this.gifScreen2.classList.add('hidden');
            // this.gifScreen1.classList.add('ZIndex2');
            // this.gifScreen2.classList.add('ZIndex1');
            // this.gifScreen1.style.zIndex=`2`;
            this.screen = 2;
        }
        // this.gifScreen2.style.background=`url(${url2})`
    }
}
