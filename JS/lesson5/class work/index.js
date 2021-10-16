// function helloWorld(){
//     console.log("helloWorld");
// }
// helloWorld();



// const isUserAuth=true
// function checkAccess(){
// if(isUserAuth){
//     console.log("Доступ есть");
// }else{
//     console.log("Доступа нет");
// }
// }
// checkAccess();

// function writeMessage(){
//     if(isUserAuth){
//     console.log("Привет пользователь");
// }else{
//     console.log("Привет гость");
// }
// }
// writeMessage();


// function sum(a,b){
// console.log(a+b);
// }
// sum(1,0);
// sum(16,4);

// function sum(a,b){
//     console.log(b);
//     console.log(a+b);
//     }
//     sum(1,0);
//     sum(16);


// function sum(a,b=0){
//     console.log(b);
//     console.log(a+b);
//     }
//     sum(1,4);
//     sum(16);

// function getName(name){
//     console.log("до return");
// return name;
// console.log("после return");
// }
// const userName=getName("Ivan");
// console.log(userName);


// function getName(name){
// return;
// }
// const userName=getName("Ivan");
// console.log(userName);

// let name="Alex";
// function getName(userName){
//     return userName;
// }
// const nameUserOne=getName(name)
// console.log(nameUserOne);

// name="ivan";
// const nameUserTwo=getName(name);
// console.log(nameUserTwo);

// let name="alex"
// console.log(name,"1");
// function sayHi(userName){
//     userName="petr";
//     console.log(userName,"function");
// }
// sayHi(name);
// console.log(name,"2");

// let a=0;
// let b=0;

// function sum(){
//     a+=1;
//     b+=1;
//     console.log(a+b);
// }
// sum();
// sum();

// Чистая функция

// function sum(){
//     const a=0;
//     const b=1;
//     console.log(a+b);
// }
// sum();
// sum();
// sum();






// function exp(a,b=1){
//     console.log(a**b);
// }
// exp(2,2);
// exp(2,8);
// exp(20);

// const sayName=function(name){
//     return name;
// }
// console.log("Alex");


// const getName=function(){
//     console.log('Alex');
// }
// const getUserinfo=function(callBack){
//     console.log("USER INFO");
//     callBack();
// };

// getUserinfo(getName);


// test();
// function test(){
//     console.log('test');
// }
// test2();
// const test2=function(){
//     console.log("test2");
// }
// 
// const test2=function(){
//     console.log("test2");
// };
// test2();


// const myFirstArrowFunc=()=>console.log("!1");
// const test1=(name)=>name;
// console.log(test1("Alex")); 


// const test1=(name)=>{
//     return name;
// }
//  console.log(test1("Alex")); 


// const getLog=()=>console.log("LOG");
// getLog();



// const repeatStr=(str, n)=>{
//     for(let i=0; i<n;i+=1){
//         console.log(str);
//     }
// };
// repeatStr("Ivan",3);

let lett = "п";
let bukva = (let) => if(lett === "а" ||lett === "у" ||lett === "о" ||lett === "и" ||lett === "э" ||lett === "ы" || lett === "я" ){
   return  true;
 }else{ return false;
} 
}



