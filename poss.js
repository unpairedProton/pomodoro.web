function titleBlueItalic(on,off1,off2) {
    on.style.borderBottom = '5px solid var(--studyClr)';
    on.style.textShadow = " 0 0 15px var(--studyClr)";
    on.style.color = 'rgb(135,239,228)';
    on.style.webkitTextStrokeWidth = '0px'
    on.style.fontStyle='italic';
    on.style.fontFamily='roboto'

    off1.style.webkitTextStrokeWidth = "1px";

    off1.style.webkitTextStrokeColor = "var(--studyClr)";

    off1.style.color = "transparent";

    off1.style.borderBottom = '0px';

    off1.style.textShadow = 'none';
    off1.style.fontStyle='italic';
    off1.style.fontFamily='roboto'

    
    off2.style.webkitTextStrokeWidth = "1px";

    off2.style.webkitTextStrokeColor = "var(--studyClr)";

    off2.style.color = "transparent";

    off2.style.borderBottom = '0px';

    off2.style.textShadow = 'none';
    off2.style.fontStyle='italic'
    off2.style.fontFamily='roboto'

}

function titlePinkItalic(on,off1,off2) {
    on.style.borderBottom = '5px solid var(--brkLightClr)';

    on.style.textShadow = " 0 0 15px var(--breakClr)";

    on.style.color = "var(--brkLightClr)";

    on.style.webkitTextStrokeWidth = '0px'
    on.style.fontFamily='roboto';
    on.style.fontStyle='italic';

    off1.style.webkitTextStrokeWidth = "1px";
    off1.style.webkitTextStrokeColor = "var(--breakClr)";
    off1.style.color = "transparent";
    off1.style.borderBottom = '0px';
    off1.style.textShadow = 'none';
    off1.style.fontFamily='roboto';
    off1.style.fontStyle='italic';

    
    off2.style.webkitTextStrokeWidth = "1px";
    off2.style.webkitTextStrokeColor = "var(--breakClr)";
    off2.style.color = "transparent";
    off2.style.borderBottom = '0px';
    off2.style.textShadow = 'none';
    off2.style.fontFamily='roboto';
    off2.style.fontStyle='italic';
}

function titleGreenItalic(on,off1,off2) {
    on.style.borderBottom = '5px solid var(--longBreakLightClr)';

    on.style.textShadow = " 0 0 15px var(--longBreakClr)";


    on.style.color = 'var(--longBreakLightClr)';

    on.style.webkitTextStrokeWidth = '0px'

    on.style.fontFamily='roboto';

    on.style.fontStyle='italic';


    off1.style.webkitTextStrokeWidth = "1px";
    off1.style.webkitTextStrokeColor = "var(--longBreakClr)";
    off1.style.color = "transparent";
    off1.style.borderBottom = '0px';
    off1.style.textShadow = 'none';
    off1.style.fontFamily='roboto';
    off1.style.fontStyle='italic';

    off2.style.webkitTextStrokeWidth = "1px";
    off2.style.webkitTextStrokeColor = "var(--longBreakClr)";
    off2.style.color = "transparent";
    off2.style.borderBottom = '0px';
    off2.style.textShadow = 'none';
    off2.style.fontFamily='roboto';
    off2.style.fontStyle='italic';
}


function TimerFat(clr,ShadowClr) {
    timerID.style.fontFamily='motaFont';
    timer.style.textShadow = `0 0 15px ${ShadowClr}`;
    timer.style.color = clr;
} 


function sideBorder(shadow) {

    if (shadow==true) {
        leftNav.style.boxShadow='0 0 1px 1px var(--studyClr)'

    right.style.boxShadow='0 0 1px 1px var(--studyClr)'

    rightbg.style.boxShadow='0 0 1px 1px var(--studyClr)'
    } else {

        leftNav.style.boxShadow='none';

    right.style.boxShadow='none';

    rightbg.style.boxShadow='none';
        
    }
    
    
}

// bg1

function titleWhiteNormal(on,off1,off2) {
    
    on.style.borderBottom = '5px solid white';
    
    on.style.color = "white";
    
    on.style.webkitTextStrokeWidth = '0px';

    on.style.fontStyle='normal';

    on.style.textShadow='none';

    on.style.fontFamily='roboto'

    
    off1.style.webkitTextStrokeWidth = "1px";

    off1.style.fontStyle='normal';

    off1.style.webkitTextStrokeColor = "white";

    off1.style.color = "transparent";

    off1.style.borderBottom = '0px';

    off1.style.textShadow = 'none';

    off1.style.fontFamily='roboto'

    
    off2.style.webkitTextStrokeWidth = "1px";

    off2.style.fontStyle='normal';

    off2.style.webkitTextStrokeColor = "white";

    off2.style.color = "transparent";

    off2.style.borderBottom = '0px';

    off2.style.textShadow = 'none';

    off2.style.fontFamily='roboto';

}




