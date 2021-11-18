# Flex

* Flexible Box (弹性布局)
* Webkit 内核的浏览器，必须加上-webkit前缀
* 设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效

## 基本语法

* 容器有两根主轴
  * 水平的主轴(main axis)
  * 垂直交叉轴(cross axis)

### flex-direction (项目排列方向)

```css
flex-direction:
  * row (默认) - 主轴水平,左侧开始
  * row-reverse - 主轴水平,右侧开始
  * column - 主轴垂直,上方开始
  * column-reverse - 主轴垂直,下方开始
```

### flex-wrap (换行)

```css
flex-wrap:
  * nowrap(默认) - 不换行
  * wrap - 向下换行
  * wrap-reverse - 向上换行(第一行在下方)
```


### flex-flow (flex-direction属性和flex-wrap属性的简写)

* 默认值为 row nowrap

### justify-content (主轴对齐方式)

```css
justify-content:
  * flex-start(默认) - 左对齐
  * flex-end - 右对齐
  * center - 居中
  * space-between - 两端对齐 , 间距相等
  * space-around - 项目两侧相等
```


### align-items (交叉轴对齐方式)

```css
align-items:
  * flex-start 起点对齐(上)
  * flex-end 终点对齐(下)
  * center  中点对齐(居中)
  * baseline 第一行文字为基线对齐
  * stretch (默认) 自动铺满
```

### align-content (多线对齐)

----

## 项目的属性

### order(排序)

```css
.item {
    order: <integer> (-1 ~ 99)
}
设置优先级,依次显示
```

### grow(行内分割)

```css
.item {
  flex-grow: <number>; /* default 0 */
}

```

### flex-shrink(自动缩小)

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
为0 则缩小优先级降低
```

### flex（简写）

* flex-grow, flex-shrink 和 flex-basis(默认 0 1 auto)
* 优先使用flex , 减轻负载

### align-self属性

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖  align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。





