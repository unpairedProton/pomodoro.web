function bg0Study() {
    titleBlueItalic(studyTitle,brkTitle,LongTitle);
    TimerFat(blueLightClr,blueClr); 
    Btns(blueGradientClr,darkBlueClr,"roboto",def,true); 
    rightText("white",blueGradientClr,"roboto","italic","motaFont");


    leftText("white","roboto","italic");
    
    sideBorder(true);
}

function bg0Break() {
    titlePinkItalic(brkTitle,studyTitle,LongTitle);
    TimerFat(pinkLightClr,pinkClr); 

    Btns(pinkClr,darkBlueClr,'roboto',def,true); 
    rightText("white",pinkClr,"roboto","normal",'motaFont');

    leftText("white","roboto","italic");
    sideBorder(true);
}

function bg0Long() {
    titleGreenItalic(LongTitle,studyTitle,brkTitle);
        TimerFat(greenLightClr,greenClr); 
    
        Btns(greenClr,darkBlueClr,'roboto',def,true); 
        rightText("white",greenClr,"roboto","normal",'motaFont');
    
        leftText("white","roboto","italic");
        sideBorder(true);

}

function bg1Study() {
    titleWhiteNormal(studyTitle,brkTitle,LongTitle);
        TimerWoodyWhite(); 
        Btns('white',darkBlueClr,"roboto",def,false); 
        rightText("white",greenNaturalClr,"roboto","normal",woodyFont);
    
    
        leftText("white","roboto","normal");
        
        sideBorder(false);
} 

function bg1Break() {
    titleWhiteNormal(brkTitle,studyTitle,LongTitle);
    TimerWoodyWhite(); 
    Btns('white',darkBlueClr,"roboto",def,false); 
    rightText("white",greenNaturalClr,"roboto","normal",woodyFont);


    leftText("white","roboto","normal");
    
    sideBorder(false);
} 

function bg1Long() {
    titleWhiteNormal(LongTitle,studyTitle,brkTitle);
            TimerWoodyWhite(); 
            Btns('white',darkBlueClr,"roboto",def,false); 
            rightText("white",greenNaturalClr,"roboto","normal",woodyFont);
        
        
            leftText("white","roboto","normal");
            
            sideBorder(false);
}

function bg2Study() {
    titleBlueItalic(studyTitle,brkTitle,LongTitle);
    TimerFat(blueLightClr,blueClr); 
    Btns(blueGradientClr,darkBlueClr,"roboto",def,true); 
    rightText("white",blueGradientClr,"roboto","normal","motaFont");


    leftText("white","roboto","italic");
    
    sideBorder(true);
} 

function bg2Break() {
    titlePinkItalic(brkTitle,studyTitle,LongTitle);
    TimerFat(pinkLightClr,pinkClr); 

    Btns(pinkClr,darkBlueClr,'roboto',def,true); 
    rightText("white",pinkClr,"roboto","normal",'motaFont');

    leftText("white","roboto","italic");
    sideBorder(true);
} 

function bg2Long() {
    titleGreenItalic(LongTitle,studyTitle,brkTitle);
            TimerFat(greenLightClr,greenClr); 
        
            Btns(greenClr,darkBlueClr,'roboto',def,true); 
            rightText("white",greenClr,"roboto","normal",'motaFont');
        
            leftText("white","roboto","italic");
            sideBorder(true);
}

function bg3Study() {
    TitleGlitch(studyTitle,brkTitle,LongTitle);
        TimerGame(); 
        Btns('white',darkBlueClr,"arcade",'16px',true); 
        
        rightText("white",'white',"roboto","italic","gameFont");
    
    
        leftText("white","roboto","italic");
        
        sideBorder(false);
}

function bg3Break() {
    TitleGlitch(brkTitle,studyTitle,LongTitle);
    TimerGame(); 
    Btns('white',darkBlueClr,"arcade",'16px',true); 
    rightText("white",'white',"roboto","italic","gameFont");


    leftText("white","roboto","italic");
    
    sideBorder(false);
}

function bg3Long() {
    TitleGlitch(LongTitle,studyTitle,brkTitle);
        TimerGame(); 
        Btns('white',darkBlueClr,"arcade",'16px',true); 
        rightText("white",'white',"roboto","italic","gameFont");
    
    
        leftText("white","roboto","italic");
        
        sideBorder(false);
}

function bg4Study() {
    bg1Study();
}

function bg4Break() {
    bg1Break();
}

function bg4Long() {
    bg1Long();
}

function bg5Study() {
    titleRoadNormal(studyTitle,brkTitle,LongTitle);
        TimerRoad(); 
        Btns('white',darkBlueClr,"playsmallfont",def,false); 
        rightText("white",greenNaturalClr,"playsmallfont","normal","playlargefont");
    
    
        leftText("white","playsmallfont","normal");
        
        sideBorder(false);
}

function bg5Break() {
    titleRoadNormal(brkTitle,studyTitle,LongTitle);
    TimerRoad(); 

    Btns('white',darkBlueClr,'playsmallfont',def,false); 
    rightText("white",greenNaturalClr,"playsmallfont","normal",'playlargefont');

    leftText("white","playsmallfont","normal");
    sideBorder(false);

}

function bg5Long() {
    titleRoadNormal(LongTitle,brkTitle,studyTitle);
        TimerRoad(); 
    

        Btns('white',darkBlueClr,'playsmallfont',false); 
        rightText("white",greenNaturalClr,"playsmallfont","normal",'playlargefont');
    
        leftText("white","playsmallfont","normal");
        sideBorder(false);
}
