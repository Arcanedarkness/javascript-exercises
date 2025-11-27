const reverseString = function(reverseThis) {
    let reversed = "";

    for (let i = 0; i < reverseThis.length; i++) {
        let charToCopy = reverseThis.length-(i+1);
        reversed += reverseThis[charToCopy];  
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
