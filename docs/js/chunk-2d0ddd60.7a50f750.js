(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddd60"],{"82a1":function(a,n,t){"use strict";t.r(n);var e=t("7a23"),r=Object(e["K"])("data-v-254abdca");Object(e["t"])("data-v-254abdca");var c=Object(e["g"])(" Proto & Inherit "),o=Object(e["g"])(" 2021年7月23日 "),l={class:"xy"},d={class:"content"},i=Object(e["h"])("h1",null,"数据类型",-1),b=Object(e["h"])("h5",null,[Object(e["h"])("i",{class:"bx bxs-label"}),Object(e["g"])(" 原始类型")],-1),s=Object(e["h"])("h5",null,[Object(e["h"])("i",{class:"bx bxs-label"}),Object(e["g"])(" 对象")],-1),h=Object(e["f"])('<h2 id="String" data-v-254abdca>String</h2><h4 data-v-254abdca>访问字符串</h4><pre data-v-254abdca>    // 字符串长度\r\nconsole.log(`123`.length);// 3 \r\nconsole.log(`123`[2]); // 3 没有则返回 undefined\r\nconsole.log(`123`.charAt(2)); // 3 没有则返回 &#39;&#39;\r\nfor (const char of `hello`) {\r\n    console.log(char); // h , e , l , l , o\r\n}\r\n<hr data-v-254abdca>\r\n</pre> <h4 data-v-254abdca>大小写</h4><pre data-v-254abdca>console.log(`AAA`.toLowerCase()); // aaa\r\nconsole.log(`aaa`.toUpperCase()); // AAA\r\n<hr data-v-254abdca>\r\n</pre> <h4 data-v-254abdca>查找字符串</h4><pre data-v-254abdca>// str.indexOf(substr , pos) 查询第一个字符串所在位置\r\nlet str = `is a str`\r\nconsole.log(str.indexOf(`a str`)); // 3\r\nconsole.log(str.indexOf(`s` , 3)); // 5 从3开始查询\r\nconsole.log(str.indexOf(`null`)); // -1\r\n        // 运用取反 ~ 运算符 | ~n = -(N+1)\r\nif (~str.indexOf(`is`)) {\r\n    console.log(`0`);\r\n    // 首次查询成功返回 0 , 假值导致if失效\r\n}\r\nstr.includes(substr , pos) // 是否包含返回true/false\r\nstr.startsWith(&#39;str&#39;) // 是否以str开始\r\nstr.endsWith(&#39;str&#39;) // 是否以str结束\r\n<hr data-v-254abdca>\r\n</pre><h4 data-v-254abdca>获取字符串</h4> <pre data-v-254abdca> str.slice(start [, end]) // 返回start ~ end 之间的字符串\r\n str.substring(start [, end]) // 允许 start &gt; end\r\n str.substr(start [, length]) // 指定获取的长度\r\nconsole.log(str.slice(0 , 3)); // is\r\n\r\n str.trim() 删除字符串前后的空格\r\n str.repeat(n) 重复字符串N次</pre><hr data-v-254abdca><h2 id="Number" data-v-254abdca>Number</h2><h4 data-v-254abdca>编写多个0000</h4><pre data-v-254abdca>let ms = 1e3; // 1000\r\nlet sm = 1e-3;// 0.001</pre><hr data-v-254abdca><h4 data-v-254abdca>Math</h4><pre data-v-254abdca>   // MATH\r\nMath.floor(); // 向下舍入 3.1 &gt; 3 | -1.1 &gt; -2\r\nMath.ceil(); // 向上舍入\r\nMath.round(); // 四舍五入\r\nMath.trunc(); // 去掉小数点后的内容\r\n\r\nMath.random() // 返回 0~1 的随机数\r\nMath.max/min (a , b ...) // 返回最值\r\nMath.pow(n , power) // n的p次幂\r\n\r\n// 不精确的计算\r\nlet num = 12.34;\r\nnum.toFixed(1);// &#39;12.3&#39; // 舍入到n位，类似 Math.round()\r\n\r\n// IEEE-745 数字格式损失精度\r\nconsole.log(0.1 + 0.2); // 0.30000000000000004\r\nconsole.log((0.1 + 0.2).toFixed(2)); // 0.30\r\n\r\n</pre><hr data-v-254abdca><h4 data-v-254abdca>isFinite &amp; isNaN</h4><pre data-v-254abdca>alert(isNaN(&#39;str&#39;)) // true 将参数转换为数字\r\nalert(isNaN(NaN)) // true\r\nalert(NaN === NaN) // false\r\n\r\nalert(isFinite(&#39;12&#39;)) // true 将参数转换为数字，是数字则true\r\nalert(isFinite(NaN)) // false</pre><hr data-v-254abdca><h4 data-v-254abdca>数字转换</h4><pre data-v-254abdca>console.log(+&#39;100&#39;); // 100\r\nconsole.log(Number(&#39;100&#39;)); // 100\r\nconsole.log(parseInt(&#39;100px&#39;)); // 100 从头开始读取数字\r\nconsole.log(parseFloat(&#39;1.5rem&#39;)); // 1.5 从头开始读取浮点数</pre><h2 id="Bigint" data-v-254abdca>Bigint</h2><h2 id="Boolean" data-v-254abdca>Boolean</h2><h2 id="Object" data-v-254abdca>Object</h2><h2 id="Null" data-v-254abdca>Null</h2><h2 id="Undefined" data-v-254abdca>Undefined</h2><h2 id="Symbol" data-v-254abdca>Symbol</h2>',31);Object(e["r"])();var u=r((function(a,n,t,u,O,f){var j=Object(e["z"])("nav-bar"),v=Object(e["z"])("sidebarR");return Object(e["q"])(),Object(e["d"])("div",null,[Object(e["h"])(j,null,{default:r((function(){return[c]})),time:r((function(){return[o]})),_:1}),Object(e["h"])("div",l,[Object(e["h"])("div",d,[i,Object(e["h"])(v,null,{default:r((function(){return[b,Object(e["h"])("ol",null,[Object(e["h"])("li",null,[Object(e["h"])("a",{href:"#String",onClick:n[1]||(n[1]=function(a){return f.GoSection("String")})},"String")]),Object(e["h"])("li",null,[Object(e["h"])("a",{href:"#Number",onClick:n[2]||(n[2]=function(a){return f.GoSection("Number")})},"Number")]),Object(e["h"])("li",null,[Object(e["h"])("a",{href:"#Bigint",onClick:n[3]||(n[3]=function(a){return f.GoSection("Bigint")})},"Bigint")]),Object(e["h"])("li",null,[Object(e["h"])("a",{href:"#Boolean",onClick:n[4]||(n[4]=function(a){return f.GoSection("Boolean")})},"Boolean")]),Object(e["h"])("li",null,[Object(e["h"])("a",{href:"#Null",onClick:n[5]||(n[5]=function(a){return f.GoSection("Null")})},"Null")]),Object(e["h"])("li",null,[Object(e["h"])("a",{href:"#Undefined",onClick:n[6]||(n[6]=function(a){return f.GoSection("Undefined")})},"Undefined")]),Object(e["h"])("li",null,[Object(e["h"])("a",{href:"#Symbol",onClick:n[7]||(n[7]=function(a){return f.GoSection("Symbol")})},"Symbol")])]),s,Object(e["h"])("ol",null,[Object(e["h"])("li",null,[Object(e["h"])("a",{href:"#Object",onClick:n[8]||(n[8]=function(a){return f.GoSection("Object")})},"Object")])])]})),_:1}),h])])])})),O=t("d968"),f=t("1906"),j={components:{navBar:O["a"],sidebarR:f["a"]},methods:{GoSection:function(a){document.getElementById("".concat(a)).scrollIntoView({behavior:"smooth"})}}},v=t("6b0d"),g=t.n(v);const p=g()(j,[["render",u],["__scopeId","data-v-254abdca"]]);n["default"]=p}}]);
//# sourceMappingURL=chunk-2d0ddd60.7a50f750.js.map