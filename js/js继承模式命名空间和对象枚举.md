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
