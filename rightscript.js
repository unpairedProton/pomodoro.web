let bg0 = document.getElementById('bg0');
let bg1 = document.getElementById('bg1');
let bg2 = document.getElementById('bg2');
let bg3 = document.getElementById('bg3');
let bg4 = document.getElementById('bg4');
let bg5 = document.getElementById('bg5');

bg0.addEventListener('click',()=>{
   bg0Final();
   disableVideoBtns();

})

bg1.addEventListener('click',()=>{
   bg1Final();
   disableVideoBtns();
})

bg2.addEventListener('click',()=>{
   bg2Final();
   disableVideoBtns();
 })

 bg3.addEventListener('click',()=>{
   bg3Final();
   disableVideoBtns();
 })

 bg4.addEventListener('click',()=>{
   bg4Final();
   disableVideoBtns();
 })

 bg5.addEventListener('click',()=>{
   bg5Final();
   disableVideoBtns();
 })

function bg0Final() {
   videobackground.src='none';
   bgValue='bg0';
   if (addValue=='study') {
      bg0Study();
   } else if(addValue=='break'){
      bg0Break();
   }
   else if(addValue=='long'){
      bg0Long();
   }
}

function bg1Final() {
   // videoWillPause();
   videobackground.src = 'bg1.mp4'
   // videoWillPlay();
   videoPlay();
   bgValue='bg1';
   if (addValue=='study') {
      bg1Study();
   } else if(addValue=='break'){
      bg1Break();
   }
   else if(addValue=='long'){
      bg1Long();
   }
}

function bg2Final() {
   videobackground.src = 'bg2.mp4'
   
videoPlay();
   bgValue='bg2';
   if (addValue=='study') {
     bg2Study();
  } else if(addValue=='break'){
     bg2Break();
  }
  else if(addValue=='long'){
     bg2Long();
  }
}

function bg3Final() {
   videobackground.src = 'bg3.mp4'
   videoPlay();
   
      bgValue='bg3';

    if (addValue=='study') {
      bg3Study();
   } else if(addValue=='break'){
      bg3Break();
   }
   else if(addValue=='long'){
      bg3Long();
   }
}

function bg4Final() {
   videobackground.src = 'bg4.mp4'
   videoPlay();
    bgValue='bg4';

    if (addValue=='study') {
      bg4Study();
   } else if(addValue=='break'){
      bg4Break();
   }
   else if(addValue=='long'){
      bg4Long();
   }
}

function bg5Final() {
   videobackground.src = 'bg5.mp4';
   videoPlay();
    bgValue='bg5';

    if (addValue=='study') {
      bg5Study();
   } else if(addValue=='break'){
      bg5Break();
   }
   else if(addValue=='long'){
      bg5Long();
   }
}

 videobackground.addEventListener('click', (event) => {
  console.log(event.target);
  if (sideBarBgVisible==true) {
   rightSideBgWidth();
  }
 });

 