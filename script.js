var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var checkwalk=0;
var timeoutID;
var modus=0;
var loose=0;
var timeomat=1000;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    console.log("jump");
    setTimeout(function(){
        character.classList.remove("animate");
        
    },600);
}
function kauer(){
    if(character.classList == "animatekauer"){return}
    document.getElementById("merkel").src="Game_Data/Merkel_small_A.png";
   
    character.classList.add("animatekauer");
    console.log("kauer");
    setTimeout(function(){
        character.classList.remove("animatekauer");
        
    },600);
}

function slide(){
    if(character.classList == "animateslide"){return}
    document.getElementById("merkel").src="Game_Data/Merkel_slide_A.png";

    
    character.classList.add("animateslide");
    console.log("slide");
    setTimeout(function(){
        character.classList.remove("animateslide");
        
    },600);
}

var spawn = setInterval(function() {
    ticker=Math.floor(Math.random() * 6);
    timeomat=Math.floor(Math.random()*1000+300);
    
    console.log(timeomat);

if (ticker>=3){

    block.style.top="110px";
    block.style.animation = "block 1s infinite linear";
   
}   
else{    
    block.style.top="90px";
    block.style.animation = "block 1s infinite linear";
    
   
    
}
},1000);




var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20&& characterTop>130){
        
        loose++;
        document.getElementById("looseSpan").innerHTML = loose
        counter=0;
        
        
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/11100);
    }
}, 100);

var walka = setInterval(function() {
    if(character.classList == "animateslide"){
        if (checkwalk!=1){
            checkwalk=1
            document.getElementById("merkel").src="Game_Data/Merkel_slide_A.png";
        }
        else{
            checkwalk=0;
            document.getElementById("merkel").src="Game_Data/Merkel_slide_B.png";}
            return;


    }
    
    ;
    if(character.classList == "animatekauer"){
        if (checkwalk!=1){
            checkwalk=1
            document.getElementById("merkel").src="Game_Data/Merkel_small_A.png";
        }
        else{
            checkwalk=0;
            document.getElementById("merkel").src="Game_Data/Merkel_small_B.png";}

    }
    else{
        if (checkwalk!=1){
            checkwalk=1
            document.getElementById("merkel").src="Game_Data/Merkel_A.png";
        }
        else{
            checkwalk=0;
            document.getElementById("merkel").src="Game_Data/Merkel_B.png";}
    }}, 180);

    



