
const timer = document.querySelector(".timer");

const timerID = document.getElementById('timer');

const img1 = document.getElementById('img1');

const img2 = document.getElementById('img2');

const brkTitle = document.getElementById('brk');

const studyTitle = document.getElementById('study');

const LongTitle = document.getElementById('longbrk');

const min = document.getElementById('min');

const sec = document.getElementById('sec');

const add = document.getElementById('add')

const addSome = document.getElementById('addSome')

const sub = document.getElementById('sub')

const gif2 = document.getElementById('gif2');

const timerSlot = document.getElementById('main');

const modify = document.getElementById('modify');




const oneImg = '/img1.png';
const twoImg = '/img2.png';
const threeImg = '/img3.png';

const mtitle = document.querySelector('title');

let text1 = document.getElementById('text1');

let text2 = document.getElementById('text2');

const leftNav = document.getElementById('left');

const right = document.getElementById('right');

const timerbtn = document.getElementById('timerbtn');



const bgbtn = document.getElementById('bgbtn');

const studyInputText = document.getElementById('studyInput');

const breakInputText = document.getElementById('breakInput');

const longInputText = document.getElementById('longInput');

const studyInputVal = document.getElementById('studyInputVal');

const breakInputVal = document.getElementById('breakInputVal');

const longInputVal = document.getElementById('longInputVal');

const save = document.getElementById('save');

const close = document.getElementById('close');

const videobackground = document.getElementById('videobg');

const rightbg = document.getElementById('rightbg');

const volumeBar = document.getElementById('volume');

const pauseVideo = document.getElementById('pauseVideo');

const stopVideo = document.getElementById('stopVideo');

var bgValue='bg0'
let timeLeft = 60;
var addValue = "study";
var isRunning=false;
let breakInterval;
let studyInterval;
let longInterval;
let sideBarVisible = false;
let sideBarBgVisible = false;
var book = 1500;
var chai = 600;
var khana = 1200; 
var studyTimeLeft;
var breakTimeLeft;
var  longTimeLeft;
let wid;
var backgroundGradientClr='var(--background)'
var blueClr='var(--studyClr)'
var blueLightClr='var(--studyLightClr)'
var blueGradientClr='var(--studybtnClr)'
var darkBlueClr='var(--dark)'
var pinkClr='var(--breakClr)'
var pinkLightClr='var(--brkLightClr)'
var pinkGradientClr='var(--breakBtnClr)'
var greenClr='var(--longBreakClr)'
var greenLightClr='var(--longBreakLightClr)'
var greenGradientClr='var(--longBreakBtnClr)'
var greenNaturalClr='var(--greenNatureClr)'
var greyClr='#252934'
var woodyFont='Dela Gothic One';
var def = '28px';


song.volume=.7;

// debugger
// studyTimer();
// videoPlay();
disableSongBtns(); 
disableVideoBtns();
function cnvrt(timm) {
    let minNew = Math.floor(timm / 60)
    if (minNew < 10) {
        minNew = '0' + minNew
    }
    min.innerHTML = minNew;



    let secNew = timm % 60
    if (secNew < 10) {
        secNew = '0' + secNew
    }
    sec.innerHTML = secNew
    

    titleUpdate(minNew, secNew)
}

function disableSongBtns() {
    if (!song.src.includes('.mp3',0)) {
        document.querySelector('#pauseSong').classList.add('disabled')
        document.querySelector('#stopSong').classList.add('disabled')
    } else {
        document.querySelector('#pauseSong').classList.remove('disabled')
        document.querySelector('#stopSong').classList.remove('disabled')
    }
}

function disableVideoBtns() {
    if (!videobackground.src.includes('.mp4',0)) {
        document.getElementById('pauseVideo').classList.add('disabled')
        document.getElementById('stopVideo').classList.add('disabled')
    } else {
        document.getElementById('pauseVideo').classList.remove('disabled')
        document.getElementById('stopVideo').classList.remove('disabled')
    }
}



function titleUpdate(min, sec) {
    if (addValue == 'study') {
        mtitle.innerText = `Study time left - ${min}:${sec}`
    } else if (addValue == 'break') {
        mtitle.innerText = `break time left - ${min}:${sec}`
    }
    else if (addValue == 'long') {
        mtitle.innerText = `long break time left - ${min}:${sec}`
    }


}


