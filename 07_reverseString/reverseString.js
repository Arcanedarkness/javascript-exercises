// const reverseString = function(reverseThis) {
//     let reversed = "";

//     for (let i = 0; i < reverseThis.length; i++) {
//         let charToCopy = reverseThis.length-(i+1);
//         reversed += reverseThis[charToCopy];  
//     }

//     return reversed;
// };

const reverseString = function(reverseThis) {
    
    return reverseThis.split("").reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;
