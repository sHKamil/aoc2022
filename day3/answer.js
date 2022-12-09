const fs = require('fs');
const file = 'input.txt';
const rucksacks = fs.readFileSync(file,'utf-8').replace(/\r/g, "").split("\n"); // Get data from the file, replace hidden characters and split string every new line

const dictionary = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
    "A": 27,
    "B": 28,
    "C": 29,
    "D": 30,
    "E": 31,
    "F": 32,
    "G": 33,
    "H": 34,
    "I": 35,
    "J": 36,
    "K": 37,
    "L": 38,
    "M": 39,
    "N": 40,
    "O": 41,
    "P": 42,
    "Q": 43,
    "R": 44,
    "S": 45,
    "T": 46,
    "U": 47,
    "V": 48,
    "W": 49,
    "X": 50,
    "Y": 51,
    "Z": 52
    };

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
    array.forEach(element => {
        points = points + dictionary[element];
    });
    return points;
}

console.log(pointsCounting(typeCheck(rucksacks)));