require('../util/time')
const fs = require('fs');

const array = fs
    .readFileSync("input.txt", { encoding: 'utf-8' })
    .replace(/\r/g, "")
    .split("")

function parts(lenght) {
    let subrutine = [];
    let check = false;
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < lenght && check === false; j++) {
            if (subrutine.includes(array[i + j])) {
                check = true;
                subrutine.push(array[i + j]);
            } else {
                subrutine.push(array[i + j]);
            }
        }
        if (check === false) { res = i + lenght; break; };
        check = false;
        subrutine = [];
    }
    return res;
}

timeScript(parts(4), 1)
timeScript(parts(14), 2)