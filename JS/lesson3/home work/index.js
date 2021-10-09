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

console.log("кот" > "код"); //true     код буквы Т<чем Д
console.log("2" + 2 * "2"); //24 первым выполнится умножение
console.log(undefined == null); // true при нестрогом сравнении равны
console.log(undefined != null); // false не строгое неравенство
console.log(null == 0); //false При нестрогом равенстве null=undef
console.log(2 > "3"); //  false при < или > типы приводятся к числу
console.log(null - false + true); //  1 пеабразуются в численное значение 0-0+1
console.log(1 / "l"); //NaN делим число на стоку
console.log("2" * "3", typeof ("2" * "3")); //6 'number'
console.log(4 + 5 + "O"); //90 9 склеим c 0 так как бинарный+
console.log("l" + 4 + 5); //145    14 становится строкой +5
console.log("4" - 2); // 2     4 становится числом
console.log("4" - "4x"); //NaN      стока -строка-
console.log("23" == 23); //true           приведены к типу
console.log(null == false); //false
console.log(" -4 " / 0 + 1); //-Infinity  деление на 0
console.log(null + 1); //1
console.log(undefined + null); // NaN
console.log(1 === "1"); //false     строгое сравнение число и строка
console.log("2" > 10); //false       приведены к типу
