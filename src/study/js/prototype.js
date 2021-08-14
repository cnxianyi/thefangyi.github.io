//     // 字符串长度
// console.log(`123`.length);// 3 

const { default: axios } = require("axios");

//     // 访问字符串
// console.log(`123`[2]); // 3 没有则返回 undefined
// console.log(`123`.charAt(2)); // 3 没有则返回 ''
// for (const char of `hello`) {
//     console.log(char); // h , e , l , l , o
// }

//     // 大小写
// console.log(`AAA`.toLowerCase()); // aaa
// console.log(`aaa`.toUpperCase()); // AAA

//     //查找字符串
// // str.indexOf(substr , pos) 查询第一个字符串所在位置
// let str = `is a str`
// console.log(str.indexOf(`a str`)); // 3
// console.log(str.indexOf(`s` , 3)); // 5 从3开始查询
// console.log(str.indexOf(`null`)); // -1
//         // 运用取反 ~ 运算符 | ~n = -(N+1)
// if (~str.indexOf(`is`)) {
//     console.log(`0`);
//     // 首次查询成功返回 0 , 假值导致if失效
// }
// //str.includes(substr , pos) // 是否包含返回true/false
// //str.startsWith('str') // 是否以str开始
// //str.endsWith('str') // 是否以str结束

//     // 获取字符串
// // str.slice(start [, end]) // 返回start ~ end 之间的字符串
// // str.substring(start [, end]) // 允许 start > end
// // str.substr(start [, length]) // 指定获取的长度
// console.log(str.slice(0 , 3)); // is

// // str.trim() 删除字符串前后的空格
// // str.repeat(n) 重复字符串N次


// let ms = 1e3; // 1000
// let sm = 1e-3;// 0.001

//     // MATH
// Math.floor(); // 向下舍入 3.1 > 3 | -1.1 > -2
// Math.ceil(); // 向上舍入
// Math.round(); // 四舍五入
// Math.trunc(); // 去掉小数点后的内容

// let num = 12.34;
// num.toFixed(1);// '12.3' // 舍入到n位，类似 Math.round()

//     // IEEE-745 数字格式损失精度
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log((0.1 + 0.2).toFixed(2)); // 0.30

// alert(isNaN('str')) // true 将参数转换为数字
// alert(isNaN(NaN)) // true
// alert(NaN === NaN) // false

// alert(isFinite('12')) // true 将参数转换为数字，是数字则true
// alert(isFinite(NaN)) // false

// console.log(+'100'); // 100
// console.log(Number('100')); // 100
// console.log(parseInt('100px')); // 100 从头开始读取数字
// console.log(parseFloat('1.5rem')); // 1.5 从头开始读取浮点数


        // 数组
        // 有序数据的特殊结构
            // 末端
    Array.pop(); // 返回数组最后一个元素，并返回
    Array.push(); // 数组末端添加元素
            // 首端
    Array.shift(); // 返回数组第一个元素，并返回
    Array.unshift(); // 首端添加元素

    Array.splice(); // 增删改
    Array.slice(); // 返回新数组，用于不影响原数组的转换


    function get (){ // 获取
        // 发送Ajax请求
            axios({
            // 请求类型
                method: 'GET', // GET POST PUT DELETE
            // URL
                url: 'http:// ...posts'
            }).then((result) => { // 成功信息
                
            }).catch((err) => { // 失败信息
                    
            });
    }

    function post (){ // 新建
            axios({
                method: 'POST', // GET POST PUT DELETE
                url: 'http:// ...posts',
                // 设置请求体
                data: {
                        title: '请求数据',
                        author: '请求数据'
                }
            }).then((result) => { // 成功信息
                
            }).catch((err) => { // 失败信息
                    
            });
    }

    function put (){ // 更新
        axios({
            method: 'PUT', // GET POST PUT DELETE
            url: 'http:// ...posts/id',
            data: {
                    title: '请求数据',
                    author: '请求数据'
            }
        }).then((result) => { // 成功信息
            
        }).catch((err) => { // 失败信息
                
        });
}       
        function Delete (){ // 删除
                axios({
                method: 'DELETE', // GET POST PUT DELETE
                url: 'http:// ...posts/id',
                }).then((result) => { // 成功信息
                
                }).catch((err) => { // 失败信息
                        
                });
        }