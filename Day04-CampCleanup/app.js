require('../util/time')
require('../util/fsPull')

const array = singleDepth("input.txt").map((x) => x.trim().split("-").join(",").split(",").map(Number));

function part1() {
    let i = 0;
    let contained = 0;
    let check = false;
    for (i; i < array.length; i++) {
        if (array[i][0] >= array[i][2] && array[i][1] <= array[i][3] && check === false) { check = true; contained++ }
        if (array[i][2] >= array[i][0] && array[i][3] <= array[i][1] && check === false) { check = true; contained++ }
        check = false;
    }
    return contained;
}

function part2() {
    let i = 0;
    let contained = 0;
    let check = false;
    for (i; i < array.length; i++) {
        if (array[i][0] >= array[i][2] && array[i][0] <= array[i][3] && check === false) { check = true; contained++ }
        if (array[i][2] >= array[i][0] && array[i][2] <= array[i][1] && check === false) { check = true; contained++ }
        check = false;
    }
    return contained;
}

timeScript(part1(), 1)
timeScript(part2(), 2)
