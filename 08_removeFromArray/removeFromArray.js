const removeFromArray = function(array) {

    const args = Array.prototype.slice.call(arguments, 1);
    const filteredArray = array.filter((word) => !args.includes(word));
    return filteredArray;

};

// Do not edit below this line
module.exports = removeFromArray;
