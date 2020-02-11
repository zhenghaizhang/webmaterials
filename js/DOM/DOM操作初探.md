## DOM操作初探

什么是DOM

- DOM --> Document Object Model

- DOM定义了表示和修改文档所需的方法。DOM对象即为宿主对象，由浏览器厂商定义，用来操作HTML和XML功能的一类对象的集合。也有人称DOM是对HTML以及XML的标准编程接口。



对节点的增删改查

- 查
  - 查看元素节点
    - document代表整个文档
    - document.getElementById() // 元素id在IE8以下的浏览器，不区分id大小写，而且也返回匹配name属性的元素。
    - .getElementsByTagName() // 标签名
    - .getElementsByName() // 需注意，只有部分标签name可生效（表单，表单元素，img，iframe）
    - .getElementsByClassName() // 类名 -->ie8和ie8以下的ie版本中没有，可以多个class一起
    - .querySelector() // CSS选择器  在ie7和ie7以下的版本中没有
    - .querySelectorAll() // CSS选择器 在ie7和ie7以下的版本中没有。
  - 



```html
<div></div>

<script type="text/javascript">
  var div = document.getElementsByTagName('div')[0];
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = "red";

  var count = 0;
  div.onclick = function() {
    count++;
    if (count % 2 == 1) {
      this.style.backgroundColor = 'green';
      this.style.width = "200px";
      this.style.height = "50px";
      this.style.borderRadius = "50%";
    } else {
      div.style.width = "100px";
      div.style.height = "100px";
      div.style.backgroundColor = "red";
    }

  }
</script>
```

**实现选项卡操作，涉及闭包和立即执行函数。**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>选项卡案例</title>
    <link rel="stylesheet" href="./index.css">
    <style type="text/css">
        button.active {
            background-color: yellow;
        }
        
        div.content {
            display: none;
            width: 200px;
            height: 200px;
            border: 2px solid red;
        }
    </style>
</head>

<body>
    <button class="active">111</button>
    <button>222</button>
    <button>333</button>
    <div class="wrapper">
        <div class="content" style="display: block;">111</div>
        <div class="content">222</div>
        <div class="content">333</div>
    </div>

    <script type="text/javascript">
        var btn = document.getElementsByTagName('button');
        var div = document.getElementsByClassName("content");
        for (var i = 0; i < btn.length; i++) {
            (function(n) {
                btn[i].onclick = function() {
                    for (var j = 0; j < btn.length; j++) {
                        btn[j].className = "";
                        div[j].style.display = "none";
                    }
                    this.className = "active";
                    div[n].style.display = "block"
                }
            }(i));
        }
    </script>
    <script src="./index3.js"></script>
</body>

</html>
```

**实现方块的移动**

```javascript
var div = document.createElement('div');
document.body.appendChild(div);
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "red";
div.style.position = "absolute";
div.style.left = "0";
div.style.top = "0";
var speed = 1;

var timer = setInterval(function() {
  speed += speed / 20;
  div.style.left = parseInt(div.style.left) + 1 + "px";
  div.style.top = parseInt(div.style.top) + 1 + "px";
  if (parseInt(div.style.top) > 200 && parseInt(div.style.left) > 200) {
    clearInterval(timer);
  }
}, 100); // 定时函数，100毫秒运行一次
```

通过鼠标按键实现方块上下左右偏移。

```javascript
<script type="text/javascript">
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = "red";
  div.style.position = "absolute";
  div.style.left = "0";
  div.style.top = "0";
  var pianyi = 10; // 偏移速度

  document.onkeydown = function(e) {
    if (e.which == 37) { // 左
      div.style.left = parseInt(div.style.left) - pianyi + "px";
    } else if (e.which == 38) { // 上
      div.style.top = parseInt(div.style.top) - pianyi + "px";
    } else if (e.which == 39) { // 右
      div.style.left = parseInt(div.style.left) + pianyi + "px";
    } else if (e.which == 40) { // 下
      div.style.top = parseInt(div.style.top) + pianyi + "px";
    }
    // 左上右下 37 38 39 40 
  }
</script>
```

实现鼠标滑过，网格颜色变化的功能效果。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DOM</title>
    <link rel="stylesheet" href="./index.css">
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            box-sizing: border-box;
            float: left;
            width: 20px;
            height: 20px;
            border: 1px solid black;
            ;
        }
        
        ul {
            list-style: none;
            width: 400px;
            height: 400px;
        }
    </style>
</head>

<body>
    <ul>
        <li img-data="0"></li>
        <!--此处400个li标签-->

        <!-- li[img-date="0"]*40 -->
    </ul>


    <script type="text/javascript">
        var ul = document.getElementsByTagName('ul')[0];
        ul.onmouseover = function(e) {
            var event = e || window.event;
            var target = event.target || event.srcElement;
            target.style.backgroundColor = "rgb(255,255," + target.getAttribute('img-data') + ")";
            target.setAttribute('img-data', parseInt(target.getAttribute('img-data')) + 10);
        }
    </script>
    <script src="./index3.js"></script>
</body>

</html>
```

