const fs = require('fs');
const file = 'input.txt';
const pairList = fs.readFileSync(file,'utf-8').replace(/\r/g, "").split("\n"); // Get data from the file, replace hidden characters and split string every new line

function dividePair(array) { // Divide pair in to two range of numbers
    let single =[];
    let conv =[];
    let groups = [];

    array.forEach(element => {
        single.push(element.split(",")); // Split every pair
    });

    for (let i = 0; i < single.length; i++) {
        single[i].forEach(elements => {
                conv.push(elements.split("-")); // Remove "-" character from between numbers
        });
    }

    for (let i = 0; i < conv.length; i += 2) groups.push(conv.slice(i, i + 2)); // Create group of numbers (range)

    return groups
}

function pointsCounting(array) {
    let points_p1 = 0;
    let points_p2 = 0;
    const points = [];
    let first_a = 0;
    let second_a = 0;
    let first_b = 0;
    let second_b = 0;

    array.forEach(element=> {
        first_b = parseInt(element[0][1]);
        first_a = parseInt(element[0][0]);
        second_a = parseInt(element[1][0]);
        second_b = parseInt(element[1][1]);

        if(first_a<=second_a && first_b >= second_b){ // Part 1
            points_p1++;
        }else if(first_a>=second_a && first_b <= second_b){
            points_p1++;
        }

        if(first_b >= second_a && first_a<=second_a) {
            points_p2++;
        }else if(first_a <= second_b && second_a<=first_b) {
            points_p2++;
        }
    });

    points.push(points_p1);
    points.push(points_p2);
    
    return points;
}

console.log("Part 1: "+pointsCounting(dividePair(pairList))[0]);
console.log("Part 2: "+pointsCounting(dividePair(pairList))[1]);
