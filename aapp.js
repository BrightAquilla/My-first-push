const numbers = [43, 56, 33, 30]
const number2 = new Array(11,10,15,25)
//const fruit = [ ]
console.log( numbers);
console.log( number2);
//manipulation of array
let val
val = numbers[0]
val = numbers[2]
number[2] = 100
numbers.push [25]
console.log(val);

//val= numbers.indexOf(3)
//console.log(numbers);

//how to add to fonts
numbers.unshift(12)
numbers.pop()
numbers.shift()
numbers.splice(1, 2)
console.log(val)
//if statement and comparison operators
const id = 100
//tripple ===(if comparing both value and data type) if is a number and a string
if (id===100 ){
    console.log("correct");
}else{
    console.log( " incorrect");

}
//if (id!==100 )
{
    console.log("correct");
}
else{
    console.log( " incorrect");}
    const id = 1000
    if (id<=200){
        console.log("correct");
    } else{
        console.log("incorrect")
    }

    //nested if
    const color="red"
    if (color==="red") {
        console.log("color is red")
    }else if (color === "blue") {
        console.log("color is blue");
    } else {
        console.log("color is neither red nor blue")
    }
    //logical operators
    const pname = "Ada"
    const age = 20
    if (age > 0 && age <=12) {
        console.log(`${pname} is a child`);
        // console.log(pname is a child);

    }else if(age > 13&& age<=19){
        console.log(`${pname} is a teenager`);
    } else{
        console.log(`${pname} is an adult`);
    }

    if(age <16 || age>65){
        console.log(`${pname}cannot run in the race`);
    }else{
        console.log(`${pname}can run in the race`);
    }
    //FUNCTIONS- is a block of code that do familiar expreesions
    //function declaration
   // function greet(){
      // return("Hello")

   // }
    //how to call a function
    //console.log(greet());
    //functions with parameters
    function greet(firstName){
       // return"hello" + firstName +" " + lastName
        function greet(firstName="Cynthia", lastName="Mark")
        return Hello $(firstName) $(lastName);
    }]
    
    //console.log(greet("Cynthia", "Mark"));
    //function expression
    const square= function(number){
        return number * number
    }
    console.log(square(3))
    //loop-is an instruction that repeats until a speciffic condition is reached
    //1. for loop
    for(let i = 0; i<= 10; i++){
        console.log(i)
    }
    for(let i = 0; i< 10; i++){
        if (i ===2){
            console.log("2 is my favourite number");
            continue;

        }
        console.log(i)
    }
    //while loop
    let i=0;
    while(i < 10){
        console.log("number" + i);i++

    }
            //do while
    let i = 0
    do{

        console.log("number", +i); 
        i++
    } while(i < 10)
//loop through array
const cars= ["ford","kia"c,"toyota","honda"]
console.log(cars.length);

for (let i = 0; i < cars.lenth; i++){
    console.log(i);
}
//console.log(cars[1]);

cars.forEach(function(car, index){
    console.log(index + ":" + car);
})
//(DOM_document object model-progamati)