function Btns(bgClr,clr,font,fontsize,shadow) {
    add.style.background = bgClr;
    addSome.style.background = bgClr;
    sub.style.background = bgClr;

    addSome.style.fontFamily=font;
    
    addSome.style.fontSize=fontsize;

    modify.style.color=clr;

    if (shadow==true) 
    {

        add.style.boxShadow = "#252934 1px 1px 20px 1px, #35ccbc -1px -1px 5px 2px";
        addSome.style.boxShadow = "#252934 1px 1px 20px 1px, #35ccbc -1px -1px 5px 2px";
        sub.style.boxShadow = "#252934 1px 1px 20px 1px, #35ccbc -1px -1px 5px 2px";        
    }

    else
    {
        add.style.boxShadow = "none";
    addSome.style.boxShadow = "none";
    sub.style.boxShadow = "none";

       
    }   
}



function TimerWoodyWhite() {
    timer.style.color = 'white';
    timerID.style.fontFamily=woodyFont;
    timerID.style.textShadow='none';
} 

function leftText(clr,font,style) {
    timerbtn.style.fontStyle=style
    timerbtn.style.fontFamily=font
    timerbtn.style.color=clr

    bgbtn.style.fontStyle=style
    bgbtn.style.fontFamily=font
    bgbtn.style.color=clr
}

function rightText(clr,ValbgClr,font,fontstyle,Valfont) {
    studyInputText.style.fontFamily=font
    studyInputText.style.color=clr
    studyInputText.style.fontStyle=fontstyle;
    studyInputVal.style.fontFamily=Valfont;
    studyInputVal.style.background=ValbgClr;

    breakInputText.style.fontFamily=font
    breakInputText.style.color=clr
    breakInputText.style.fontStyle=fontstyle;
    breakInputVal.style.fontFamily=Valfont
    breakInputVal.style.background=ValbgClr;

    longInputText.style.fontFamily=font
    longInputText.style.color=clr
    longInputText.style.fontStyle=fontstyle;
    longInputVal.style.fontFamily=Valfont
    longInputVal.style.background=ValbgClr;
    
    
}

//bg2


function TitleGlitch(on,off1,off2) {
    on.style.color='black';
    on.style.textShadow='-2px -2px 0 #f00,  2px 2px 0 #00f,-1px 1px 0 #0f0';
    on.style.webkitTextStrokeWidth='0'
    on.style.borderBottom='0'
    on.style.fontStyle='italic';
    on.style.fontFamily='roboto'

    off1.style.webkitTextStrokeColor='black';
    off1.style.webkitTextStrokeWidth='1px';
    off1.style.color='transparent';
    off1.style.textShadow='none';
    off1.style.borderBottom='0'
    off1.style.fontStyle='italic';
    off1.style.fontFamily='roboto';


    off2.style.webkitTextStrokeColor='black';
    off2.style.webkitTextStrokeWidth='1px';
    off2.style.color='transparent';
    off2.style.textShadow='none';
    off2.style.borderBottom='0'
    off2.style.fontStyle='italic';
    off2.style.fontFamily='roboto';
}



function TimerGame() {
    timerID.style.color='white';
    timerID.style.fontFamily='gameFont';
    timerID.style.textShadow='-2px -2px 0 #f00,  2px 2px 0 #00f,-1px 1px 0 #0f0';
} 



//bg3
function titleRoadNormal(on,off1,off2) {
    
    // on.style.borderBottom = '5px solid white';
    
    on.style.color = "white";
    
    on.style.webkitTextStrokeWidth = '0px';

    on.style.webkitTextStrokeColor = 'black';

    on.style.fontStyle='normal';
    
    on.style.fontFamily='playsmallfont'

    on.style.textShadow='none';

    on.style.borderBottom='none';



    
    off1.style.webkitTextStrokeWidth = "1px";

    off1.style.fontStyle='normal';

    off1.style.webkitTextStrokeColor = "white";

    off1.style.color = "transparent";

    off1.style.fontFamily='playsmallfont'

    off1.style.borderBottom = '0px';

    off1.style.textShadow = 'none';

    off1.style.borderBottom='none';

    
    off2.style.webkitTextStrokeWidth = "1px";

    off2.style.fontStyle='normal';

    off2.style.webkitTextStrokeColor = "white";

    off2.style.fontFamily='playsmallfont';

    off2.style.color = "transparent";

    off2.style.borderBottom = '0px';

    off2.style.textShadow = 'none';

    off2.style.borderBottom='none';

}



function TimerRoad() {
    timerID.style.color='white'
    timerID.style.fontFamily='playlargefont'
    timerID.style.textShadow='none';
}
