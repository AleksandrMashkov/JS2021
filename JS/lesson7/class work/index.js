// const str = "String Random";


// const subStr = "Random";


// String.prototype.endsWith = (str,substr)=>{
// const findStr = String(str.match(/(\S+)$/g));
// if(substr===findStr){
//     return true;
// }else {
//     return false;
// }
// };
// console.log(String.prototype.endsWith(str,subStr));


// const str = "Астрономия- наука о небесных телах";
// const getSubstr = (str,char,pos)=>{
// if (pos==="до"){
// return str.slise(0,char);
// }else if(pos==="после"){
//     return str.slise(char);
// }else{
//     return "Error";
// }
// };

// console.log(getSubstr(str,10,"до"));

                                // Обьекты

// const arr1=new Array(4,5,66,8,9);
// console.log(arr1);

                            // переназначение 

// const arr3=[1,2,3,4,5];
// console.log(arr3);
// arr3[0]=10;
// console.log(arr3);


// const data =[
// {
//     name:"Alex",
//     age: "20",
    
// },
// {
//     name:"Alex2",
//     age: "22",
// },
// {
//     name:"Alex3",
//     age: "26",
// },
// ]
// console.log(data);

// Многомерные массивы

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   console.log( matrix[0][2] ); 
  


// создание дыр в массиве ПЛОХО


// const arr=[];
// console.log(arr)
// arr[0]="ноль";
// console.log(arr);
// arr[10]="десять";
// console.log(arr);

// или 

// const arr=[];
// console.log(arr)
// arr[0]="ноль";
// console.log(arr);
// arr[10]="десять";
// console.log(arr);

// const arr=[];
// console.log(arr)
// arr[0]="ноль";
// console.log(arr);
// arr[10]="десять";
// console.log(arr);
// arr[5]="пять";
// console.log(arr);

                // Свойства массива

// const arr=[];
// console.log(arr)
// arr[0]="ноль";
// console.log(arr);
// arr[10]="десять";
// console.log(arr);
// arr[5]="пять";
// console.log(arr.length);

                 // удаляет ненужные элементы 

// const arr=[1,2,3,4,5,6,7,8];
// console.log(arr);
// arr.length=3;
// console.log(arr);


// const arr=[];
// const testLenght = arr.push(1);
// console.log(testLenght);
// arr.push(10);
// console.log(arr);


// const arr=[];
// const testLenght = arr.push(1);
// console.log(testLenght);
// arr.push(10,100,120);
// console.log(arr);

// Методы

// let arr = [1, 2, 3, 4];
// 	let findElem = arr.find((e) => e  === 3); 
// 	console.log(findElem); // 3

// Написать функцию, которая будет принимать массив чисел, 
// содержащий целые положительные и целые отрицательные числа,
// в качестве результата возвращать сумму четных положительных 
// элементов переданного массива.
// вариант1
    // let arr = [1, 2,4, 3,-5,-6,7,-8];
	//  let filterArr = arr.filter((e) =>e>0); 
    //  let sum = 0;
    //     for (let i=0; i < filterArr.length; i+=1){
    //         if (filterArr[i] % 2 == 0){
    //             sum += filterArr[i];
    //         }
    //     }
    //     console.log(sum);

    // Написать функцию, которая будет принимать массив чисел, 
    // и будет убирать повторяющиеся значения из переданного массива, 
    // в качестве результата возвращать новый массив с уникальными значениями 
    // из исходного.

    let arr_2 = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
      });
      console.log(arr_2);
      
      

    // const Arr=[1,2,3,4,4,5,5,6,7,8,8,9];
  


    // Написать функцию  которая будет принимать два массива, 
    // и будет сравнивать их, если они идентичны (элементы совпадают 
    //     по значению и по индексу) то функция возвращает true, в 
    //     противном случае false.
  
const arr1 = [1, 1, 2, 3, 2, 5, 6, 4, 4];
const arr2 = [1, 1, 2, 3, 4, 3, 2, 5, 6, 4, 4];
const isArr = (arr1, arr2) => arr1.toString() === arr2.toString();
console.log(isArr(arr1, arr2));

	
    


	
