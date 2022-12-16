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
    const type = [];
    let first = [];
    let second = [];
    array.forEach((element, index) => {
        first[index] = element.slice(0, element.length/2);
        second[index] = element.slice(element.length/2);
    });
    let temp = "";
    let types = 0;
    let keys = []; 
    for (let f_i = 0; f_i < first.length; f_i++) {
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

console.log(pointsCounting(typeCheck(rucksacks)));