let turntitle = document.getElementById("turntitle");
let dicenumber = document.getElementById("dicenumber");
let rollbutton = document.getElementById("rollbutton");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
turn = "green";
greencurrentplace =0;
bluecurrentplace =0;
const buttonaudio = new Audio();
buttonaudio.src = "rpg-dice-rolling-95182.mp3";
const winaudio = new Audio();
winaudio.src = "winharpsichord-39642.mp3";


// board form
let container =document.getElementById("container");
let round = 0;


for(let s=0; s<=5 ; s++){
    if(s != 0){
    let section = document.createElement("section");
   section.classList.add("reversedrows");
   section.id = "section"+s.toString()
 for(let d = 1; d<=10 ; d++){

    let div1 =document.createElement("div");
    section.appendChild(div1);

    if(round == 0){
   
        div1.innerHTML=d+10;
       div1.id =(d+10).toString()
     
     }else if(round ==1){
        div1.innerHTML=d+30;
       div1.id =(d+30).toString()
       
     }else if(round ==2){
        div1.innerHTML=d+50;
       div1.id =(d+50).toString()
       
     }else if(round ==3){
        div1.innerHTML=d+70;
       div1.id =(d+70).toString()
       
     }else if(round ==4){
        div1.innerHTML=d+90;
       div1.id =(d+90).toString()
       
     }




    }
   container.appendChild(section)
   round +=1
}

 for(let i= 1; i<=10; i++){
if(round ==5 ){break}
let divs = document.createElement("div");
container.appendChild(divs)

if(round == 1){
divs.innerHTML = i + 20
divs.id = (i+20).toString()
}
else if(round == 2){
    divs.innerHTML = i + 40
    divs.id = (i+40).toString()

}else if(round == 3){
    divs.innerHTML = i + 60
    divs.id = (i+60).toString()

}else if(round == 4){
    divs.innerHTML = i + 80
    divs.id = (i+80).toString()

}
else if(round ==0){
    divs.innerHTML = i 
    divs.id = i.toString()
}
}
}
// board style 
for(let i = 1; i<=100; i++){

let divs = document.getElementById(i)
if (i % 2 == 0){

divs.style.backgroundColor = "white"

}

}

//game functions

function gamefunction(){
    
    let dicenum = Math.floor(Math.random()*6 +1);   // num between 1:6
    dicenumber.innerHTML = dicenum;
    
if(turn === "green" ){
    greencurrentplace += dicenum;
   
if(turn === "green" && greencurrentplace <= 100){
    let greenmoveplace = document.getElementById(greencurrentplace);
greenmoveplace.appendChild(player1);
greenladdermove();

player1.style.position = "absolute";
player1.style.width = "50%";
player1.style.height = "50%";
turntitle.innerText = "Blue's Turn";
turntitle.style.color = "darkblue";
turn = "blue";
};
if(greencurrentplace == 100){
    winaudio.play();
    turntitle.innerText = "Green is Winner";
    turntitle.style.color = "darkgreen";
    rollbutton.style.display = "none"
}
if( greencurrentplace > 100){
greencurrentplace -= dicenum;
turntitle.innerText = "Blue's Turn";
turntitle.style.color = "darkblue";
turn = "blue";

};
}
    else{
    bluecurrentplace += dicenum;
     if(turn === "blue" && bluecurrentplace <= 100 ){
     bluemoveplace = document.getElementById(bluecurrentplace);
bluemoveplace.appendChild(player2);
blueladdermove();

player2.style.position = "absolute";
player2.style.width = "60%";
player2.style.height = "60%";

turntitle.innerHTML = "Green's Turn";
turntitle.style.color = "darkgreen";
turn = "green";
    };
    if(bluecurrentplace == 100){
        winaudio.play();
        turntitle.innerText = "Blue is Winner";
        turntitle.style.color = "darkblue";
        rollbutton.style.display = "none"
    }
    if( bluecurrentplace > 100){
bluecurrentplace -= dicenum;
turntitle.innerHTML = "Green's Turn";
turntitle.style.color = "darkgreen";
turn = "green";
};

};

};

//ladders and snakes functions

