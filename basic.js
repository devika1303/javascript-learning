// // creating variable
// let studentname = "devika";
// let age ="21";
// let course = "ECE";
// let college = "QISCET";
// let skills = "HTML, CSS ,JS";

// console.log(studentname);
// console.log(age);
// console.log(course);
// console.log(college);
// console.log(skills);

// // creating different vaiable names
// let firstName = "Devika";
// console.log(firstName);

// let city = "Delhi";
// console.log(city);

// const country = "India";
// console.log(country);

// let age = 21;
// console.log(age);

// let isStudent = true;
// console.log(isStudent);

// const isOnline = false;
// console.log(isOnline);

// let score = 50;
// score = 80;
// console.log(score);

// let course = "HTML";
// course = "JavaScript";
// console.log(course);

// const year = 2026;
// console.log(year);

// let marks = 85;
// console.log(marks);

// // CONDITIONAL STATEMENTS
// //grade caluclator
// let marks = 88;
// if(marks>=90){
//     console.log(" A Grade");
// }
// else if(marks>=75){
//     console.log("B Grade");
// }
// else if(marks >=50){
//     console.log("C Grade");
// }
// else{
//     console.log("Fail");
// }


// //voting eligibility
// let age = 20;
// age = 15
// if(age>=18){
//     console.log("Eligible To Vote");
// }
// else{
//     console.log("Not eligible To Vote")
// }

// // ATM balance checker
// let balance =5000;
// let withdrawlAmount = 2000;
// if(balance>= withdrawlAmount){
//     console.log("withdrawl successful")
// }
// else{
//     console.log("insufficient balance")
// }
// console.log("remaining balance =", balance-withdrawlAmount)

// // LOOPS

// //student names
// for(let i = 1;i <= 10;i++){
//     console.log("student", i)
// }
// // even numbers
// for(let i=2;i<=20;i+=2){
//     console.log(i)
// }
// //odd numbers
// for(let i=1;i<=20;i+=2){
//     console.log(i)
// }
// //reverse counting
// for(i=10;i>=1;i--){
//     console.log(i)
// }

// // While loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// // DO WHILE
// let i = 10;
// do{
// console.log(i);
// i++;
// } while(i <= 20);

//BREAK STATEMENT
// for(let i=1;i<=10;i++){
//     if(i===5){
//         break;
//     }
      
// console.log(i);
// }

// //CONTINUE STATEMENT
// for(let i=1;i<=10;i++){
//     if(i===4){
//         continue;
//     }
      
// console.log(i);
// }

// // NESTED LOOPS
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         console.log(i, j);
//     }
// }

// //tables
// let number = 5;
// for(let i=1;i<=10;i++){
//     console.log(number*i)
// }

// //STAR PATTERN
// debugger
// for(let i=1;i<=5;i++){
//     console.log("*".repeat(i))
// }

//NUMBER PATTERN
let row = "";
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        row = row + j;
    }
    console.log(row);
}

//REVERSE STAR PATTERN
for(let i=5;i>=1;i--){
    console.log("*".repeat(i))
}

//MULTIPLICATION TABLE GENERATOR
let number = 5;
for(let i = 1; i <= 10; i++){
console.log(`${number} x ${i} = ${number * i}`);
}

//EVEN NUMBERS FROM 1-100
for(i=2;i<=100;i+=2){
    console.log(i)
}