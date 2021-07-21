# Sass

## 语法格式

### 嵌套规则

```css
#main p {
    color: red;
    .redbox {
        color: yellow 子元素嵌套
    }
}
```

### 父选择器

```css
a {
    ...
    &:hover{
        text-decoration: none
    }
} &代表嵌套规则外层的父选择器
```

### 属性嵌套

```css
.funky {
    font: {
        family: Consolas;
        size: 30em;
        weight: bold;
    }
} 相同的命名空间
```

### 注释

* 多行注释 /**/ 会 输出到编译后的CSS文件中
* 单行注释 // 则不会
* ！ 作为多行注释的第一个字符表示在压缩输出模式下保留注释，多用于添加版权信息

## SassScript

### shell 测试

```shell
$ sass -i
>> "Hello, Sassy World!"
"Hello, Sassy World!"
>> 1px + 1px + 1px
3px
>> #777 + #777
#eeeeee
>> #777 + #888
white
在命令行输入 sass -i
测试相关的SassScript代码
```

## $ 变量

```css
$width: 5em;

#main {
    width: $width;
}支持块级作用域 , !global 转换为全局变量
```

## 数据类型

* Number: 1 , 10px
* String: "foo" , bar
* color: blue , #fff , rgba(255,255,255,0.5)
* Boolean: true , false
* Null: null
* Array: 1 , 2em 0 , red (逗号或空格) | 具备函数
* maps(js.obj): (key1: value1 , key2: value2)

## 运算

```css
p {
    width: 1in + 8pt;
    height: (500px/2)
} 尽量用()
```

### color

```css
p {
    color: #010203 + #040506;(#050709)
    color: #020406 * 2;
} rgba需要相等的 alpha值
```

### string

```css
p {
    cursor: e + -resize; (e-resize)
    content: "Foo" + Bar;("Foo Bar")
    content: Foo + "Bar";(Foo Bar)
    取决于左侧有无引号
}
```

### 插值 #{}

```css
$name: foo;
$first: border;
p.#{$name} {
    #{first}-color: blue;
}
==
p.foo {
    border-color:blue;
}
```

### 嵌套@import

```css
in a.scss {
    p {
        color: red;
    }
}

in app.scss{
    #main {
        @import "a"
    }
}
==
#main .p {
    color: red;
}
```

### @extend 继承样式

```css
.error {
    border: 1px #f00;
    background-color: #fdd;
}
.superError {
    @extend .error;
    border-width: 3px;
}
继承error的样式，且独有自己的样式
```

}