function greenladdermove(){

    if(player1.parentElement.id=="1"){
let newplace1 = document.getElementById("38");
newplace1.appendChild(player1);
greencurrentplace = 38;
 }
 if(player1.parentElement.id=="4"){
    let newplace2 = document.getElementById("14");
    newplace2.appendChild(player1);
    greencurrentplace = 14;
     }
     if(player1.parentElement.id=="8"){
        let newplace3 = document.getElementById("30");
        newplace3.appendChild(player1);
        greencurrentplace = 30;
         }
         if(player1.parentElement.id=="21"){
            let newplace4 = document.getElementById("42");
            newplace4.appendChild(player1);
            greencurrentplace = 42;
             }
             if(player1.parentElement.id=="28"){
                let newplace5 = document.getElementById("76");
                newplace5.appendChild(player1);
                greencurrentplace = 76;
                 }
                 if(player1.parentElement.id=="50"){
                    let newplace6 = document.getElementById("67");
                    newplace6.appendChild(player1);
                    greencurrentplace = 67;
                     }
                     if(player1.parentElement.id=="71"){
                        let newplace7 = document.getElementById("92");
                        newplace7.appendChild(player1);
                        greencurrentplace = 92;
                         }
                         if(player1.parentElement.id=="80"){
                            let newplace8 = document.getElementById("99");
                            newplace8.appendChild(player1);
                            greencurrentplace = 99;
                             }
        if(player1.parentElement.id=="32"){
          let newplace9 = document.getElementById("10");
          newplace9.appendChild(player1);
          greencurrentplace = 10;
   }
   if(player1.parentElement.id=="36"){
    let newplace10 = document.getElementById("6");
    newplace10.appendChild(player1);
    greencurrentplace = 6;
     }
     if(player1.parentElement.id=="62"){
        let newplace11 = document.getElementById("18");
        newplace11.appendChild(player1);
        greencurrentplace = 18;
         }
         if(player1.parentElement.id=="48"){
            let newplace12 = document.getElementById("26");
            newplace12.appendChild(player1);
            greencurrentplace = 26;
             }
             if(player1.parentElement.id=="88"){
                let newplace13 = document.getElementById("24");
                newplace13.appendChild(player1);
                greencurrentplace = 24;
                 }
                 if(player1.parentElement.id=="95"){
                    let newplace14 = document.getElementById("56");
                    newplace14.appendChild(player1);
                    greencurrentplace = 56;
                     }
                     if(player1.parentElement.id=="97"){
                        let newplace15 = document.getElementById("78");
                        newplace15.appendChild(player1);
                        greencurrentplace = 78;
                         }
                        };


// blue player2

function blueladdermove(){
if(bluemoveplace.id=="1"){
    let newplace1 = document.getElementById("38");
    newplace1.appendChild(player2);
    bluecurrentplace = 38;
     }
     if(bluemoveplace.id=="4"){
        let newplace2 = document.getElementById("14");
        newplace2.appendChild(player2);
        bluecurrentplace = 14;
         }
         if(bluemoveplace.id=="8"){
            let newplace3 = document.getElementById("30");
            newplace3.appendChild(player2);
            bluecurrentplace = 30;
             }
             if(bluemoveplace.id=="21"){
                let newplace4 = document.getElementById("42");
                newplace4.appendChild(player2);
                bluecurrentplace = 42;
                 }
                 if(bluemoveplace.id=="28"){
                    let newplace5 = document.getElementById("76");
                    newplace5.appendChild(player2);
                    bluecurrentplace = 76;
                     }
                     if(bluemoveplace.id=="50"){
                        let newplace6 = document.getElementById("67");
                        newplace6.appendChild(player2);
                        bluecurrentplace = 67;
                         }
                         if(bluemoveplace.id=="71"){
                            let newplace7 = document.getElementById("92");
                            newplace7.appendChild(player2);
                            bluecurrentplace = 92;
                             }
                             if(bluemoveplace.id=="80"){
                                let newplace8 = document.getElementById("99");
                                newplace8.appendChild(player2);
                                bluecurrentplace = 99;
                                 }
            if(bluemoveplace.id=="32"){
              let newplace9 = document.getElementById("10");
              newplace9.appendChild(player2);
              bluecurrentplace = 10;
       }
       if(bluemoveplace.id=="36"){
        let newplace10 = document.getElementById("6");
        newplace10.appendChild(player2);
        bluecurrentplace = 6;
         }
         if(bluemoveplace.id=="62"){
            let newplace11 = document.getElementById("18");
            newplace11.appendChild(player2);
            bluecurrentplace = 18;
             }
             if(bluemoveplace.id=="48"){
                let newplace12 = document.getElementById("26");
                newplace12.appendChild(player2);
                bluecurrentplace = 26;
                 }
                 if(bluemoveplace.id=="88"){
                    let newplace13 = document.getElementById("24");
                    newplace13.appendChild(player2);
                    bluecurrentplace = 24;
                     }
                     if(bluemoveplace.id=="95"){
                        let newplace14 = document.getElementById("56");
                        newplace14.appendChild(player2);
                        bluecurrentplace = 56;
                         }
                         if(bluemoveplace.id=="97"){
                            let newplace15 = document.getElementById("78");
                            newplace15.appendChild(player2);
                            bluecurrentplace = 78;
                             }
                            };
                         




