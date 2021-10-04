// ----STRING----
// const firstValue = String(5);

// console.log(typeof firstValue);

// const obj = {
//   foo: 67,
// };
// console.log(String(obj.foo));
// console.log(typeof String(obj));

// // ----NUMBER----
// let testValue = "12345zxc";

// console.log(typeof testValue);

// testValue = Number(testValue);

// console.log(typeof testValue);
// console.log(testValue);

// let testValueq;

// console.log(typeof testValueq);

// testValue = Number(testValueq);

// console.log(typeof testValueq);
// console.log(testValueq);

// ----boolaan----

// const isUser = true;
// const isAdmin = false;
// console.log(Number(isUser), Number(isAdmin));

// const voidString = "";
// console.log(Number(voidString));

// const Value = "12";

// console.log(typeof Boolean(Value), typeof Boolean(Value));

// const value = 0;

// console.log(typeof Boolean(value), Boolean(value));

// const obj = [].length;
// console.log(Boolean(obj));

// console.log(4 % 2);
// console.log(2 ** 2);

// ---Бинарный+-----
// const value = 5;
// console.log(typeof value, typeof +value);
// const value = "5";
// console.log(typeof value, typeof +value);

// -----Бинарный +-------
// const sum = 5 + 6;
// console.log(sum);
// let sum = 5 + 6;
// console.log(sum);

// sum = 1 + true;
// console.log(sum);

// sum = 5 + null;
// console.log(sum);

// const stringValue = "Alex";
// const numberValue = 34;
// console.log(stringValue + numberValue);

// console.log(typeof (numberValue + stringValue));

// const stringValue = "12";
// const numberValue = 34;
// console.log(+stringValue + numberValue);

// console.log(typeof (numberValue + +stringValue));

//вариант1
// const firstName = "Aleksandr";
// const lastName = "Mashkov";

// console.log(firstName + lastName);

//вариант2
// const firstName = "Aleksandr";
// const lastName = "Mashkov";

// console.log(firstName + " " + lastName);

//вариант3
// const firstName = "Aleksandr";
// const lastName = "Mashkov";

// console.log(`${firstName}  ${lastName}`);

//------- операции сравнения-----------
// console.log(5 != 5);  //не равно
// console.log(5 == 5);  // сравнение
// console.log(false == 0);

// const firstString = "яблоко";
// const secondString = "Яблоко";

// console.log(firstString == secondString);

// const firstString = "яблоко";
// const secondString = "Яблоко";

// console.log(firstString > secondString);

// ---------Сравнение разных типов-----------

// const a = 0;
// const b = "0";
// console.log(a == b);
// console.log(a === b);

// -------Практика---------

console.log(5 > 4);
console.log("аванс" > "яблоко");
console.log("2" > "12");
console.log("" + 1 + 0, typeof ("" - 1 + 0));
console.log("" - 1 + 0, typeof ("" - 1 + 0));
console.log(true + "" + false);
console.log(6 / "3");
console.log("$" + 4 + 5);
console.log("4px" - 5);
console.log(undefined + 1);
console.log("\t\n-2");
console.log(null == "\n0\n");
console.log(null === +"\n0\n");
