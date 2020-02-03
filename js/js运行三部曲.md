

JS运行三部曲

- 语法分析

- 预编译

  **函数声明整体提升**

  **变量  声明提升**

- ```javascript
  console.log(a); # undefined
  var a = 123;
  ```

  ```javascript
  test();
  function test(){
    console.log('a');
  }
  ```

- 解释执行



**预编译前奏**

- imply global 暗示全局变量：即任何变量，如果变量未经声明就赋值，此变量就为全局对象所有。
  - eg: a = 123;
  - eg: var a = b = 123;
- 一切声明的全局变量，全是window的属性。
  - eg var a = 123; ===> window.a = 123;

window就是全局



预编译  四部曲

- 创建AO对象（Activation Object执行期上下文）产生的存储空间库
- 找形参和变量声明，将变量和形参名作为AO属性名，值为undefined
- 将实参值和形参统一
- 在函数体里面找函数声明，值赋予函数体

接下来执行函数体。



//预编译发生在函数执行的前一刻

开始创建的AO对象

```javascript
AO {
  a: undefined,
  b: undefined
}
```

执行过程中纠正的AO对象

```javascript
AO {
  a: 1,
  b: undefined
}
```

```javascript
AO {
  a: function a () {},
  b: undefined
}
```

```javascript
AO {
  a: function a () {},
  b: undefined,
  d: function d () {}
}
```

```javascript
AO {
  a: 123, 
  b: function () {},
  d: function d() {}
}
```

如上，如下代码执行的结果如下：

```javascript
function fn(a) {
    console.log(a);  # f a() {}
    var a = 123;
    console.log(a); # 123

    function a() {}
    console.log(a);  #123 
    var b = function() {}
    console.log(b); # f () {}

    function d() {}
    console.log(d); # f () {}
}
fn(1);
```

再一个例子
```javascript
function test(a, b) {
    document.write(a); // 1
    c = 0;
    var c;
    a = 3;
    b = 2;
    document.write(b); // 2

    function b() {}

    function d() {}
    document.write(b); // 2
}
test(1);
```

再来一个例子
```javascript
function test(a, b) {
    console.log(a); // function () {}
    console.log(b); // undefined
    var b = 234;
    console.log(b); // 234
    a = 123;
    console.log(a); // 123

    function a() {}
    var a;
    b = 234;
    var b = function() {};
    console.log(a); // 123
    console.log(b); // function () {}
}
test(1);
```


针对全局情况

- 生成了一个GO对象；Global Object；GO === window

  ```javascript
  function test() {
      var a = b = 123;
      console.log(window.a); // undefined
      console.log(window.b); // 123
  }
  test();
  ```

  全局预编译发生在全局执行的前一刻；

```javascript
console.log(test); // function test(test){...}

function test(test) {
    console.log(test); // function test () {}
    var test = 234;
    console.log(test); // 234

    function test() {}
}
test(1);
var test = 123;
```

