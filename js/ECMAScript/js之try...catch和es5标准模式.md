
## js之try...catch和es5标准模式

**try...catch**

- try{}catch(e)finally{}
- error.name的六种值对应的信息：
  - ~~EvalError：eval()的使用与定义不一致~~
  - RangeError：数值越界
  - ReferenceError：非法或不能识别的引用数值
  - SyntaxError：发生语法解析错误
  - TypeError：操作数类型错误
  - URIError：URI处理函数使用不当



try里面发生错误，不会执行错误后的try里面的代码

```javascript
try {
    console.log('a');
    console.log(b);
    console.log('c');
} catch (e) {
    console.log(e.name + " : " + e.message);
}
console.log('d');
// a
// ReferenceError : b is not defined
// d 
```



es5严格模式

- "use strict"  字符串的方式为了兼容老的语法，不会报错

  - 不再兼容es3的一些不规则语法。使用全新的es5规范。

  - 两种用法：

    - 全局严格模式
    - 局部函数内严格模式（推荐）

  - 就是一行字符串，不会对不兼容严格模式的浏览器产生影响。

  - 不支持**with arguments callee func caller**，**变量赋值前必须声明**，局部this必须被赋值（Person.call(null/undefined)赋值什么就是什么），拒绝重复属性和参数

    ```javascript
    "use strict";  // 启动es5.0严格模式的方法，最顶端
    
    function test() {
        console.log(arguments.callee);
    }
    test();  // 报错
    ```

    with的作用：可以改变作用域链，with中有对象，此对象位于作用域链的最顶端。

    with的劣势：会导致系统变慢，降低效率；

    ```javascript
    var obj = {
        name: "obj"
    }
    var name = "window";
    
    function test() {
        var name = "scope";
        with(obj) {
            console.log(name);
        }
    }
    test(); // obj
    ```

    with的用法（避免污染全局变量）

    ```javascript
    var org = {
        dp1: {
            zhang: {
                name: "zhang",
                age: 31
            },
            zhou: {
                name: "zhou",
                age: 18
            }
        },
        dp2: {
            fang: {
                name: "fang",
                age: 19
            }
        }
    }
    with(org.dp1.zhang) {
        console.log(name); // zhang
    }
    with(org.dp2.fang) {
        console.log(name); // fang
    }
    ```

