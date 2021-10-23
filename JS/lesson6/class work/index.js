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