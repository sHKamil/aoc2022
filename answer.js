const fs = require('fs');
const file = 'input.txt';

const m_rock = "X";
const m_paper = "Y";
const m_scissors = "Z";
const h_rock = "A";
const h_paper = "B";
const h_scissors = "C";

const raw_strategy_guide = fs.readFileSync(file,'utf-8').replace(/\r/g, "").split("\n"); // Get data from the file, replace hidden characters and split string every new line

function cleanUp(raw_strategy){
    const strategy_guide = [];
    raw_strategy.forEach((element, index) => {
        strategy_guide[index]=element.replace(" ", ""); // Remove spaces between letters in an array
    });
    return strategy_guide;
}

function pointsCounting(strategy){
    let points = 0;
    strategy.forEach(element => { // Counting points for each round
        if(element[1]==m_rock)points=points+1;
        if(element[1]==m_paper)points=points+2;
        if(element[1]==m_scissors)points=points+3;
        if((element[0]==h_rock && element[1]==m_paper) || (element[0]==h_paper && element[1]==m_scissors) || (element[0]==h_scissors && element[1]==m_rock)){
            points=points+6;
        }else if((element[0]==h_rock && element[1]==m_rock) || (element[0]==h_paper && element[1]==m_paper) || (element[0]==h_scissors && element[1]==m_scissors)){
            points=points+3;
        }
    });
    return points;
}

function decryption(strategy){
    const decrypt = [];
    strategy.forEach((element, index) => { // Replace win/lose/draw (XYZ) to paper/rock/scissors marks (ABC)
        if(element[1]=="Y") decrypt[index] = element.replace("Y",element[0]);
        if(element[1]=="X"){
            if(element[0]==h_rock) decrypt[index] = element.replace("X",h_scissors);
            if(element[0]==h_paper) decrypt[index] = element.replace("X",h_rock);
            if(element[0]==h_scissors) decrypt[index] = element.replace("X",h_paper);
        }
        if(element[1]=="Z"){
            if(element[0]==h_rock) decrypt[index] = element.replace("Z",h_paper);
            if(element[0]==h_paper) decrypt[index] = element.replace("Z",h_scissors);
            if(element[0]==h_scissors) decrypt[index] = element.replace("Z",h_rock);
        }  
    });
    return decrypt;
}

function decryptedStrategyCounting(strategy, decrypted){
    let points = 0;
    strategy.forEach(element => { // Counting points for wins and draws
        if(element[1]=="Y") points = points + 3;
        if(element[1]=="Z") points = points + 6;
    });
    decrypted.forEach(element => { // Counting points for using paper, rock and scissors
        if(element[1]==h_rock)points=points+1;
        if(element[1]==h_paper)points=points+2;
        if(element[1]==h_scissors)points=points+3;
    });
    return points;
}

console.log("Part 1: "+pointsCounting(cleanUp(raw_strategy_guide)));
console.log("Part 2: "+decryptedStrategyCounting(cleanUp(raw_strategy_guide),decryption(cleanUp(raw_strategy_guide))));
