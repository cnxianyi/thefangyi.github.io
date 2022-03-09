# markdown语法

## vscode预览markdown

### <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>v</kbd>

```html
<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>v</kbd>
```

***

## 标题

    一级标题
    =======
    二级标题
    -------
    # 一级标题
    ...
    ###### 六级标题
***

## *斜体* **粗体** ***粗斜体***

    斜体 *text* _text_
    粗体 **text** __text__
    粗斜体 ***text*** ___text___
***

## 分隔线

    ***
    * * *
    ******
    - - -
    -----------
***

## ~~删除线~~

    ~~删除线
***

## <u>下划线</u>

    <u>下划线</u>
***

## 脚注[^1]

    [^1]
    文档末尾进行脚注赋值

***

## 列表

### 有序列表

* \*
* \+
* \-

```markup
* *
+ +
- -
```

1. 有序
2. 数字+.

3. 嵌套
    * 子列表 缩进4

***

## 区块

> \>
> \+
> 空格
>> \>\> 嵌套
***

* 1
    > \* \+ \>

***

## 代码块

`function()` 函数

```js
let code = 'js'
alert(js);
```

    ```js
    let code = 'js'
    alert(js);
    ```
***

## 链接

[Google](https://www.google.com.hk/?hl=zh-cn)

    [Google](https://www.google.com.hk/?hl=zh-cn)
<https://www.google.com.hk/?hl=zh-cn>

    <https://www.google.com.hk/?hl=zh-cn>
[Google]

    [Google]
    文档末尾进行变量赋值
    [Google]: https://www.google.com.hk/?hl=zh-cn
***

## 图片

![alt:'alt'](https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

    ![alt:'alt'](url)

![img]

    ![img]
    文档末尾变量赋值

<img src="https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" width="10%">

    <img src='url' width='10%'>
***

## 表格

|左对齐|居中|右对齐|
|:-------|:-------:|------:|
|单|元|格|

    |左对齐|居中|右对齐|
    |:-------|:-------:|------:|
    |单|元|格|

[^1]: text
[Google]: https://www.google.com.hk/?hl=zh-cn
[img]: https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png
