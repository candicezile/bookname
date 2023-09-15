function removeIds(arr,a){
    // used splice method to delete the index
    arr.splice(a ,1);
    //this will return the array
    return arr;

}

// an array 
let arr = [
    {
        id: 1,
        Name: 'Candice'
    },
    {
        id: 2,
        Name: 'Zile'
    },
    {
        id: 3,
        Name: 'Vuyo'
    },
    {
        id: 4,
        Name: 'Thelma'
    },
    {
        id: 5,
        Name: 'Sherry'
    },
]
//the console log button
console.log(removeIds(arr,0));



function names(array){
    //numbers to be excluded from the array
    let numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];
    let result = "";
     //assign values(condition) 
    for(let i = 0; i < array.length; i++)
    { //used if statement to not include numbers to array
        if(!numbers.includes(array[i])){
            //assignment operator, result += arr[i] is equivalent to result = result + arr[i]
            result += array[i];
        }
    }
return result;
}
// an array
let array = "[Moral1, Gift3, Candice3, Zile4]";
console.log(names(array));
