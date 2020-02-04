## 闭包

当内部函数被保存到外部时，将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄露。

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

