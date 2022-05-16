// code your solution here

function saturdayFun(event = "roller-skate") {
    return `This Saturday, I want to ${event}!`;
}

const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(symbol) {
    return function(name = "special"){
        return `You are ${symbol}${name}${symbol}!`;
    }
    
}