function studyTimer() {
    clearInterval(breakInterval)
    clearInterval(studyInterval)
    clearInterval(longInterval)
    addValue = 'study';
    isRunning=true;
    videoPlay();
    songPlay();
    disableSongSideBar();
    disableVideoSideBar();
   


   
     studyTimeLeft=book;
    // studyTimeLeft = 50;

   
    studyInterval = setInterval(() => {
        if (studyTimeLeft > 0) {
            studyTimeLeft = studyTimeLeft - 1
            cnvrt(studyTimeLeft);
            addValue = 'study';
            // gif2.src = '/gif2.gif';
            
            disableSub();

        }

        else {
            clearInterval(studyInterval)
            
            isRunning = false;
            // videoWillPause();
            videoPause();
            songPause();
            disableSongSideBar();
            disableVideoSideBar();
           
            mtitle.innerText = `Study time over`

            // gif2.src = '/gif2.png';
        }
    }, 1000);
}

function brk() {
    clearInterval(breakInterval)
    clearInterval(studyInterval)
    clearInterval(longInterval)
    breakTimeLeft = chai;
    addValue = 'break';
    isRunning=true;
    videoPlay();
    songPlay();
    disableSongSideBar();
    disableVideoSideBar();
  
  

    breakInterval = setInterval(() => {
        if (breakTimeLeft > 0) {
            breakTimeLeft = breakTimeLeft - 1;

            cnvrt(breakTimeLeft);
           
          

            disableSub();

        }

        else {
            clearInterval(breakInterval)
            isRunning = false;
             mtitle.innerText = `Break time over`
             videoPause();
             songPause();
            disableSongSideBar();
            disableVideoSideBar();
            // audio.pause();
            // videoWillPause();
         
            
        }

    }, 1000);
}

function longBreak() {
    clearInterval(breakInterval)
    clearInterval(studyInterval)
    clearInterval(longInterval)
    longTimeLeft = khana;
    addValue = 'long';
    isRunning=true;
    videoPlay();
    songPlay();
    disableSongSideBar();
    disableVideoSideBar();
   
 

    longInterval = setInterval(() => {
        if (longTimeLeft > 0) {
            longTimeLeft = longTimeLeft - 1;

            cnvrt(longTimeLeft);
           
           
           
            disableSub();
        }

        else {
            clearInterval(breakInterval)
            mtitle.innerText = `Break time over`
            isRunning = false;
            videoPause();
            songPause();
            disableSongSideBar();
            disableVideoSideBar();
            // videoWillPause();
        }

    }, 1000);
}


studyTitle.addEventListener('click', () => {
    
   studyFinal();
   
})


brkTitle.addEventListener('click', () => {
  breakFinal();
})

LongTitle.addEventListener('click', () => {
    longFinal();
})


function addtime(timeLft) {

   
    timeLft =  timeLft+60;
    if (addValue == "study") {
       studyTimeLeft = timeLft;
      
    } else if (addValue == 'break') {
        breakTimeLeft = timeLft;
    }
    else if (addValue == 'long') {
       longTimeLeft = timeLft;
    }
}

function subTime(timeLft) {
    timeLft =  timeLft-60;
    if (addValue == "study") {
       studyTimeLeft = timeLft;
      
    } else if (addValue == 'break') {
        breakTimeLeft = timeLft;
    }
    else if (addValue == 'long') {
       longTimeLeft = timeLft;
    }
}

function addmoretime(timeLft) {
    timeLft = timeLft + 600;
    if (addValue == "study") {
       studyTimeLeft = timeLft;
      
    } else if (addValue == 'break') {
        breakTimeLeft = timeLft;
    }
    else if (addValue == 'long') {
       longTimeLeft = timeLft;
    }
}

addSome.addEventListener('click', () => { 
   addSomeFinal();
})

sub.addEventListener('click', () => {
    subFinal();
    console.log('sub clicked');
    
})

add.addEventListener('click', () => {
    addFinal();
})

 volumeBar.addEventListener('input',()=>{
    song.volume = volumeBar.value/100;
    
 })

 console.log(song.volume);

