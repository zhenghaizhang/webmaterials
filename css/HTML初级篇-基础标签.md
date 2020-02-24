## HTML初级篇-基础标签

hyperText markup language 超文本标记语言

两个重要的容器

```html
<div></div>   // 行级元素
<span></span>  // 块级元素
```

**空格基本含义：文本（英文单词）分隔符**

> \&nbsp;表示空格
>
> \&lt;表示小于号<
>
> \&gt;表示大于号>

程度上的比较是greater

数量上的比较是more



**有序列表**

```html
<ol>
  <li>淘宝</li>
  <li>京东</li>
  <li>拼多多</li>
</ol>
```

ol的type属性有五种值：

```html
<ol type="1"></ol>
<ol type="a"></ol>
<ol type="A"></ol>
<ol type="i"></ol>
<ol type="I"></ol>
```

ol属性reversed

```html
<ol type="1" reversed="reversed"></ol>
```

ol属性start，属性值是数字

```html
<ol type="a" start="3"></ol>  序号从c开始
```



**无序列表**

```html
<ul type="disc">
  <li>淘宝</li>
  <li>京东</li>
  <li>拼多多</li>
</ul>
```

ul的type属性

```html
<ul type="disc"></ul>
<ul type="square"></ul>
<ul type="circle"></ul>
```

无序列表最常用作导航栏的制作

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>无序列表制作导航栏</title>
    <style>
        ul {
            list-style: none;
        }
        
        li {
            float: left;
            margin: 0 10px;
            color: #ff4400;
            font-weight: bold;
            font-size: 14px;
            height: 25px;
            line-height: 25px;
            padding: 0 5px;
        }
        
        li:hover {
            border-radius: 15px;
            background-color: #f40;
            color: #fff;
        }
    </style>
</head>

<body>
    <ul type="circle">
        <li>淘宝</li>
        <li>天猫</li>
        <li>聚划算</li>
    </ul>
</body>

</html>
```



img图片

```html
<img src="" alt="" title="">
```

src有三种：

- 网上的url
- 本地的绝对路径
- 本地的相对路径

alt属性：图片占位符。在图片显示失败的时候，提示在网页上的文字；

title属性：图片提示符。鼠标放在图片上显示的内容；










