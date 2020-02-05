## 闭包

**当内部函数被保存到外部时，将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄露。**



闭包的作用

- 实现公有变量

  - 函数累加器

- 可以做缓存（存储结构）

  - ```javascript
    function eater() {
        var food = "";
        var obj = {
            eat: function() {
                console.log('I am eating ' + food);
                food = "";
            },
            push: function(myFood) {
                food = myFood;
            }
        }
        return obj;
    }
    
    var eater1 = eater();
    eater1.push('banana');
    eater1.eat();
    ```

- 可以实现封装，属性私有化

  - Person();

- 模块化开发，防止污染全局变量



闭包案例，bug

```javascirpt
function test() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr[i] = function() {
            console.log(i);
        }
    }
    return arr;
}

var myArr = test();
for (var j = 0; j < 3; j++) {
    myArr[j]();
} // 3 3 3
```

闭包案例，解决bug的方法

```javascript
function test() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        // arr[i] = function() {
        //     // console.log(i);
        //     document.write(i + "  ")
        // }
        (function(j) {
            arr[j] = function() {
                console.log(j + " ");
                document.write(j + " ");
            }
        }(i)); // 立即执行函数
    }
    return arr;
}

var myArr = test();
for (var j = 0; j < 3; j++) {
    myArr[j]();
} // 0 1 2
```


> 闭包的经典案例：
>
> ```javascript
> <ul>
>         <li>a</li>
>         <li>a</li>
>         <li>a</li>
>         <li>a</li>
>     </ul>
> ```
>
> 使用原生js，addEventListener，给每个li元素绑定一个click事件，并输出他们的顺序。

> 错误写法：
>
> ```javascript
> function test() {
>     var liCollection = document.getElementsByTagName('li');
>     for (var i = 0; i < liCollection.length; i++) {
>         liCollection[i].onclick = function() {
>             console.log(i);
>         }
>     }
> }
> 
> test();
> ```

> 正确写法：
>
> ```javascript
> function test() {
>     var liCollection = document.getElementsByTagName('li');
>     for (var i = 0; i < liCollection.length; i++) {
>         (function(j) {
>             liCollection[j].onclick = function() {
>                 console.log(j);
>             }
>         }(i)); // 立即执行函数
>     }
> }
> 
> test();
> ```
>
> 
