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

(() => {
    const begin = new Date(); // starts timer
    const output = part1(); // "partX" part that is currently being timed
    console.log("PART-1:", "Out put info", output); //"output" === partX function return data (Befor c.log was used)
    const end = new Date() - begin; // ends timer
    console.info('Execution time: %dms', end); // time to finishing task
})();

(() => {
    const begin = new Date(); // starts timer
    const output = part2(); // "partX" part that is currently being timed
    console.log("PART-2:", "Out put info", output); //"output" === partX function return data (Befor c.log was used)
    const end = new Date() - begin; // ends timer
    console.info('Execution time: %dms', end); // time to finishing task
})();