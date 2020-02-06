## js之this和arguments.callee和caller

- 函数预编译过程this --> window
- 全局作用域里 this --> window
- call/apply可以改变函数运行时this指向
- obj.func()；func()里面的this指向obj；



```javascript
var name = "222";
var a = {
    name: "111",
    say: function() {
        console.log(this.name);
    }
}
var fun = a.say;
fun() // 222
a.say() // 111
var b = {
    name: "333",
    say: function(fun) {
        fun(); // 没有this，走的是预编译过程，全局
    }
}
b.say(a.say) // 222
b.say = a.say;
b.say(); // 333
```

```javascript
var foo = 123;

function print() {
    this.foo = 234;
    console.log(foo);
}
print(); // 234
```

```javascript
var foo = 123;

function print() {
    var foo = 456;
    this.foo = 789;
    console.log(foo);
}
print(); // 456
```

```javascript
var foo = 123;

function print() {
    this.foo = 234;
    console.log(foo);
}
new print();  // 123
print();  // 234
```

```javascript
var a = 5;

function test() {
    a = 0;
    console.log(a);
    console.log(this.a);
    var a;
    console.log(a);
}
test(); // 0 5 0 
new test(); // 0 undefined 0
```

```javascript
var bar = { a: "002" };

function print() {
    bar.a = "a";
    Object.prototype.b = 'b';
    return function inner() {
        console.log(bar.a);
        console.log(bar.b);
    }
}
print()(); // a b
```





arguments.callee 和 caller

- arguments.callee   函数的引用

  ```javascript
  function test() {
      console.log(arguments.callee); // test function ...
      console.log(arguments.callee == test); // true
  }
  test()
  ```
  ```javascript
  var num = (function(n) {
      if (n == 1) {
          return 1;
      }
      return n * arguments.callee(n - 1)
  }(10));
  console.log(num); // 3628800
  ```
  ```javascript
  function test() {
      console.log(arguments.callee);  // test function ...
  
      function demo() {
          console.log(arguments.callee);   // demo function ...
      }
      demo();
  }
  test();
  ```

- func.caller 返回调用的环境

  ```javascript
  function test() {
      demo();
  }
  
  function demo() {
      console.log(demo.caller);
  }
  test();  // ƒ test() { demo();}
  ```

