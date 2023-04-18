
var array = [null, 123, undefined, null, "qwerty",34, 65, undefined, null,null, 43, "aerg", "pksik", null,'uioo'];
var stringArray = [null,undefined,null,undefined,null,null,null];
var numberArray = [123,34,65,43];
var string1Array = ["qwerty", "aerg","pksik", 'uioo'];
function compareNumbers (a,b) {
    return a - b;
}

console.log(array);
console.log(stringArray);
stringArray.join();
stringArray.sort();

console.log(numberArray);
numberArray.join();
numberArray.sort();
numberArray.sort(compareNumbers);


console.log(string1Array);
string1Array.join();
string1Array.sort ();




