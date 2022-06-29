
function receivesAFunction(spy) {
    spy("Is this thing on?")
}

function spy(string) {
    return string
}

function returnsANamedFunction(micTest) {
    return function micTest() {
        return "Test One Two"
    }
}

const returnsAnAnonymousFunction = (thing) => {
    return function() {
        return "Levels sound good from here!"
    }
}