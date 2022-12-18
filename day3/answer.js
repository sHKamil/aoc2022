const fs = require('fs');
const file = 'input.txt';
const rucksacks = fs.readFileSync(file,'utf-8').replace(/\r/g, "").split("\n"); // Get data from the file, replace hidden characters and split string every new line

function makeAlphDictionary() {
    let dict = {};
    for (let i = 0; i < 26; i++) {
        dict [String.fromCharCode(i+65).toLowerCase()]=i+1;
    }
    for (let i = 0; i < 26; i++) {
        dict [String.fromCharCode(i+65)]=i+27;
    }
    return dict;
}

function typeCheck(array){
    let first = [];
    let second = [];
    array.forEach((element, index) => { // Divide in half each element
        first[index] = element.slice(0, element.length/2);
        second[index] = element.slice(element.length/2);
    });
    let temp = "";
    let types = 0;
    let keys = []; 
    for (let f_i = 0; f_i < first.length; f_i++) { // Compare divided parts to find repeating character
        temp =second[f_i];
        for (let fs_i = 0; fs_i < first[f_i].length; fs_i++) { 
            types = typeof(temp[temp.indexOf(first[f_i][fs_i])])
            if(types!=typeof(undefined)) {
                keys.push(temp[temp.indexOf(first[f_i][fs_i])]);
                temp = "";
            }
            
        }
    }
    return keys;
}

function pointsCounting(array){
    let points = 0;
    const dictionary = makeAlphDictionary();
    array.forEach(element => {
        points = points + dictionary[element];
    });
    return points;
}

function groupByThree(array){
    let groups = [];
    for (let i = 0; i < array.length; i += 3){
        groups.push(array.slice(i, i + 3));
    }
    return groups;
}

function findRepeatingChar(array) {
    let temp = [];
    let uniqueChars = [];
    const rucksackKey = [];
    for (let ai = 0; ai < array.length; ai++) {
        for (let i = 0; i < array[ai][1].length; i++) {
            if(array[ai][0].includes(array[ai][1][i])) {
                temp.push(array[ai][1][i]);
            }
        }
        uniqueChars = [...new Set(temp)]; // Remove duplicates
        for (let i = 0; i < uniqueChars.length; i++) { // Check if character occurs in string 3 too
            if(array[ai][2].includes(uniqueChars[i])) { // If yes put it in new array
                rucksackKey.push(uniqueChars[i]) 
            }
        }
        temp = [];
        uniqueChars = [];
    }
    return rucksackKey
}

console.log("Part 1: "+pointsCounting(typeCheck(rucksacks)));
console.log("Part 2: "+pointsCounting(findRepeatingChar(groupByThree(rucksacks))));
