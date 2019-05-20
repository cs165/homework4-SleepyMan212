// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor(container,audio) {
      this.container = container;
      this.audio = audio;


      this.container.addEventListener('click',()=>{
          if(this.container.src.indexOf('/images/play.png')!=-1){
              this.container.src = './images/pause.png';
              this.audio.pause();
          }else{
              this.container.src = './images/play.png';
              this.audio.play();
          }
      })
    // TODO(you): Implement the constructor and add fields as necessary.
  }
  // TODO(you): Add methods as necessary.
}
