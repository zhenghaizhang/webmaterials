## DOM选择器和节点类型



对节点的增删改查

- 查

  - 查看元素节点

    - document代表整个文档
    - document.getElementById() // 元素id在IE8以下的浏览器，不区分id大小写，而且也返回匹配name属性的元素。
    - .getElementsByTagName() // 标签名
    - .getElementsByName() // 需注意，只有部分标签name可生效（表单，表单元素，img，iframe）
    - .getElementsByClassName() // 类名 -->ie8和ie8以下的ie版本中没有，可以多个class一起
    - .querySelector() // CSS选择器 在ie7和ie7以下的版本中没有
    - .querySelectorAll() // CSS选择器 在ie7和ie7以下的版本中没有。

    **querySelector和querySelectorAll是非实时选择器，其他为实时选择器。**

遍历节点树

- parentNode -->父节点（最顶端的parentNode为#document）
- childNodes --> 子节点们
- firstChild  --> 第一个子节点
- lastChild  -->  最后一个子节点
- nextSibling  --> 后一个兄弟节点
- previousSibling  --> 前一个兄弟节点

基于元素节点树的遍历

- parentElement  --> 返回当前元素的父元素节点（IE不兼容）
- children  -->  只返回当前元素的元素子节点
- node.childElementCount === node.children.length 当前元素节点的子节点
- firstElementChild  --> 返回的是第一个元素节点（IE不兼容）
- lastElementChild  --> 返回的是最后一个元素节点（IE不兼容）
- nextElementSibling  --> 返回后一个兄弟节点
- previousElementSibling  --> 返回前一个兄弟节点

返回子节点标签，类似系统自带childNodes函数

```javascript
<body>
    <div>
        <strong></strong>
        <span></span>
        <em></em>
        <i></i>
        <b></b>
    </div>
    <script type="text/javascript">
        var div = document.getElementsByTagName('div')[0];

        function retElementChild(node) {
            var temp = {
                    length: 0,
                    push: Array.prototype.push,
                    splice: Array.prototype.splice
                },
                child = node.childNodes,
                len = child.length;
            for (var i = 0; i < len; i++) {
                if (child[i].nodeType === 1) {
                    temp.push(child[i]);
                }
            }
            return temp;
        }
        var childs = retElementChild(div);
        console.log(childs);
    </script>
</body>
```



节点的类型

- 元素节点   —— 1
- 属性节点   ——2 
- 文本节点   ——3 
- 注释节点   ——8
- document  ——9
- DocumentFragment  ——11

获取节点类型   nodeType

节点的四个属性

- nodeName

  - 元素的标签名，以大写形式表示，只读

- nodeValue

  - Text节点或Comment节点的文本内容，可读写

- nodeType

  - 该节点的类型，只读

    ```html
    <div id="only" class="demo"></div>
    
    <script type="text/javascript">
      var div = document.getElementsByTagName('div')[0];
      console.log(div.attributes[0].nodeType);// 2
    </script>
    ```

- attributes

  - Element节点的属性集合

节点的一个方法   node.hasChildNodes();



