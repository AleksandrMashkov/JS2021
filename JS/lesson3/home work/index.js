// "кот" > "код"
// "2" + 2 * "2"
// undefined == null
// undefined != null
// null == 0
// 2 > "3"
// null - false + true
// 1 / "l"
// "2" * "3"
// 4 + 5 + "O"
// "l" + 4 + 5
// "4" - 2
// "4" - "4x"
// “23” == 23
// null == false
// " -4 "/ 0 + 1
// null + 1
// undefined + null
// 1 === “1”
// “2” > 10

console.log("кот" > "код"); //код буквы Т<чем Д
console.log("2" + 2 * "2"); //?
console.log(undefined == null); // true при нестрогом сравнении равны
console.log(undefined != null); // folse не строгое неравенство
console.log(null == 0); //folsr При нестрогом равенстве null=undef
console.log(2 > "3"); //  folse при < или > типы приводятся к числу
console.log(null - false + true); //?
console.log(1 / "l"); //NaN делим число на стоку
console.log("2" * "3", typeof ("2" * "3")); //6
console.log(4 + 5 + "O"); //90 9 склеим c 0 так как бинарный+
console.log("l" + 4 + 5); //14 становится строкой +5=145
console.log("4" - 2); // 4-2 4 становится числом
console.log("4" - "4x"); // стока -строка- NaN
console.log("23" == 23); // приведены к типу
console.log(null == false); //??
console.log(" -4 " / 0 + 1); //деление на 0 undef
console.log(null + 1); //1
console.log(undefined + null); // NaN
console.log(1 === "1"); // folse строгое сравнение число и строка
console.log("2" > 10); //приведены к типу
