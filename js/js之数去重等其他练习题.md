## js之数组去重等习题

编写type函数，输出对应的数据类型

```javascript
function type(target) {
    var ret = typeof(target),
        template = {
            "[object Array]": "array",
            "[object Object]": "object",
            "[object Number]": "number - object",
            "[object Boolean]": "boolean - object",
            "[object String]": "string - object"
        }
    if (target == null) {
        return "null";
    } else if (ret == "object") {
        var str = Object.prototype.toString.call(target);
        return template[str];
    } else {
        return ret;
    }
}
console.log(type(null)); // null
console.log(type(function() {})); // function
console.log(type(true)); // boolean
console.log(type({})); // object
console.log(type([])); // array
console.log(type("abd")); // string
```



```javascript
// 数组去重
var arr = [0, 0, 1, 1, 2, 2, 3, 3, "a", "a"]

Array.prototype.unique = function() {
    var obj = {},
        newArr = [],
        len = arr.length;
    for (var i = 0; i < len; i++) {
        if (!obj[this[i]]) {
            obj[this[i]] = 1; // 赋值必须为非假的字符串，0、undefined、false都不可以
            newArr.push(this[i]);
        }
    }
    return newArr;
}

console.log(arr.unique()) // [1, 2, 3, "a"]
```



```javascript
// 一旦经历了var的操作，所得出的属性，window，这种属性叫做不可配置属性
// 不可配置的属性delete不掉
var num = 123;
console.log(delete num); // false 
console.log(delete window.num); // false
num2 = 234;
console.log(delete num2); //
```



this && call

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, sex) {
    Person.call(this, name, age); // 借用Person实现this功能
    this.sex = sex;
}

var student = new Student('zhang', 18, 'male');
console.log(student);
```



闭包的另一种写法，不一定非得return

只要将内部函数拿出来到外部执行，同时带着外部函数的执行期上下文，就为闭包。

```javascript
var obj = {}

function a() {
    var aa = 123;

    function b() {
        console.log(aa);
    }
    obj.fun = b;  
}
a()
console.log(obj.fun());
```

闭包实现私有化属性的例子

```javascript
function Person(name) {
    // this = {
    //     makeMoney: function(){}
    //     offer: function(){}
    // }
    var money = 100;
    this.name = name;
    this.makeMoney = function() {
        money++;
        console.log(money);
    }

    this.offer = function() {
            money--;
            console.log(money);
        }
    // return this;
}
var person = new Person('zhang');
console.log(person.name);
console.log(person.makeMoney());
console.log(person.offer())
```



```javascript
(function() {
    console.log(typeof arguments); // object
}());
```



```javascript
var h = function a() {
    return 23;
}
console.log(typeof a()); // Error: a is not defined
```



**找出字符串中第一个只出现一次的字母**

阿里巴巴面试题
如下代码可能有待提高

```javascript
// 一个字符串[a-z]组成，请找出该字符串第一个只出现一次的字母； 

// var str = "wurvoqfewurowqeraiweorispsdufbsodk";
var str = "qwqwaeeb"

function firstNoRepeat(str) {
    var len = str.length,
        obj = {};
    for (var i = 0; i < len; i++) {
        var char = str.charAt(i);
        if (!obj[char]) {
            obj[char] = { count: 1 }
        } else {
            obj[char] = { count: obj[char].count + 1 }
        }
    }

    for (var prop in obj) {
        if (1 == obj[prop].count) {
            console.log(prop, obj[prop]);
            return;
        }
    }
}

firstNoRepeat(str)
```

