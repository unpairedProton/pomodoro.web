document.body.addEventListener('keydown',(event)=>{
    if (event.key=='s') {
        studyFinal();
    } else if(event.key=='b'){
        breakFinal();
    } else if(event.key=='l'){
        longFinal();
    }
    
    // else if(event.key=='0'){
    //     bg0Final();
    // }

    // else if(event.key=='1'){
    //     bg1Final();
    // }

    // else if(event.key=='2'){
    //     bg2Final();
    // }

    // else if(event.key=='3'){
    //     bg3Final();
    // }

    // else if(event.key=='4'){
    //     bg4Final();
    // }

    // else if(event.key=='5'){
    //     bg5Final();
    // }

    else if(event.key=='+'){
        addFinal();
    }

    else if(event.key=='-'){
        subFinal();
    }

    else if(event.key=='*'){
        addSomeFinal();
    }
})