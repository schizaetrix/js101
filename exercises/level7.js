// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"


function finalFunction (a) {
    var emptyArray = []
    for (emptyArray.length == 0; emptyArray.length < a;) {
        emptyArray.push("string");
    }
    return emptyArray;
}