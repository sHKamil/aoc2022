const fs = require('fs');
const file = 'input.txt';
const list_of_calories = fs.readFileSync(file,'utf-8').replace(/\r/g, "").split("\n") // Get data from the file, replace hidden characters and split string every new line

function cleanUp(array){
    var answ = [];
    var temp = 0;
    
    array.forEach(element => {
        if(element!=""){
            temp=temp+Number(element); // Counting how many calories each elf carries
        }else if(element==""){
            answ.push(temp);
            temp=0;
        }
    });

    return answ;
}

function sort(array){
    array=array.sort(function(a, b) { // Sort an array, highest to lowest
        return b - a;
      });
    return array;
}

function task2(array){
    return array[0]+array[1]+array[3];
}

console.log("Part 1: "+sort(cleanUp(list_of_calories))[0]); // Task 1
console.log("Part 2: "+task2(sort(cleanUp(list_of_calories)))); // Task 2