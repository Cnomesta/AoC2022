require('../Suppplement/time')
const fs = require('fs');

const lines = fs
    .readFileSync('input.txt', {
        encoding: 'utf-8'
    })
    .replace(/\r/g, "")
    .split("\n")
    .filter((x) => Boolean(x));
//38 UPPERCASE / 96 LOWERCASE
function part1() {
    let first;
    let second;
    let i = 0;
    let j = 0;
    let k = 0;
    let total = 0;
    for (i in lines) {
        [first, second] = [lines[i].slice(0, lines[i].length / 2).split(""), lines[i].slice(lines[i].length / 2, lines[i].length).split("")]
        for (j in first) {
            do {
                for (k in second) {
                    if (first[j] == second[k]) {
                        switch (first[j] === second[k].toLowerCase()) {
                            case true:
                                k = 100;
                                total = total + first[j].charCodeAt();
                                total = total - 96;
                                break;
                            default:
                                k = 100;
                                total = total + first[j].charCodeAt();
                                total = total - 38;
                                break;
                        }
                    }
                    if (k >= 100) { break; }
                    k++;
                }
            } while (k < second.length);
            if (k >= 100) { break; }
            j++
        }
        i++;
    }
    return total;
}

function part2() {
    let first;
    let second;
    let third;
    let i = 0;
    let j = 1;
    let k = 2;
    let x = 0;
    let check = false;
    let total = 0;
    for (; i < lines.length;) {
        [first, second, third] = [lines[i].split(""), lines[j].split(""), lines[k].split("")]
        for (x in first) {
            if (second.includes(first[x])) {
                if (third.includes(first[x])) {
                    switch (first[x] === first[x].toLowerCase()) {
                        case true:
                            total = total + first[x].charCodeAt();
                            total = total - 96;
                            check = true;
                            break;
                        default:
                            total = total + first[x].charCodeAt();
                            total = total - 38;
                            check = true;
                            break;
                    }
                    if (check === true) { break; }
                }
                if (check === true) { break; }
            }
            check = false;
            x++;
        }
        i = i + 3;
        j = i + 1;
        k = i + 2;
    }
    return total;
}

timeScript(part1(), 1)
timeScript(part2(), 2)