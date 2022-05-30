//Decalration agrument function
let sayHello = function(){
    console.log(hello)
}

//Decalration generic function
function greeting(sayHello,name){
    return `${sayHello}, ${name}`
}
//Callback variabla
let message = greeting(sayHello,"Chananthon")
console.log(message)