const repeatString = function(string, number) {
    let repeatedString = "";
    if (number > 0) {
        for (let index = 0; index < number; index++) {
             repeatedString += string;
        }
    } else if (number < 0) {
        return "ERROR";
    }
    return repeatedString;
    
};

// Do not edit below this line
module.exports = repeatString;
