// code your solution here
function saturdayFun (haveFun = "roller-skate") {
    return `This Saturday, I want to ${haveFun}!`
}

const mondayWork = function (monday = "go to the office") {
    return `This Monday, I will ${monday}.`
}

// const wrapAdjective = function (outer = '*') {
//     return function (parameter = "special"){
//     return `You are ${parameter}!`
//     }
// }

function wrapAdjective (flair = "*") {
    return function inner (param = 'special'){
    return `You are ${flair}${param}${flair}!`
    }
}