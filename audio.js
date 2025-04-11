const rightMusic = document.getElementById('music');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const songbtn = document.getElementById('songbtn');
const pauseSong = document.getElementById('pauseSong');
const stopSong = document.getElementById('stopSong');


var songNum;
var SideBarSongVisible = false;

const song = document.getElementById('song');

s1.addEventListener('click', () => {
  song.src = '/audio/futurecar.mp3';
  songPlay();
  stopRotate();
  songNum = 1;
  rotate();
  disableSongBtns();
})

s2.addEventListener('click', () => {
  song.src = '/audio/futurecar2.mp3';
  songPlay();
  stopRotate();
  songNum = 2;
  rotate();
  disableSongBtns();
})

s3.addEventListener('click', () => {
  song.src = '/audio/jungle.mp3';
  songPlay();
  stopRotate();
  songNum = 3;
  rotate();
  disableSongBtns();
})

s4.addEventListener('click', () => {
  song.src = '/audio/lofi.mp3';
  songPlay();
  stopRotate();
  songNum = 4;
  rotate();
  disableSongBtns();
})

s5.addEventListener('click', () => {
  song.src = '/audio/rain.mp3';
  songPlay();
  stopRotate();
  songNum = 5;
  rotate();
  disableSongBtns();
})

s6.addEventListener('click', () => {
  song.src = '/audio/wave.mp3';
  songPlay();
  stopRotate();
  songNum = 6;
  rotate();
  disableSongBtns();
})

function disableSongSideBar() {
  if (!isRunning) {
    rightMusic.classList.add('disabled')
    console.log('tried');
    
  }
  else if(isRunning){
    rightMusic.classList.remove('disabled')
    console.log('tried again');
  }
}

disableSongSideBar();

function disableVideoSideBar() {
  if (!isRunning) {
    rightbg.classList.add('disabled')
    console.log('tried');
    
  }
  else if(isRunning){
    rightbg.classList.remove('disabled')
    console.log('tried again');
  }
}

disableVideoSideBar();



function rotate() {

  gsap.to(`#s${songNum} img`, {
    boxShadow: '#252934 1px 1px 20px 1px, #35ccbc -1px -1px 5px 2px, #35ccbc -1px -1px 10px 2px,#35ccbc -1px -1px 5px 2px'
    , transform: 'scale(1.10)'
  })

  gsap.to(`#s${songNum} img`, {
    rotate: 360,
    duration: 5,
    repeat: -1,

    ease: "linear",
    yoyo: false
  })
}

function stopRotate() {
  // var t = gsap.timeline(); 
  gsap.fromTo(`#s${songNum} img`, { rotation: 0 }, {
    rotation: 0, repeat: -1,
    duration: .5
  });

  gsap.to(`#s${songNum} img`, {
    boxShadow: '#252934 1px 1px 20px 1px, #35ccbc -1px -1px 5px 2px'
    , transform: 'scale(1)'
  })

}

function pauseRotate() {
  // var t = gsap.timeline(); 
  gsap.fromTo(`#s${songNum} img`, { rotation: 0 }, {
    rotation: 0, repeat: -1,
    duration: .5
  });
}

function rightSideSongWidth() {
  if (SideBarSongVisible == false) {

    wid = 200;
    SideBarSongVisible = true;


  } else if (SideBarSongVisible == true) {
    wid = 0;
    SideBarSongVisible = false;

  }


  gsap.to('#music', {
    duration: .5,
    width: wid,
    ease: "power1.inOut"
  })

}

songbtn.addEventListener('click', () => {

  if (sideBarVisible == true) {
    rightSideWidth();
    setTimeout(() => {
      rightSideSongWidth();
    }, 500);

  }

  else if (sideBarBgVisible == true) {
    rightSideBgWidth();
    setTimeout(() => {
      rightSideSongWidth();
    }, 500);
  }

  else {
    rightSideSongWidth();
  }
})

pauseSong.addEventListener('click', () => {
  console.log('clicked');

  if (!song.paused) {
    songPause();
    pauseRotate();
    document.querySelector('#pauseSong img').src = 'play.png'
  } else if (song.paused) {
    songPlay();
    rotate();
    document.querySelector('#pauseSong img').src = 'pause.png'
  }

})

stopSong.addEventListener('click', () => {
  songStop();
  stopRotate();
  document.querySelector('#pauseSong img').src = 'play.png'
})

