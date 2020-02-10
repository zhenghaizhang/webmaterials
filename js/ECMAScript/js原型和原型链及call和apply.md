## js原型和原型链及call和apply

**原型**

- 定义：原型是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。

  ```javascript
  // Person.prototype  -- 原型
  // Person.prototype = {}  是祖先
  Person.prototype.name = "hehe";
  
  function Person() {
      //
  }
  var person = new Person();
  var person1 = new Person();
  ```

- 利用原型特点和概念，可以提取共有属性。

  ```javascript
  Car.prototype.height = 1400;
  Car.prototype.lang = 4900;
  Car.prototype.carName = "BMW";
  // Car.prototype = {
  //     height: 1400,
  //     lang: 4900,
  //     carName: "BMW"
  // }
  function Car(color, owner) {
      this.color = color;
      this.owner = owner;
  }
  var car = new Car('red', 'baoshan');
  var car1 = new Car('yellow', 'fangyuan');
  ```

- 对象如何查看原型-->隐式属性\__proto__

  ```javascript
  person.__proto__
  ```

- 对象如何查看对象的构造函数 --> constructor

  ```javascript
  person.constructor
  ```

**原型链**

- 如何构成原型链

  ```javascript
  Grand.prototype.lastName = "Zhang";
  
  function Grand() {
      //
  }
  var grand = new Grand();
  
  Father.prototype = grand;
  
  function Father() {
      this.name = "zhenghai";
  }
  var father = new Father();
  
  Son.prototype = father;
  
  function Son() {
      this.hobbit = "smoke";
  }
  var son = new Son();
  console.log(son.hobbit);
  console.log(son.name);
  console.log(son.lastName);
  ```

- 原型链上属性的增删改查

- 绝大多数对象最终都会继承自Object.prototype

  ```javascript
  Object.create(null);
  ```

- Object.create(原型); 原型或者null

  ```javascript
  var obj = { name: "baoshan", age: 31 };
  var obj1 = Object.create(obj);
  ```

  ```javascript
  // var obj = Object.create(原型)
  Person.prototype.name = "baoshan"
  function Person() {
  }
  var person = Object.create(Person.prototype);
  ```

null 和 undefined 没有toString()方法；

方法重写

```javascript
Person.prototype = {
    toString: function() {
        return 'hehe';
    }
}

function Person() {

}
var person = new Person();
console.log(person.toString());  // hehe 
```



**call和apply**

- 作用：改变this指向；

  借助于Person构造obj对象

  ```javascript
  function Person(name, age) {
      // this == obj
      this.name = name;
      this.age = age;
  }
  var person = Person('baoshan', '31');
  var obj = {}
  Person.call(obj, "fangyuan", 18); // Person内部的所有this全部变成obj；
  console.log(obj); // {name: "fangyuan", age: 18}
  ```

  

- 区别：后面传的参数形式不同；

  call需要把实参按照形参的个数传进去

  apply后面必须传递一个数组，arguments

```javasc
function test(){}
test(); ----> test.call()
```

call函数作用：改变this指向，借用别人函数实现自己的功能；

```javascript
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Student(name, age, sex, tel, grade) {
    Person.call(this, name, age, sex);
    // Person.apply(this, [name, age, sex]);
    this.tel = tel;
    this.grade = trade;
}
var student = Student('baoshan', 123, 'male', 139, 2019);
// call 改变this指向，借用别人的函数实现自己的功能；
```


