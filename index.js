function shout(string) {
    return string.toUpperCase();
    }
function whisper(string) {
    return string.toLowerCase();
}   
function logShout(string){
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
    if (string.toLowerCase() === string) {
        return ("I can't hear you!")
    } else if (string.toUpperCase() === string) {
        return ("YES INDEED!")
    } else if (string === "I love you, Grandma.") {
        return ("I love you, too.")
    } 
}


sayHiToGrandma("hey i'm lowercase")
sayHiToGrandma("I love you, Grandma")
sayHiToGrandma("I'M ALL CAPS'")