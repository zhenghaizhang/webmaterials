## 继承模式，命名空间，对象枚举

继承发展史

- 传统形式-->原型链

  - 过多的继承了没用的属性

- 借用构造函数

  - 不能继承借用构造函数的原型
  - 每次构造函数都要夺走一个函数

- 共享原型

  - 不能随便改动自己的原型

    ```javascript
    Father.prototype.lastName = "zhang"
    
    function Father() {}
    
    function Son() {}
    
    function inherit(Target, Origin) {
        Target.prototype = Origin.prototype
    }
    inherit(Son, Father);
    var son = new Son();
    ```

- 圣杯模式

  ```javascript
  Father.prototype.lastName = "zhang"
  
  function Father() {}
  
  function Son() {}
  
  // 圣杯模式
  function inherit(Target, Origin) {
  
      function F() {};
  
      F.prototype = Origin.prototype
      Target.prototype = new F();
      Target.prototype.constructor = Target;
      Target.prototype.uber = Origin.prototype;
  }
  inherit(Son, Father);
  var son = new Son();
  var father = new Father();
  ```

  **圣杯模式的Yahoo写法**

  ```javascript
  var inherit = (function() {
      var F = function() {};
      return function(Target, Origin) {
          F.prototype = Origin.prototype;
          Target.prototype = new F();
          Target.prototype.constructor = Target;
          Target.prototype.uber = Origin.prototype;
      }
  }());
  ```




命名空间

- 管理变量，防止污染全局，适用于模块化开发；

  ```javascript
  var name = 'abc';
  var init = (function() {
      var name = 'bcd';
  
      function callName() {
          console.log(name);
      }
      return function() {
          callName();
      }
  }());
  init();
  ```



如何实现链式调用模式（模仿jquery）

- obj.eat().smoke().drink().eat().sleep();

  ```javascript
  var deng = {
      smoke: function() {
          console.log('Smoking...')
          return this;
      },
      drink: function() {
          console.log('Drink....')
          return this;
      },
      perm: function() {
          console.log('perming...')
          return this;
      }
  }
  console.log(deng.smoke().drink().perm());
  ```

- 属性表示方法

  - obj.prop

  - obj]["prop"]

    ```javascript
    var deng = {
        son1: { name: "xiaoyi" },
        son2: { name: "xiaoer" },
        son3: { name: "xiaosan" },
        son4: { name: "xiaosi" },
        saySon: function(num) {
            return this['son' + num]
        }
    }
    ```

对象的枚举

- for in 

  ```javascript
  var deng = {
      son1: { name: "xiaoyi" },
      son2: { name: "xiaoer" },
      son3: { name: "xiaosan" },
      son4: { name: "xiaosi" },
      saySon: function(num) {
          return this['son' + num]
      }
  }
  
  for (var key in deng) {
      console.log(key);
      console.log(deng[key])
  }
  ```

- hasOwnProperty

  ```javascript
  // 判断是不是系统的方法和属性
  var deng = {
      son1: { name: "xiaoyi" },
      son2: { name: "xiaoer" },
      son3: { name: "xiaosan" },
      son4: { name: "xiaosi" },
      saySon: function(num) {
          return this['son' + num]
      },
      __proto__: {
          lastName: "zhang"
      }
  }
  
  for (var key in deng) {
      if (deng.hasOwnProperty(key)) {//此处过滤掉__proto__
          console.log(key);
          console.log(deng[key])
      }
  }
  ```

- in 

- instanceof 

  A instanceof B // A对象是不是B构造函数构造出来的

  **看A对象的原型链上有没有B的原型**

  

  判断数组[]和对象{}的类型的三种方法

  ``` 
  var arr = [];
  var obj = {};
  // 方法1
  console.log(arr.constructor); // ƒ Array() { [native code] }
  console.log(obj.constructor); // ƒ Object() { [native code] }
  
  // 方法2
  console.log(arr instanceof Array);  // true
  console.log(obj instanceof Object);  // true
  
  // 方法3
  Object.prototype.toString.call({}) // "[object Object]"
  Object.prototype.toString.call([]) // "[object Array]"
  ```

  
