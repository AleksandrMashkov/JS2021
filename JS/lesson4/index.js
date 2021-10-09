// if (true){
//     console.log("TRUE");

// }
// if(0){
//     console.log("FALSE");
// }
// console.log("start");
// const value =-5;
// if(value>0){
//     console.log("true");
//  } else{
//      console.log("false");
//  }
//  console.log("finish");



// console.log("start");
// const value =5;
// if(value>0){
//     console.log("true");
//  } else{
//      console.log("false");
//  }
//  console.log("finish");




// console.log("start");
// let value =0 ;
// if (value === 0) {
//  console.log(value,"=value");
// } else if(value>1){
// console.log(value,">1");
// } else if(value<-1){
//     console.log(value,"<-1");
// } else{
//     console.log(value);
// }
// console.log("finish");


// тернарный оператор
// const age=20;
// const result = age>=18 ? "Доступ разрешен":"Доступ запрещен";
// console.log(result);


//конструкция switch


// switch ("mary") {
//     case "ivan":
//         console.log("inan");
//         break;
//         case "alex":
//         console.log("alex");
//         break;
//         case "max":
//             console.log("max");
//             break;
//     default:
//         console.log("имя нет в списке");
// }
// console.log("finish");

// let a=7;
// let b=2;
// let c=30;

// console.log("a","b","c");
// if (a>b) {
//     a>c ? console.log("a"):console.log("c"); 
// } 
// else b>c? console.log("b"):console.log("c")
// }
 
//      console.log("закончили");

// let userRol="user";
// switch (userRol) {
//     case "admin": 
//     console.log("это информация о администраторе роль,дата,напиток");
//         break;
//         case "manager": 
//         console.log(" это информация о менеджере роль,дата,напиток");
//         break;
//         case "user": 
//         console.log("это информация о пользователе роль,дата,напиток");
//         break;
//     default:
//         console.log("пользователя нет в списке");
// }


//логическое или ||

// const a=100;
// const b=1;
// const result1 =a||b;
// console.log(result1);


// логическое и &&
// const a=20;
// const b=1;
// const result1 = a && b;
// console.log(result1);

// const a=1;
// const c=2;
// const c=3;
// if (a>b && a>c){
//     console.log(a);
// }else if (b>a && b>c){
//     console.log(b);
// } else {
//     console.log(c);
// }

// 

// циклы while и for

// let i=0;
// while(i<10){
//     console.log(i);
//     i+=1;
// }
// console.log("end");

// let i=0;
// do{console.log("work");
// }
// while(i)
// console.log("end");


// for
// let i=0;
// for(;i<=3;i++){
// console.log(i);
// }

// let i=0;
// while(i<=5){
//     console.log(i);
// i+=1;
// }

// FOR 
//  for(i=0;i<=10;i++){
//      console.log(i);
// }

let m=100;
let n=23;
let dey=0;
while(m>=n){
    m/=2;
    dey+=1;
}

console.log(dey);
