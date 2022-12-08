const fs = require('fs');
const file = 'input.txt';

const m_rock = "X";
const m_paper = "Y";
const m_scissors = "Z";
const h_rock = "A";
const h_paper = "B";
const h_scissors = "C";
var points = 0;

const raw_strategy_guide = fs.readFileSync(file,'utf-8').replace(/\r/g, "").split("\n") // Get data from the file, replace hidden characters and split string every new line

function cleanUp(raw_strategy){
    const strategy_guide = [];
    raw_strategy.forEach((element, index) => {
        strategy_guide[index]=element.replace(" ", ""); // Remove spaces between letters in an array
    });
    return strategy_guide;
}

function pointsCounting(strategy){
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



console.log("Part 1: "+pointsCounting(cleanUp(raw_strategy_guide)));
