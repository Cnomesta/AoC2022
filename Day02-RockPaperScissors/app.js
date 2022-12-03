require('../util/time')
const fs = require('fs');

const array = fs
    .readFileSync('input.txt', {
        encoding: 'utf-8'
    })
    .replace(/\r/g, "")
    .split("\n")
    .filter((x) => Boolean(x))
    .map((x) =>
        x
            .trim()
            .split(" ")
    );

function part1() {
    //ArockYpaper           2 + 6 = 8
    //ArockXrock            1 + 3 = 4
    //ArockZscissors        3 + 0 = 3
    //BpaperYpaper          2 + 3 = 5
    //BpaperXrock           1 + 0 = 1
    //BpaperZscissors       3 + 6 = 9
    //CscissorsYpaper       2 + 0 = 2
    //CscissorsXrock        1 + 6 = 7
    //CscissorsZscissors    3 + 3 = 6
    let round = 0;
    let score = 0;
    for (round in array) {
        switch (array[round][0]) {
            case "A":
                switch (array[round][1]) {
                    case "Y":
                        score = score + 8;
                        round++
                        break;
                    case "X":
                        score = score + 4;
                        round++
                        break;
                    case "Z":
                        score = score + 3;
                        round++
                        break;
                }
                break;
            case "B":
                switch (array[round][1]) {
                    case "Y":
                        score = score + 5;
                        round++
                        break;
                    case "X":
                        score = score + 1;
                        round++
                        break;
                    case "Z":
                        score = score + 9;
                        round++
                        break;
                }
                break;
            case "C":
                switch (array[round][1]) {
                    case "Y":
                        score = score + 2;
                        round++
                        break;
                    case "X":
                        score = score + 7;
                        round++
                        break;
                    case "Z":
                        score = score + 6;
                        round++
                        break;
                }
                break;
        }
    }
    return score
}

function part2() {
    //ArockYdraw            1 + 3 = 4
    //ArockXlose            3 + 0 = 3
    //ArockZwin             2 + 6 = 8
    //BpaperYdraw           2 + 3 = 5
    //BpaperXlose           1 + 0 = 1
    //BpaperZwin            3 + 6 = 9
    //CscissorsYdraw        3 + 3 = 6
    //CscissorsXlose        2 + 0 = 2
    //CscissorsZwin         1 + 6 = 7
    let round = 0;
    let score = 0;
    for (round in array) {
        switch (array[round][0]) {
            case "A":
                switch (array[round][1]) {
                    case "Y":
                        score = score + 4;
                        round++
                        break;
                    case "X":
                        score = score + 3;
                        round++
                        break;
                    case "Z":
                        score = score + 8;
                        round++
                        break;
                }
                break;
            case "B":
                switch (array[round][1]) {
                    case "Y":
                        score = score + 5;
                        round++
                        break;
                    case "X":
                        score = score + 1;
                        round++
                        break;
                    case "Z":
                        score = score + 9;
                        round++
                        break;
                }
                break;
            case "C":
                switch (array[round][1]) {
                    case "Y":
                        score = score + 6;
                        round++
                        break;
                    case "X":
                        score = score + 2;
                        round++
                        break;
                    case "Z":
                        score = score + 7;
                        round++
                        break;
                }
                break;
        }
    }
    return score
}

timeScript(part1(), 1)
timeScript(part2(), 2)

