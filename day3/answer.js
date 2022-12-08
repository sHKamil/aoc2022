const fs = require('fs');
const file = 'input.txt';
const rucksacks = fs.readFileSync(file,'utf-8').replace(/\r/g, "").split("\n"); // Get data from the file, replace hidden characters and split string every new line

function typeCheck(array){
    const type = [];
    let first = [];
    let second = [];
    array.forEach((element, index) => {
        first[index] = element.slice(0, element.length/2);
        second[index] = element.slice(element.length/2);
    });
    // console.log(first);
    // console.log(second);
    // type[0] = first.find(element => element == "p")
    // console.log(first);
    // console.log(second);
    // first.forEach((f_element, index) => {
    //     var i = 0;
    //     second.forEach(s_element => {

    //         if(f_element[f_element.indexOf(s_element[i])]!=undefined){
    //             type[index]=f_element[f_element.indexOf(s_element[i])];
    //         }
    //         i++;
    //     });
    // });
    // console.log(type);
    for (let f_i = 0; f_i < first.length; f_i++) {
        for (let fs_i = 0; fs_i < first[f_i].length; fs_i++) {
            console.log(first[f_i][fs_i]);
            
        }
    }
}

typeCheck(rucksacks);