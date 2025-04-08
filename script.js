
console.log(30+20+10);
let job="Developer";
console.log(job);
console.log(typeof true);
console.log(typeof 10);
console.log(typeof 'Hello');
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});
 


let a=10+5;
a =+ 10;
console.log(a);

console.log(- 5 +(10 - 25));


operators
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;


let bmiMark = massMark / heightMark ** 2;
let bmiJohn=massJohn / heightJohn * heightJohn;

if (bmiMark > bmiJohn) {
    console.log("bmiMark");
}
else{
    console.log("bmiJohn");
    
}


//Strings and template literals
let name= "Hema";
let profession="Tester"
let birthYear=1999;
let currentYear=2025;

let detailsAboutMe=(" I'm " + name + " a "+ profession + " of" +  " "+(currentYear-birthYear)  + " years experienced person");
console.log(detailsAboutMe);


let detailsAboutMeNew=(`I'm ${name} a ${profession } of ${currentYear-birthYear} years experience person`);
console.log(detailsAboutMeNew);
 console.log("string with many \n\
    values combinend in \n\
    one sentense");


//flow control statements(decisions)
const age=18;
if (age>=18){
    console.log('I am eligible to vote');
    
}else{
    console.log('I am not eligible to vote');
    
} 


// //Type conversion and coercion


// let year ='2025' //conversion
// console.log(String(year) +'10' );
// console.log(Number(year)+10);

//coercion
console.log("20"+12+"123");
console.log('7'+3-3 + 2-'3'); //69

//falsy & truthy values  - 0,undefined,NAN,Null,'',-0

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(Infinity));
console.log(Boolean(""));
console.log(Boolean("Javscript"));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(-2));


let consider=-2;
    if(consider>0){
console.log("Year is 2025");
    }else{
        console.log("print undefined");
        
    }


//eqality operators '=='& '==='

let value='20'
if(value===20) console.log("print strict value");
if(value==20) console.log("print loosy value");

    
 const random=Number(prompt("Enter one number in the prompt"));
if (random===12){ console.log("the entered value is correct");}
else if (random===10) {console.log("the entered value is incorrect")}
else{
    console.log("invalid number is entered");
    
}


//challenge 3
 const scoreDophins=(96+108+89)/3;
 const scoreKoalas=(88+91+110)/3;
if (scoreDophins > scoreKoalas){
    console.log("Dolphins win the trophy 🐬");
    
}else if (scoreDophins === scoreKoalas){
    console.log("Both win the trophy");

}
else if(scoreDophins < scoreKoalas) {
console.log("Koalas win the trophy 🐨");
}   else{
    console.log("No one win the trophy");
    
}


console.log(scoreDophins,scoreKoalas);


//Boolean Logic 
// const isAdmin=true;
// const isPermission=false;
// const isAuthorised=true;

// console.log(isAdmin && isPermission || isAuthorised);
// console.log(!isAdmin);


// if(isAdmin &&  !isPermission){
//     console.log("Restrict the permison");
    
// }else if(isAdmin && isAuthorised){
//     console.log("only admin can login");
    
// }
// else{
//     console.log("allow any person to access");
    
// }




//switch statement

const statusCode =500;

// switch(statusCode){
//     case  200:
//     console.log("status Ok, Success");
//     break;  
//     case 400:
//     break;
//     console.log("error : bad request");
//     case 404:
//     console.log("error : not found");
//     break;
//     case 500:
//     console.log("error : internal server error");
//     break;
//     default :
//     console.log("unknown error");


// }


if (statusCode === 200){
console.log("status Ok, Success");
}
else if(statusCode === 400){
console.log("error : bad request");
}
else if(statusCode===404){
console.log("error : not found");
}
else if(statusCode===500){
console.log("error : internal server error");
}
else{
    console.log("unknown error");
}



// statements
// let x=10;
// if (x>5){
//     console.log("x is greater than 5");
// } 


// expressiom
// let a=5;
// "HELLO"+"WORLD"
// 5>7 


//Ternary/conditional operator 

let age=23;
age>=18 ? console.log("I will drink wine") : console.log("I will drink water");

//Practice
let x = 10;
x = x + 5;
console.log(x);

const y = 20;
// y +=  10;
console.log(y);




let temperature = 30;

temperature > 25 ? console.log("weather = Hot") : console.log( "weather = Cool")
