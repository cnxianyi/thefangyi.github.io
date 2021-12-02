# 前端面试

## HTML

1. @import 和 link的区别
    * 分别是CSS和HTML提供的
    * import是页面加载完毕后加载，link为同时加载
    * import的兼容性略低，DOM能操纵link

2. 浏览器内核
    * Trident：IE 浏览器内核
    * Gecko：Firefox 浏览器内核
    * Presto：Opera 浏览器内核
    * Webkit：Safari 浏览器内核
    * Blink：谷歌浏览器内核，属于 Webkit 的一个分支，与 Opera 一起在研发

3. cookies，sessionStorage和localStorage的区别
    * cookie：始终在http请求中携带，不能超过4kb，能设置过期时间
    * sessionStorage：最大5M , 仅在浏览器关闭前有效
    * localStorage：最大5M ， 始终有效，用作长期保存

4. form标签关闭自动保存
    * autocomplete：off

5. get与post
    * get ：从服务器获取数据，显示于URL后，可见且不安全，传送的数据量不能超过2kb
    * post ： 像服务器传输数据，用户不可见，没有数据量限制。安全性高

6. CSS 权重
    ！important > 行内 > ID > 类|属性|伪类 > 元素

7. 回流与重绘
    * 回流：DOM变化改变布局
        * 添加或删除元素
        * 改变元素大小
    * 重绘：改变外观不改变布局
        * color、background、box-shadow……

## CSS

1. BFC
    * 块级格式上下文，相当于一个容器，里面的元素和外面互不影响
    * 创建：HTML根元素、浮动、绝对定位
    * 目的：清除浮动、防止外边距重叠

2. 隐藏
    * display:none 与 visibility:hidden
    * 回流和重绘
    * opacity:0 隐藏占据位置，绑定的事件还可以触发，且transition依旧有效

3. 盒子模型
    * 标准盒子模型：margin+border+padding+content
    * IE盒子模型：content包含了border和padding

4. 伪类和伪元素
    * ::伪元素 创建不存在文档树中的元素，且添加样式。::before
    * :伪类 处于某种状态才添加的样式。:hover

5. 可继承的属性
    * 字体 family size weight style
    * 文本 行高什么的
    * cursor
    * visibility

6. min-width > max-width > width

## JS

1. undefined 和 null
    * undefined：未定义，未分配的默认值
    * null：空值
    * undefined === null(false)
    * undefined == null(true)

2. && || !!
    * (false && 1 && []) //false
    * (false && 1 && []) // 1
    * !! 转换为布尔值

3. 事件处理
    1.捕获阶段：事件从window向下到目标元素
    2.目标阶段：到达目标元素
    3.冒泡阶段：从元素开始向上冒泡
    * event.target 触发事件的元素

4. 闭包

5. this
    * this指向的是最后调用该函数的对象
    * fun.apply(this.Arg,[argsArray])
    * fun.call(thisArg[, arg1[, arg2[, ...]]])

6. 原型
    * 原型对象也是普通的对象，是对象一个自带隐式的 __proto_ _ 属性

7. Array
    * map: 创建一个新数组。内容为原数组每个元素执行函数后
    * filter: 创建新数组，内容为通过筛选的函数
    * reduce: 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

8. argument
    * 函数中传递的参数值的集合。它是一个类似数组的对象

9. set
    * set：存储任何类型的唯一值
        * 不会重复，set1.has(..)判断是否存在特定值
        * set1.size 获得长度
        * set1.clear 删除

10. ...
    * let allNum = [1,3,4,5]
    const sum = add(...allNum)
    展开运算符，类似把1345缩写
    * const [first, ...others] = [1, 2, 3, 4, 5];
    console.log(first); // 1
    console.log(others); // [2,3,4,5]
    剩余运算符

11. 默认参数
    * function add(a = 0, b = 0){
    return a + b;
    }

12. NaN
    * 非数字

13. 检查对象中是否存在某个属性
    * ("prop" in obj)// boolean 会检查原型链中是否包含
    * (obj.hasOwnProperty("prop"))//boolean 仅仅在自身对象中查找
    * (o["prop"])//属性名或undefined

14. 判断数据类型
    * typeof
        * console.log(typeof fun);//function
        * 对于null及数组、对象，typeof均检测出为object
    * instanceof
        * console.log(fun instanceof Function);// true
        * instanceof不能区别undefined和null
    * constructor
        * console.log(fun.constructor === Function);// true
        * undefined和null没有constructor属性
        * constructor的指向是可以改变的
    * Object.prototype.toString.call
        * console.log(Object.prototype.toString.call(fun));//[object Function]

## Vue

1. MVVM
    * 由 Model、View、ViewModel 三部分构成
    * 只需关注业务逻辑，不需要手动操作DOM

2. 生命周期
    * created、beforeMount、mounted 中进行异步请求，data 已经创建

3. v-if 和 v-show
    * v-if：直接销毁和重建 DOM 达到让元素显示和隐藏的效果
    * v-show：通过修改元素的 display 的 CSS 属性让其显示或者隐藏
