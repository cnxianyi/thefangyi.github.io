(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d89bb376"],{1906:function(e,t,n){"use strict";var o=n("7a23"),r={class:"right_nav"},a=Object(o["h"])("h1",null,[Object(o["h"])("a",null,[Object(o["h"])("i",{id:"top",class:"bx bx-arrow-to-top"})])],-1);function l(e,t,n,l,c,d){return Object(o["q"])(),Object(o["d"])("div",null,[Object(o["h"])("div",r,[Object(o["x"])(e.$slots,"default")]),c.top?(Object(o["q"])(),Object(o["d"])("div",{key:0,class:"icon",onClick:t[1]||(t[1]=function(){return d.goTop&&d.goTop.apply(d,arguments)})},[a])):Object(o["e"])("",!0)])}var c=n("2f14"),d={data:function(){return{height:0,scrollTop:0,top:!1}},methods:{watchScroll:function(){this.scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this.scrollTop>500?this.top=!0:this.top=!1},goTop:function(){this.scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,this.scrollTop>1?(window.requestAnimationFrame(this.goTop),scrollTo(0,Math.floor(.85*this.scrollTop))):scrollTo(0,0),document.getElementById("top").className="bx bx-arrow-to-top bx-fade-up"}},mounted:function(){window.addEventListener("scroll",Object(c["a"])(this.watchScroll,500))},destroyed:function(){window.removeEventListener("scroll",this.watchScroll)}};n("ee0b");d.render=l;t["a"]=d},"3c5b":function(e,t,n){},"82a1":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r=Object(o["E"])("data-v-6ed6254b");Object(o["t"])("data-v-6ed6254b");var a=Object(o["g"])(" Proto & Inherit "),l=Object(o["g"])(" 2021年7月23日 "),c={class:"xy"},d={class:"content"},s=Object(o["h"])("h1",null,"数据类型",-1),i=Object(o["h"])("h5",null,[Object(o["h"])("i",{class:"bx bxs-label"}),Object(o["g"])(" 原始类型")],-1),b=Object(o["h"])("h5",null,[Object(o["h"])("i",{class:"bx bxs-label"}),Object(o["g"])(" 对象")],-1),h=Object(o["f"])('<h2 id="String" data-v-6ed6254b>String</h2><h4 data-v-6ed6254b>访问字符串</h4><pre data-v-6ed6254b><code class="language-js" data-v-6ed6254b>    // 字符串长度\r\nconsole.log(`123`.length);// 3 \r\nconsole.log(`123`[2]); // 3 没有则返回 undefined\r\nconsole.log(`123`.charAt(2)); // 3 没有则返回 &#39;&#39;\r\nfor (const char of `hello`) {\r\n    console.log(char); // h , e , l , l , o\r\n}\r\n<hr data-v-6ed6254b>\r\n</code></pre> <h4 data-v-6ed6254b>大小写</h4><pre data-v-6ed6254b><code class="language-js" data-v-6ed6254b>\r\nconsole.log(`AAA`.toLowerCase()); // aaa\r\nconsole.log(`aaa`.toUpperCase()); // AAA\r\n<hr data-v-6ed6254b>\r\n</code></pre> <h4 data-v-6ed6254b>查找字符串</h4><pre data-v-6ed6254b><code class="language-js" data-v-6ed6254b>\r\n// str.indexOf(substr , pos) 查询第一个字符串所在位置\r\nlet str = `is a str`\r\nconsole.log(str.indexOf(`a str`)); // 3\r\nconsole.log(str.indexOf(`s` , 3)); // 5 从3开始查询\r\nconsole.log(str.indexOf(`null`)); // -1\r\n        // 运用取反 ~ 运算符 | ~n = -(N+1)\r\nif (~str.indexOf(`is`)) {\r\n    console.log(`0`);\r\n    // 首次查询成功返回 0 , 假值导致if失效\r\n}\r\nstr.includes(substr , pos) // 是否包含返回true/false\r\nstr.startsWith(&#39;str&#39;) // 是否以str开始\r\nstr.endsWith(&#39;str&#39;) // 是否以str结束\r\n<hr data-v-6ed6254b>\r\n</code></pre><h4 data-v-6ed6254b>获取字符串</h4> <pre data-v-6ed6254b><code class="language-js" data-v-6ed6254b>\r\n str.slice(start [, end]) // 返回start ~ end 之间的字符串\r\n str.substring(start [, end]) // 允许 start &gt; end\r\n str.substr(start [, length]) // 指定获取的长度\r\nconsole.log(str.slice(0 , 3)); // is\r\n\r\n str.trim() 删除字符串前后的空格\r\n str.repeat(n) 重复字符串N次</code></pre><hr data-v-6ed6254b><h2 id="Number" data-v-6ed6254b>Number</h2><h4 data-v-6ed6254b>编写多个0000</h4><pre data-v-6ed6254b><code class="language-js" data-v-6ed6254b>let ms = 1e3; // 1000\r\nlet sm = 1e-3;// 0.001</code></pre><hr data-v-6ed6254b><h4 data-v-6ed6254b>Math</h4><pre data-v-6ed6254b><code class="language-js" data-v-6ed6254b>    // MATH\r\nMath.floor(); // 向下舍入 3.1 &gt; 3 | -1.1 &gt; -2\r\nMath.ceil(); // 向上舍入\r\nMath.round(); // 四舍五入\r\nMath.trunc(); // 去掉小数点后的内容\r\n\r\nMath.random() // 返回 0~1 的随机数\r\nMath.max/min (a , b ...) // 返回最值\r\nMath.pow(n , power) // n的p次幂\r\n\r\n// 不精确的计算\r\nlet num = 12.34;\r\nnum.toFixed(1);// &#39;12.3&#39; // 舍入到n位，类似 Math.round()\r\n\r\n// IEEE-745 数字格式损失精度\r\nconsole.log(0.1 + 0.2); // 0.30000000000000004\r\nconsole.log((0.1 + 0.2).toFixed(2)); // 0.30\r\n\r\n</code></pre><hr data-v-6ed6254b><h4 data-v-6ed6254b>isFinite &amp; isNaN</h4><pre data-v-6ed6254b><code class="language-js" data-v-6ed6254b>alert(isNaN(&#39;str&#39;)) // true 将参数转换为数字\r\nalert(isNaN(NaN)) // true\r\nalert(NaN === NaN) // false\r\n\r\nalert(isFinite(&#39;12&#39;)) // true 将参数转换为数字，是数字则true\r\nalert(isFinite(NaN)) // false</code></pre><hr data-v-6ed6254b><h4 data-v-6ed6254b>数字转换</h4><pre data-v-6ed6254b><code class="language-js" data-v-6ed6254b>console.log(+&#39;100&#39;); // 100\r\nconsole.log(Number(&#39;100&#39;)); // 100\r\nconsole.log(parseInt(&#39;100px&#39;)); // 100 从头开始读取数字\r\nconsole.log(parseFloat(&#39;1.5rem&#39;)); // 1.5 从头开始读取浮点数</code></pre><h2 id="Bigint" data-v-6ed6254b>Bigint</h2><h2 id="Boolean" data-v-6ed6254b>Boolean</h2><h2 id="Object" data-v-6ed6254b>Object</h2><h2 id="Null" data-v-6ed6254b>Null</h2><h2 id="Undefined" data-v-6ed6254b>Undefined</h2><h2 id="Symbol" data-v-6ed6254b>Symbol</h2>',31);Object(o["r"])();var u=r((function(e,t,n,u,f,g){var j=Object(o["y"])("nav-bar"),p=Object(o["y"])("sidebarR");return Object(o["q"])(),Object(o["d"])("div",null,[Object(o["h"])(j,null,{default:r((function(){return[a]})),time:r((function(){return[l]})),_:1}),Object(o["h"])("div",c,[Object(o["h"])("div",d,[s,Object(o["h"])(p,null,{default:r((function(){return[i,Object(o["h"])("ol",null,[Object(o["h"])("li",null,[Object(o["h"])("a",{href:"#String",onClick:t[1]||(t[1]=function(e){return g.GoSection("String")})},"String")]),Object(o["h"])("li",null,[Object(o["h"])("a",{href:"#Number",onClick:t[2]||(t[2]=function(e){return g.GoSection("Number")})},"Number")]),Object(o["h"])("li",null,[Object(o["h"])("a",{href:"#Bigint",onClick:t[3]||(t[3]=function(e){return g.GoSection("Bigint")})},"Bigint")]),Object(o["h"])("li",null,[Object(o["h"])("a",{href:"#Boolean",onClick:t[4]||(t[4]=function(e){return g.GoSection("Boolean")})},"Boolean")]),Object(o["h"])("li",null,[Object(o["h"])("a",{href:"#Null",onClick:t[5]||(t[5]=function(e){return g.GoSection("Null")})},"Null")]),Object(o["h"])("li",null,[Object(o["h"])("a",{href:"#Undefined",onClick:t[6]||(t[6]=function(e){return g.GoSection("Undefined")})},"Undefined")]),Object(o["h"])("li",null,[Object(o["h"])("a",{href:"#Symbol",onClick:t[7]||(t[7]=function(e){return g.GoSection("Symbol")})},"Symbol")])]),b,Object(o["h"])("ol",null,[Object(o["h"])("li",null,[Object(o["h"])("a",{href:"#Object",onClick:t[8]||(t[8]=function(e){return g.GoSection("Object")})},"Object")])])]})),_:1}),h])])])})),f=n("d968"),g=n("1906"),j=(n("c197"),{components:{navBar:f["a"],sidebarR:g["a"]},methods:{GoSection:function(e){document.getElementById("".concat(e)).scrollIntoView({behavior:"smooth"})}}});j.render=u,j.__scopeId="data-v-6ed6254b";t["default"]=j},ee0b:function(e,t,n){"use strict";n("3c5b")}}]);
//# sourceMappingURL=chunk-d89bb376.8c347cdb.js.map