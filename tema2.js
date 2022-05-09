//problema 1
console.log("problema 1")
function number(nr){
    if(nr%2!=0){
        return 2*nr
    }
    else{
        return nr-2
    }
}
console.log(number(7))

//problema 2
console.log("problema 2")
function prime(nr){
    if(nr==1){
        return false
    }
    if(nr==2){
        return true
    }
    for(let i=2; i<nr; i++){
        if(nr%i==0){
            return false
        }
    }
    return true
}
let savePrimes = []
const findPrimes = array => {
    for(let i=0; i<array.length; i++){
        if (prime(array[i])){
            savePrimes.push(array[i])
        }
    }
    return savePrimes
}
console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//problema3
console.log("problema 3")
const my_function = array => {
    let str_array = []
    array.forEach((element, index) => {
        if (typeof element == "string"){
            str_array.push(element)
        }
    });
    return str_array
}
console.log(my_function(["1", "salut", 2, 6, true, "true"]))


//problema4
console.log("problema 4")
const suma = string => {
    let sum=0
    for(let i=0; i<string.length; i++){
            if(string[i]%2!==0){
                sum+=parseInt(string[i])  
            }  
            continue     
    }
    return sum
}
console.log(suma('1523'))

//problema 5
console.log("problema 5")
const ingredient = "zahar"
switch(ingredient){
    case "zahar":
        console.log("O sa prepar niste gogosi.")
        break
    case "sare":
        console.log("O sa fac o salata.")
        break
    case "faina":
        console.log("O sa prepar niste gogosi.")
        break
    case "oregano":
        console.log("O sa fac cartofi la cuptor.")
        break
    case "crema de branza":
        console.log("O sa fac cheesecake.")
        break
    default:
        console.log("Nu stiu ce sa fac cu acest ingredient.")
}