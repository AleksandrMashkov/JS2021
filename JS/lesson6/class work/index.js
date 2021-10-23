// const evenNine=(num)=>{
//     num=`${num}`
//     let sum=0;
//     for(let i=0;i<num.length;i+=1){
//         sum += +num[i];

//     }
//     if(sum>9){
//         return evenNine(sum);
//     }else {
//         return sum;
//     }
//     console.log(sum);
// };
// console.log(evenNine(2478));

// const arr= [2,4,3,1];
// const arrSort=(arr)=>{
//     const result=[];
//     for(let i=0;i<arr.length;i+=1){
//         if(!i){
//          result[i] = arr[i]
//          continue;
//         }
//         if(arr[i]>result[i-1]){
//             result[i] = arr[i]
//             result[i]=arr[i];
//         }else{
//             const a= result[i-1];
//             result[i-1] = arr[i];
//             result[i] = arr[i] ;
//             result[i]=a;
            
//         }
//     }
//     console.log(result);
// };
// console.log(arrSort(arr));


// const isPalindrom=(str)=>{
//     let newStr="";
//     for(let i=0;i<str.length;i+=1 ){
//         newStr+=str[str.length-i-1]
//     }
//     if(newStr===str){
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(isPalindrom("abgya"));


// Обьекты
// Примитивы
// let num1=1;
// let num2=num1;
// console.log(num1,num2);

// num1=2;
// console.log(num1,num2);


// const obj1={
//     name:"Alex",
// };
// const obj2=obj1;

// console.log(obj1,obj2);

// obj1.name="IVAN"; //меняем только свойства обьекта name:"Alex"

// console.log(obj1,obj2);


// const obj={};
// obj.true=1;
// console.log(obj);

// const obj={};
// console.log(obj);
// obj.age="12";
// obj[`name-user`]='Ivan';
// console.log(obj);

// const obj={};
// console.log(obj);
// obj.age="12";
// obj[`name`]='Ivan';
// console.log(obj);

// const obj={};
// console.log(obj);
// obj.age="12";
// obj[`name`]='Ivan';
// console.log(obj.age,obj.name);

// Доьавление свойств обьекта

// const obj={};
// console.log(obj);
// obj.age="12";
// obj[`name`]='Ivan';
// console.log(obj.age,obj.name);

// obj.age=`18`;
// obj.name="Max";
// console.log(obj);


// const obj={};
// console.log(obj);
// obj.age="12";
// obj[`name`]='Ivan';
// console.log(obj.age,obj.name);

// obj.age=`18`;
// obj.name="Max";
// console.log(obj);
// console.log(obj.age);

// delete obj.age;
// console.log(obj);
// console.log(obj.age);


// const obj={
//     sayHi:function(name){
//         console.log("HI USER",name);
//     },
// };

// obj.sayHi("MAX");

// const obj={};
// obj.myFavoriteFilm = "оно";
// obj.age = '2019';
// obj[`name-rejiser`] = "не помню";
// obj.cantry ="Америка";

// console.log(obj.myFavoriteFilm,obj.age,obj['name-rejiser'],obj.cantry);

// obj.proceeds="10000$"
// console.log(obj.proceeds);
//  obj.getName=function (){
//     console.log("ОНО");
// }
// obj.getName();
// delete obj.age;
// console.log(obj);

// const str = "string";
// console.log(str);
// str[0] ="S";
// console.log(str);

// Сравнение строк
// console.log( "Z".codePointAt(0) ); 




//2) Реализовать функцию которая будет определять, 
// в каком регистре записан n элемент переданной 
// строки, если в верхнем то вернуть true, в противном случае 
// вернуть false.

// function isUpperCase(str, index) {
//     return str.charAt(index).toUpperCase() === str.charAt(index);
// }
// console.log(isUpperCase('Приве МИР',0)); 

// const isUpperCase = (str, index)=>{
//     if(index>str.lenght){
//         console.log("не верный параметр");
//     }
//     if(str[index]===str[index].toUpperCase()){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// };
// isUpperCase("Привет мир",0)

//3) Реализовать функцию которая заменяет в строке str, все 
// вхождения подстроки find, на подстроку replace.


// const custemReplaseAll =(str,find,replaseStr)=>{
    // while(str.includes(find)){
    //     str = str.replace(find,replaseStr);
    // }
    // return str;
    str = str.replace(find,replaseStr);
    if(str.includes(find)){
        custemReplaseAll(str,find,replaseStr);
    }else{
        return str;
    }
};
console.log(custemReplaseAll("hi this is you, hi its me","hi","HELO"));

// function includes(str,find,pos){

//     let str="Привет мир"
// }
// console.log("Привет мир".includes("мир"));


// 1)Реализовать функцию которая будет принимать числовой 
// диапазон в качестве параметров [min, max] и будет 
// возвращать случайное целое число из данного диапазона.

// const getRandonNumber = (min,max)=>{
// const rand = Math.random()*(max-min);
// const result = min+rand;
// console.log(result);
// return Math.round(result);
// // const result = min+
// };
// console.log(getRandonNumber(1,100));