function disableSub() {
    if (addValue=="study" && studyTimeLeft < 60)
    {
        sub.classList.add('disabled');
    } 
    else if(addValue=="study" && studyTimeLeft >= 60)
    {
        sub.classList.remove('disabled');
    }

    else if(addValue=="break" && breakTimeLeft < 60)
    {
        sub.classList.add('disabled');
    }

    else if(addValue=="break" && breakTimeLeft >= 60)
    {
        sub.classList.remove('disabled');
    }

    else if(addValue=="long" && longTimeLeft < 60)
    {
        sub.classList.add('disabled');
    }

    else if(addValue=="long" && longTimeLeft >= 60)
    {
        sub.classList.remove('disabled');
    }

}

leftNav.addEventListener('mouseenter', () => {
    // leftNav.classList.add('hidden');

    gsap.to(leftNav, {
        duration: 0.5,
        width: 220,
        ease: "power1.inOut",
        //    delay:-1.5,
    })


})

leftNav.addEventListener('mouseleave', () => {
    gsap.to(leftNav, {
        duration: 0.5,
        width: 64,
        ease: "power1.inOut",
        //    delay:-1.5,
    })


})


function rightSideBgWidth() {
    if (sideBarBgVisible==false) {
   
       wid=200;
       sideBarBgVisible=true;
       

   } else if(sideBarBgVisible==true){
       wid=0;
       sideBarBgVisible=false;

   }


   gsap.to('#rightbg',{
       duration:.5,
       width:wid,
       ease: "power1.inOut"
   })

}

function rightSideWidth() {
    if (sideBarVisible==false) {
    
       wid=200;
       sideBarVisible=true;
       

   } else if(sideBarVisible==true){
       wid=0;
       sideBarVisible=false;

   }


   gsap.to('#right',{
       duration:.5,
       width:wid,
       ease: "power1.inOut"
   })


}


timerbtn.addEventListener('click', () => {
    
    if (sideBarBgVisible==true) {
        rightSideBgWidth();
        setTimeout(() => {
            rightSideWidth(); 
        }, 500);

    } 

    else if(SideBarSongVisible==true){
        rightSideSongWidth();
        setTimeout(() => {
            rightSideWidth(); 
        }, 500);
    }

    else{
        rightSideWidth();
    }
})

bgbtn.addEventListener('click', () => {

    if (sideBarVisible==true) {
        rightSideWidth();
        setTimeout(() => {
            rightSideBgWidth();
        }, 500);
        
    }

    else if(SideBarSongVisible==true){
        rightSideSongWidth();
        setTimeout(() => {
            rightSideBgWidth(); 
        }, 500);
    }
    else {
        rightSideBgWidth();
    }
})





function formatTime(input) {
const time = parseInt(input*60);
const hours = Math.floor(time / 60);
const minutes = time % 60;

const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
return formattedTime;
}

function saveTime() {
const inputElement = document.getElementById('studyInputVal');
const inputValue = inputElement.value;

const formattedTime = formatTime(inputValue);
//   inputElement.value='';
inputElement.value = formattedTime;
console.log(typeof (inputElement.value));

}

save.addEventListener('click',()=>{

    if (studyInputVal.value!='') {
         let newStudyTimeLeft = +studyInputVal.value;

    book=newStudyTimeLeft*60;
    studyTimeLeft=book;
    cnvrt(studyTimeLeft);
    }
   

    // saveTime();

    if (breakInputVal.value!='') {
        let newBreakTimeLeft = +breakInputVal.value;

    chai=newBreakTimeLeft*60;
    breakTimeLeft=chai;
    }
    

    // saveTime();

if (longInputVal.value!='') {
 let newLongTimeLeft = +longInputVal.value;

    khana=newLongTimeLeft*60;
    longTimeLeft=khana;

}
   
})

close.addEventListener('click',()=>{
    sideBarVisible=true;

    rightSideWidth();


})

videobackground.addEventListener('play', () => {
    if (document.pictureInPictureElement === videobackground) {
      document.exitPictureInPicture();
    }
  });



  function videoPlay() {
    if (isRunning) {
         videobackground.play(); 
    }
  }

  function videoPause() {
    videobackground.pause();
  }

  function videoStop() {
    videobackground.pause();
    videobackground.currentTime=0;
  }

  function songPlay() {
    if (isRunning) {
         song.play();
    }
   
  }

  function songPause() {
    song.pause();
    pauseRotate();
  }

  function songStop() {
    // song.play();
    song.pause();
    song.currentTime=0;
  }
