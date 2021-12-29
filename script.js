
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var checkwalk=0;
var timeoutID;
var modus=0;
var loose=0;
var timeomat=1000;
var checkblock=0;
var carnumber=0;
randompercent=75;

function jump(){
    if (character.style.animation.includes('jump')) {
        console.log("hello");
    }
    character.style.animation += "jump 1s";
    console.log("jump");
    setTimeout(function(){
        character.style.animation = character.style.animation.replace("1s ease 0s 1 normal none running jump", "");
    },1200);
}

function kauer(){
    if(character.classList == "animatekauer"){return}
    document.getElementById("merkel").src="Game_Data/Merkel_small_A.png";
   
    character.classList.add("animatekauer");
    console.log("kauer");
    setTimeout(function(){
        character.classList.remove("animatekauer");
        console.log("kauer2");
    },800);
}

function slide(){
    console.log("slid2e");
    if(character.style.animation == "slide 1s linear"){return}
    console.log("slideafter");
    document.getElementById("merkel").src="Game_Data/Merkel_slide_A.png";
    console.log("slideafter2");
    if (character.style.animation=="jump"){
        character.style.animation += ", slide 1s linear";}
    character.style.animation += "slide 1s linear";

    console.log("slide");
    setTimeout(function(){
        console.log("slide");
         character.style.animation = character.style.animation.replace("1s linear 0s 1 normal none running slide", "");
        
    },2000);
}



var spawn = setInterval(function() {
    if (blocknumber=1)
    ticker=Math.random();

    if (ticker>0.5){
        fly.style.animation = "";
        block.style.animation = "block 1s linear";
    }
    else{ 
        block.style.animation ="";
        fly.style.animation = "block 1s linear";}

},1000);


var changeblock = setInterval(function(){
    if (checkwalk!=1){
        checkwalk=1
        document.getElementById("blockimg").src="Game_Data/Block_1.png";
        document.getElementById("blockimg2").src="Game_Data/Block_1.png";
    }
    else{
        checkwalk=0;
        document.getElementById("blockimg").src="Game_Data/Block_2.png";}
        document.getElementById("blockimg2").src="Game_Data/Block_2.png";
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



let last = 0;
let num = 0;
let speed = 0.25;
var walksetter=0;
function main(timeStamp) {
  let timeInSecond = timeStamp / 1000;

  if (timeInSecond - last >= speed) {
    last = timeInSecond;
    console.log(++num);
    console.log("log_main");
    if (walksetter==0){
    document.getElementById("merkel").src="Game_Data/Merkel_A.png";
    console.log("merkel_a");
    walksetter=1;}
    else{document.getElementById("merkel").src="Game_Data/Merkel_B.png";
    console.log("merkel_b");
    walksetter=0;}
  }

  requestAnimationFrame(main);
}

main();



function setwalkanimation(){
    console.log("start");
    if (checkwalk!=1){
        checkwalk=1;
      
        document.getElementById("merkel").src="Game_Data/Merkel_A.png";
    }
    else{
        checkwalk=0;
        document.getElementById("merkel").src="Game_Data/Merkel_B.png";} ;
}
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

    }}, 180);




