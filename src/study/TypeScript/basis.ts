let a: number = 10; // 指定number类型

function num(a: number, b: number): number {
  //设置返回值为 number类型
  return a + b;
}
// num(123,'456',789)//ts 报错

let b: "male" | "famle"; // 联合类型
b = "male";
b = "famle";

let d: any; //任意类型 相当于关闭了TS功能
// 避免隐式any let d;
d = 10;
d = "10";

let e: unknown; // 表示未知类型值
e = "10";

// 类型断言 两种语法
let s: string;
s = e as string;
s = <string>e;

//void 表示没有返回值的函数
function fn(): void {
  return;
  // return undefined;
}

//never 表示空 ， 不能是任何值
function fn2(): never {
  throw new Error("报错");
}

// object 对象形式
let o: object;
o = {};
o = () => {};

// 必须有一个string的name , 可选 number的age , 可选任意类型的值
let na: { name: string; age?: number; [propsName: string]: any };
na = { name: "", age: 18, all: "all" };

// 必须有两个数字类型且返回值为number
let f: (a: number, b: number, c?: any) => number;
f = function(n1, n2, n3) {
  return n1 + n2;
};

// 创建数组
let arr: string[];
let ar: Array<number>;

// 创建元组 ，固定长度的数组
let ya: [string, number];

//创建枚举
enum Gender {
  male, // 0
  famle, // 1
}
let i: { name: string; gender: Gender };
i = {
  name: "str",
  // gender: Gender.male
  gender: 1, // i.gender === Gender.famle // true
};

// & |
// & 表示同时 ，
let q: { name: string } & { age: number };
q = { name: "s", age: 18 };

// 类型的别名
type myType = 1 | 2 | 3;
let t: myType;