//   function videoPlay() {
//     setInterval(() => {
//         if (isRunning==true) {
//            videoWillPlay();
          
//         } 
//         else if(isRunning==false)
//             {
//             videoWillPause();
//             song.pause();
          
//         }
//     }, 1000);
//   }

// function videoWillPlay() {
    
//     const promiseOne = new Promise((res,rej)=>{
//     res();
//     rej();
//     })
    
//     promiseOne.then(()=>{
//         videobackground.canplaythrough==true;
//         song.canplaythrough==true;
//     }).then(()=>{
//         videobackground.play();
//         song.play();
//     }).catch((e)=>{
//         console.log(e);
        
//     })
// }


// function videoWillPause() {
    
//     const promiseTwo = new Promise((res,rej)=>{
//     res();
//     rej();
//     })
    
//     promiseTwo.then(()=>{
//         videobackground.playing==true;
//         song.playing==true;
//     }).then(()=>{
//         videobackground.pause();
//         song.pause();
//     }).catch((e)=>{
//         console.log(e);
        
//     })
// }

pauseVideo.addEventListener('click',()=>{
    if (!videobackground.paused) {
        videoPause();
        document.querySelector('#pauseVideo img').src='play.png'
      } else if(videobackground.paused){
        videoPlay();
        document.querySelector('#pauseVideo img').src='pause.png'
      }
})

stopVideo.addEventListener('click',()=>{
    videoStop();
    document.querySelector('#pauseVideo img').src='play.png'
})

function studyFinal() {
    studyTimer();

if (bgValue=='bg0') {
   bg0Study();
} 

else if(bgValue=='bg1') 
    {
       bg1Study();
}
else if(bgValue=='bg2')
    {
        bg2Study();
       
}
else if(bgValue=='bg3')
    {
        bg3Study();        
}
else if(bgValue=='bg4')
    {
        bg4Study();
}
else if(bgValue=='bg5'){
    bg5Study();
}
}

function breakFinal() {
    brk();
    if (bgValue=='bg0') 
        {
           bg0Break();
    } 
     
    else if(bgValue=='bg1') 
        {
            bg1Break();
        
    }
    else if(bgValue=='bg2')
        {
            bg2Break();
    }
    else if(bgValue=='bg3')
        {
            bg3Break();
    }
    else if(bgValue=='bg4'){
       bg4Break();
    }
    else if(bgValue=='bg5')
        {
           bg5Break();
    }
}

function longFinal() {
    longBreak();
if (bgValue=='bg0') 
    {
        bg0Long();
} 
 

else if(bgValue=='bg1') 
    {
        bg1Long();
    
}
else if(bgValue=='bg2')
    {
        bg2Long();
}
else if(bgValue=='bg3')
    {
        bg3Long();
}
else if(bgValue=='bg4')
    {
        bg4Long();
}
else if(bgValue=='bg5')
    {
        bg5Long();
}
}

function addFinal() {
    if (addValue == "study") {
        //  studyTimeLeft = studyTimeLeft - 60;
        
        
        addtime(studyTimeLeft);
      
    } else if (addValue == 'break') {
        // breakTimeLeft = breakTimeLeft - 60;
        addtime(breakTimeLeft);
    }
    else if (addValue == 'long') {
        // longTimeLeft = longTimeLeft - 60;
        addtime(longTimeLeft);
    }
}

function subFinal() {
    if (addValue == "study") {
        //  studyTimeLeft = studyTimeLeft + 60;
        subTime(studyTimeLeft);

    } else if (addValue == 'break') {
        // breakTimeLeft = breakTimeLeft + 60;
        subTime(breakTimeLeft);
    }
    else if (addValue == 'long') {
        // longTimeLeft = longTimeLeft + 60;
        subTime(longTimeLeft);
    }
}

function addSomeFinal(params) {
    if (addValue == "study") {
        //  studyTimeLeft = studyTimeLeft + 600;

        addmoretime(studyTimeLeft);


      
    } else if (addValue == 'break') {
        // breakTimeLeft = breakTimeLeft + 600;
        addmoretime(breakTimeLeft);
       
    }
    else if (addValue == 'long') {
        // longTimeLeft = longTimeLeft + 600;
        addmoretime(longTimeLeft);
    }
}