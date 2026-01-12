const removeFromArray = function(array, filterWord, filterWord2) {

 return array.filter((word) => word != filterWord).filter((word) => word != filterWord2);

};

// Do not edit below this line
module.exports = removeFromArray;
