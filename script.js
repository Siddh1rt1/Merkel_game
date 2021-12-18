var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var checkwalk=0;
var timeoutID;
var modus=0;
var loose=0;
var timeomat=1000;
var checkblock=0;

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
    ticker=Math.random();
    timeomat=Math.floor(Math.random()*1000+800)/1000;
    console.log(timeomat);
  

    if (ticker>0.5){
        fly.style.animation = "";
        console.log("blockbeginn");
        block.style.animation = "block "+timeomat+"s  linear";
    }
    else{ 
        block.style.animation ="";
        console.log("flybeginn");
        fly.style.animation = "block "+timeomat+"s  linear";}

},2000);


var changeblock = setInterval(function(){
    if (checkwalk!=1){
        checkwalk=1
        document.getElementById("blockimg").src="Game_Data/Block_1.png";
    }
    else{
        checkwalk=0;
        document.getElementById("blockimg").src="Game_Data/Block_2.png";}
    },400)


var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    let chartop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blocktop=parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    let charleft=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let flyleft=parseInt(window.getComputedStyle(fly).getPropertyValue("left"));
 
    if ((flyleft<10) && (flyleft >-5) && (character.classList !== "animatekauer")) {
  
    loose=loose+1
    document.getElementById("looseSpan").innerHTML = loose
    counter=0;
}else{
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter/11100);
};
   

    if((chartop>=90)&& (charleft-blockleft)>-10){
        
        loose=loose+1
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

    



