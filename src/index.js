/**
 * const
 */
// var var1 = "変数";
// console.log(var1);

// // var変数は上書き可能
// var1 = "12変数";
// console.log(var1);

// // var変数は再宣言可能
// var var1 = "var変数を再宣言";
// console.log(var1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let再宣言";

// const var3 = "const変数";
// console.log(var3);

// // const変数は上書き不可
// // var3 = "上書き";

// const var3 = "再宣言";

// constで定義したobjはプロパティ変更可能
// const var4 = {
//   name: "nabe",
//   age: 33
// }
// var4.name = "kenta"
// var4.address = "tokyo"
// console.log(var4)

// constで定義した配列はプロパティ変更可能
// const var5 = ['dog', 'cat']
// var5[0] = "mouse"
// var5.push("bird")
// console.log(var5)

/**
 * テンプレート文字列
 */
// const name = "nabe"
// const age =33
// // 私の名前はnabeです。33歳です。

// // 従来の方法
// const message = "私の名前は" + name + "です。" + age + "です。"
// //console.log(message)

// // テンプレート文字列を用いる
// const message2 = `私の名前は${name}です。${age}です。`
// console.log(message2)

/**
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => str;
// console.log(func2("func2"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "nabe",
//   age: 33
// };
// const { name, age } = myProfile;
// const message = `名前は${name}です。年齢は${age}才です。`;
// console.log(message);

// const myProfile = ["nabe", "33"];

// const [name, age] = myProfile;
// const message2 = `私は${name}です。${age}です`;
// console.log(message2);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}`);
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);

// // console.log(...arr1);

// const sumFunc = (nm1, nm2) => console.log(nm1 + nm2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//mapやfilterを使った配列の処理
const nameArr = ["nabe", "watanabe", "suzuki"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "nabe") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件trueの時 : falseの時
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1500;
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : num1 + num2;
};
console.log(checkSum(10, 200));
