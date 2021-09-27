try {
  let MyAge = 35; //переменная number
  console.log(MyAge);
  console.log(typeof MyAge); //возващает number

  let name = "Aleksandr"; //переменная string

  console.log(name);
  console.log(typeof name); //возващает string

  let comparison = 10 > 1; //переменная boolean
  console.log(comparison);
  console.log(typeof comparison); //возващает boolean

  let age = null; //переменная Null
  console.log(age);
  console.log(typeof age); //возващает Null

  let time; //переменная undefined
  console.log(time);
  console.log(typeof time); //возващает undefined

  let user = {
    //переменная object
    mane: "John",
  };

  console.log(user.mane);
  console.log(typeof { name: "John" }); //возващает object

  let math = Symbol(); //переменная Symbol
  console.log(math);
  console.log(typeof Symbol()); //возващает Symbol

  let bigInt = 1234567890123456789012345678901234567890n; //переменная bigInt
  console.log(bigInt);
  console.log(typeof 10n); //возващает bigInt

  const User = {
    mane: "John",
  };
  User.mane = "Alex";
  console.log(User.mane);

  let Time = {
    hours: "10",
  };
  Time = "11";
  console.log(Time);

  var admin = {
    name: "Pavel",
  };
  admin = "Kiril";
  console.log(admin);
} catch (err) {
  const bigNamber = 10;
  bigNam = 5;
  console.log(bigNamber); // ошибка выполнения
}
