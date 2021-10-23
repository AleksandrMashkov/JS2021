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

const obj={};
obj.myFavoriteFilm = "оно";
obj.age = '2019';
obj[`name-rejiser`] = "не помню";
obj.cantry ="Америка";

console.log(obj.myFavoriteFilm,obj.age,obj['name-rejiser'],obj.cantry);

obj.proceeds="10000$"
console.log(obj.proceeds);
 obj.getName=function (){
    console.log("ОНО");
}
obj.getName();
delete obj.age;
console.log(obj);






// let user = {
// 	sayName: function () {
// 		console.log(“Ivan”)
// 	}
// };
// user.sayName(); // Выведет Ivan

