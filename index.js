function saturdayFun (activity = 'roller-skate') {
    return(`This Saturday, I want to ${activity}!`)
}
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(result = '*') {
    return function(value2 = 'special') {
        return `You are ${result}${value2}${result}!`
    }
}
wrapAdjective('||')('a dedicated programmer')