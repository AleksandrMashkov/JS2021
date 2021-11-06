// Используя метод map() напишите код, который получает 
// из массива строк новый массив, содержащий их длины.

// let veget =  ['Капуста', 'Репа', 'Редиска','Арбуз'];
// let mapArr = veget.map((str) => {
//     return str.length;
// });

// console.log(mapArr);


// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() 
// напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, 
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.



// let numbers = [2, 3, 5, 7, 11, 13, 17];

// let currentSums=(numbers)=> {
//    let result = [];

//    numbers.reduce((sum, current, i)=> {
//       return result[i] = sum + current;
//    }, 0);

//    console.log( result );
// }

// currentSums(numbers)




// const getcommonValue = (arr1,arr2)=>{
//     const result = [];
//     for(let i=0;i<arr1.length;i+=1){
//         if(arr2.includes(arr1[i])&&!result.includes(arr1[i])){
//             result.push(arr1[i]);
//         }
//     }
//     return result;
// };
// console.log(getcommonValue([1,2,3,4,5,5,4],[6,5,4]));

// return arr1.filter((el,i)=>arr2.includes(el));
// };
// console.log(getcommonValue([1,2,3,4,5,5,4],[6,5,4]));