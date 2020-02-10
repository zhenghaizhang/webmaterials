## 立即执行函数

- 定义：此函数没有声明，在一次执行过后即释放。适合做初始化工作。

  ```javascript
  (function() {
      var a = 123;
      var b = 234;
      console.log(a + b);  //357
  }())
  ```

  ```javascript
  (function(a, b, c) {
      console.log(a + b + c * 2);  // 9
  }(1, 2, 3))
  ```

  ```javascript
  var num = (function(a, b, c) {
      var d = a + b + c * 2;
      return d;
  }(1, 2, 3));
  console.log(num);  // 9
  ```

  ```javascript
  (function (){}()); // W3C建议第一种
  (function (){})();
  ```

  **只有表达式才能被执行符号执行**

  函数声明不是表达式

  ```javascript
  function test(){
    var a = 1;
  }();  // 报错语法错误
  ```

  函数表达式是表达式，可被执行符号执行；

  ```javascript
  var test = function () {
    console.log('a');
  }();
  ```

  能被执行符号执行的表达式，函数的名字自动被忽略。（成为了立即执行函数）

  ```javascript
  + function test() {
      console.log('a');
  }();    // +（正）号将函数声明变成了表达式，执行完成之后，函数的名字test自动被忽略；
  ```

特例一个，不会报错

```javascript

function test(a, b, c, d){
  console.log(a + b + c + d);
}(); // 报错
```

```javascript
function test(a, b, c, d){
  console.log(a + b + c + d);
}(1, 2, 3, 4); // 不会报错


// JS将上面代码识别为如下代码执行：
function test(a, b, c, d){
  console.log(a + b + c + d);
}   // 函数声明
(1, 2, 3, 4);  // 表达式
```

