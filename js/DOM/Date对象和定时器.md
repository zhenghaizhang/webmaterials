## Date对象和定时器

**日期对象**  系统提供好的

封装函数，打印当前是何年何月何日，几分几秒。

```javascript
var date = new Date(); // 时刻
console.log(date)
```

测试程序执行效率

```javascript
var firstTime = new Date().getTime()
for (var i = 0; i < 100000000; i++) {}
var lastTime = new Date().getTime()
console.log(lastTime - firstTime);
```

**js定时器**

- setInterval();  // window上的方法，返回唯一标识，定时循环器

  ```javascript
  // 正确的写法
  var timer = setInterval(function(){}, 1000); // 声明一个变量接收返回值
  ```

  

- setTimeout(); // 推迟一段时间再执行

  ```javascript
  setTimeout(function(){}, 1000); // 1000毫秒之后再执行function函数
  ```

  

- clearInterval(); // 清除setInterval的唯一标识

- clearTimeout(); // 清除setTimeout的唯一标识

- 全局对象window上的方法，内部函数this指向window

- 注意：setInterval("func()", 1000); // 每隔1000毫秒执行一次func()

  - func() 可以换成一个字符串，js会按照JavaScript语法执行；

    ```javasc
    setInterval("console.log('a')", 1000); // 不建议如此写
    ```

案例计时器，三分钟截止

```html
<head>
    <style type="text/css">
        input {
            border: 1px solid rgba(0, 0, 0, .8);
            text-align: right;
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>

<body>
    minutes: <input type="text" value="0"> seconds: <input type="text" value="0">
</body>
```

```javascript
var minutesNode = document.getElementsByTagName('input')[0];
var secondsNode = document.getElementsByTagName('input')[1];

var minutes = 0,
    seconds = 0;
var timer = setInterval(function() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    secondsNode.value = seconds;
    minutesNode.value = minutes;
    if (minutes == 3) {
        clearInterval(timer);
    }

}, 1000);
```

