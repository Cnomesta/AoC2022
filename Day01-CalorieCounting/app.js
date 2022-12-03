require('../util/time')
const fs = require('fs');

const array = fs
    .readFileSync('input.txt', {
        encoding: 'utf-8'
    })
    .replace(/\r/g, "")
    .split("\n\n")
    .filter((x) => Boolean(x))
    .map((x) =>
        x
            .trim()
            .split("\n")
            .map((y) => parseInt(y))
    );

function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}

function part1() {
    let elves = [];
    let i = 0;
    for (i in array) {
        let cals = array[i].reduce((a, b) => a + b, 0);
        elves.push(cals);
        i++;
    }
    return Math.max(...elves);
}

function part2() {
    let elves = [];
    let i = 0;
    let j = 0;
    let topthree = 0;
    for (i in array) {
        let cals = array[i].reduce((a, b) => a + b, 0);
        elves.push(cals);
        i++;
    }
    do {
        topthree = topthree + Math.max(...elves)
        elves = arrayRemove(elves, Math.max(...elves))
        j++
    } while (j < 3);
    return topthree;
}

timeScript(part1(), "1")
timeScript(part2(), "2")