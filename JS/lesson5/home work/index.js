//  1)Возведение в степень

//    let double = n => n * 2;
//    console.log(double(3));

//  2)Сума двух чисел

//     let sum=(a,b)=>(a+b);
//     console.log(sum(2,2));

// 3)отнимает от первого числа второе и делит на третье

//    let num=(a,b,c)=>(a-b)/c;
//    console.log(num(4,2,2));

// 4)которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

//   let week=function(day){
//    if(day===1){
//        return "Понедельник";
//    }else if(day===2){
//    return 'Вторник';
//   }else if(day===3){
//     return "Среда";
//   }else if(day===4){
//     return "Четверг";
//   }else if(day===5){
//         return "Пятница";
//   }else if(day===6){
//     return "Суббота";
//   }else if(day===7){
//     return "Воскресенье";
//   }else "err";
//   }
//   console.log(week,(2));

// 5)которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

//   let num=function(a,b){
//     if(a===b){
//         return "true";
//     }else if(a!=b)
//     return "folse"
    
//   }
//   console.log(num(2,2));

// 6)Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма 
//         больше 10 - пусть вернет true, а если нет то - false.
    
//   let sum=function(a,b){

//         if((a+b)>10){
//         return "true";
//         } else  return "folse";
//         }
//         console.log(sum(1,1)); 

// 7) Сделайте функцию, которая параметром принимает число и проверяет - 
// отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// let num=function(a){
//     if(a<=0){
//         return "true";
//     }else return "folse";
// }
//     console.log(num(0));

// 8)Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
  
// let num=function(isNumberInRange){
//     if(isNumberInRange>0 && isNumberInRange<10){
//         return "true";
//     }else return "folse";
// }
// console.log(num(10));

// 9)Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 
// 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.


    // function isNumberInRange(num) {
    //     if (num>0 && num < 10) {
    //     return true;
    //     } else {
    //     return false;
    //     }
    //     }
    //     function getArray(arr) {
    //     let newArr = [];
    //     for (let i=0; i<arr.length; i++) {
    //     if (isNumberInRange(arr[i])) {
    //     newArr.push(arr[i]);
    //     }
    //     }
    //     return newArr;
    //     }
    //     console.log(getArray([100, 12, 1, -8, 1,1]));

    // 10)Сделайте функцию getDigitsSum (digit - это цифра), которая 
    // параметром принимает целое число и возвращает сумму его цифр.
    // function getDigitsSum(num){
    //     let sum=0;
    //     num = String(num);
    //     for(let i=0;i<num.length; i++){
    //         sum+=Number(num[i]);
            
    //     }return sum;
    // }
    // console.log(getDigitsSum(1233));

    // 11)Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого 
    // используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

    
    
    // function getDigitsSum(num){
    //         let sum=0;
    //         num = String(num);
    //         for(let i=0;i<num.length; i++){
    //             sum+=Number(num[i]);
    //         }return sum;
    //          }

    //          let arr = [];
    //          for(let i = 1; i< 2020; i+=1) {
    //          if(getDigitsSum(i) == 13) {
    //          arr.push(i);
    //          }
    //          }
    //          console.log(arr);

            //  12) Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
            //  Если четное - пусть функция возвращает true, если нечетное - false.

            // let integer =  function (isEven){
            //     if(isEven % 2 == 0){
            //     return "true";
            //     }else return "folse";
            // }
        
            // console.log(integer(5));

        //    13)Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. 
        //    Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

//         function isEven(num){
//                 return num % 2 == 0;
//         }
// let arr = [1,2,4,6,7,8,11,12,14];
// let neyArr=[];
// for(let i=0;i<arr.length;i+=1){
// if(isEven(arr[i])){
//     neyArr.push(arr[i]);
// }
// }
// console.log(neyArr);
        

// 14)Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей 
// (чисел, на которое делится данное число).

// function getDivisors(num) {
// 	let arr = [];
// 	for (i = 1; i <= num; i++) {
// 		if(num % i == 0) {
// 			arr.push(i);
// 		}
// 	}
// 	return arr;
    
// }
// console.log(getDivisors(2));






