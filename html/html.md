### HTML标签之a标签

- 超链接：较常用的功能

- 锚点：直接定位到id是demo1的位置

  ```javascript
  <a href="#demo1">find demo1</a>
  ```

- 打电话：美团、饿了么外卖等

  ```javascript
  <a href="tel:xxxxxxxxxxx">给xxx打电话</a>
  ```

- 发邮件

  ```javascript
  <a href="mailto:zhzhang09@126.com">给宝山发邮件</a>
  ```

- 协议限定符：直接写JavaScript代码

  ```javascript
  <a href="javascript:alert(1)">弹出1</a>
  ```

css允许我们针对a标签的4中状态设置各自的css特性，叫做css伪类。

- active一般不用写

- 顺序注意：lvha

- a:link可以简写为a

### HTML之table

```css
table {
    border-collapse: collapse; /*默认为separate*/
}
```

```html
<td rowspan="2"></td> 跨两行
<td colspan="4"></td> 跨四列
```

### HTML之form表单

发送数据

```html
<form action="" method="get">
  <p>
    用户名：<input type="text" name="usernmae" id="">
  </p>
  <p>
    密码：<input type="password" name="password" id="">
  </p>
  <input type="submit" value="提交">
</form>
```



### HTML之BFC

如何触发一个盒子的bfc

> position:absolute;
>
> display:inline-block;
>
> float:left/right;
>
> overflow:hidden;

解决margin塌陷问题，改变父级的渲染规则，使父级变成一个bfc，子级和父级之间产生的margin塌陷问题就解决了。

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .wrapper{
    margin-left: 100px;
    margin-top: 100px;
    width: 100px;
    height: 100px;
    background-color: black;
    /* border-top: 1px solid red;  */  /* 暴力解决问题 */
    overflow: hidden;  /* 解决margin塌陷问题 */
  }
  .content{
    margin-left: 50px;
    margin-top: 50px;
    width: 50px;
    height: 50px;
    background-color: green;
  }
</style>


<div class="wrapper">
  <div class="content"></div>
</div>
```







---
### HTML之img标签

初始化

```css
img {
    display: block;
}
```

图片是内联元素，同时又是替换元素，替换元素是能设置宽高的。

内联元素通过display:block; 转成块状元素，即可设置margin值。








相邻的普通元素（非浮动元素），上下边距并不是简单的相加，而是取其中较大的边距值。这种现象叫做margin重叠
