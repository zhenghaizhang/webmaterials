## js对象和包装类

描述对象

```javascript
var obj = {
    name: "MrZhang",
    age: 30,
    sex: "male",
    health: 100,
    smoke: function() {
        console.log('I am smoking!!!');
        this.health--;
    },
    drink: function() {
        console.log('I am drink!!!')
    }
}
```

属性的增、删、改、查

```javascript
obj.wife = "fangyuan"
console.log(obj);
obj.health = 101
console.log(obj.health);
delete obj.age;
```

**当一个变量没声明就使用会报错，当一个对象的属性没声明就使用会返回undefined**

对象的创建方法

- 字面量

  > var obj = {}  plainObject  对象字面量/对象直接量

- 构造函数  函数

  - 系统自带 newObject(); Array(); Number(); Boolean(); String(); Date();

    > *var* obj = new Object();

  - 自定义  大驼峰式命名风格

    > function  Person(){}
    >
    > *var* person1 = new Person();

- Object.create(原型)方法



**构造函数内部原理** 在new之后执行如下三段

- 在函数体最前面隐式的增加this={}空对象
- 执行this.xxx = xxx;
- 隐式的返回this（必须是一个对象，其他类型不予返回）

案例

```javascript
function Car(color) {
    this.color = color;
    this.name = "BMW";
    this.height = "1400";
    this.health = 100;
    this.run = function() {
        this.health--;
    }
}

var car = new Car('yellow');
```



包装类

- new String();
- new Boolean();
- new Number();

undefined 和 null 不能增加属性值；
