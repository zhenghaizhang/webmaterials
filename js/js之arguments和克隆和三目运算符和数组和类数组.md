## js之arguments和克隆和三目运算符和数组和类数组

**深度拷贝**

深度拷贝的实现步骤：

> 遍历对象 for(var prop in obj)
>
> 1.判断是不是原始值 typeof()  object 
>
> 2.判断是数组还是对象
>
> 3.建立相应的数组或对象
>
> 递归

```javascript
var obj = {
    name: "zhangsan",
    age: 31,
    card: ['visa', 'master'],
    wife: {
        name: "fangyuan",
        son: {
            name: "zhangwu"
        }
    },
    say: function() {
        return "say";
    }
}

function deepClone(origin, target) {
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[Object Array]";
    for (var prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            if (origin[prop] !== null && typeof(origin[prop]) == "object") {
                // if (toStr.call(origin[prop]) == arrStr) {
                //     target[prop] = [];
                // } else {
                //     target[prop] = {};
                // }
                target[prop] = toStr.call(origin[prop]) == arrStr ? [] : {};  // 三目运算符
                deepClone(origin[prop], target[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}

var obj1 = {};
deepClone(obj, obj1);
console.log(obj1);
```

**三目运算符**

条件判断？是(此处执行)：否(此处执行) 并且会返回值

比if...else...强大到可以增加返回值

```javascript
var num = 1 > 0 ? 2 + 2 : 1 + 1;
console.log(num); // 4
```



**数组**

数组基于对象，溢出读取不报错，返回undefined

- 数组的定义

  - new Array(length/content);
  - 字面量  var arr = [];

- 数组的读和写

  - arr[num] // 不可以溢出读，溢出读 undefined
  - arr[num] = xxx; // 可以溢出写

- 改变原数组

  - push，pop，shift，unshift，sort，reverse

    push 和 unshift添加的方向相反

    ```javascript
    // 实现push方法
    var arr = [];
    Array.prototype.push = function() {
        for (var i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
        }
        return this.length;
    }
    arr.push(1, 2, 3);
    console.log(arr);
    ```

    ```javascript
    var arr = [1, 2, 3, 5, 10];
    // 1. 必须写俩形参
    // 2. 看返回值  1）当返回值为负数时，那么前面的数放在前面
    //             2) 当返回值为正数时，那么后面的数放在前面
    //             3） 当返回值为0时，那么顺序不动
    arr.sort(function(a, b) { // 冒泡排序
        return b - a; // 降序
      	return a - b; // 升序
    })
    console.log(arr)
    ```

    给一个有序的数组，乱序

    ```javascript
    var arr = [1, 2, 3, 4, 5, 6]
    arr.sort(function(a, b) {
        return Math.random() - 0.5;
    })
    
    console.log(arr);
    ```

    对象属性排序

    ```javascript
    var zhang = {
        name: "zhangsan",
        age: 18,
        sex: 'male'
    }
    var li = {
        name: "lisi",
        age: 30,
        sex: 'male'
    }
    var wang = {
        name: "wangwu",
        age: 19,
        sex: 'male'
    }
    var arr = [zhang, li, wang]
    arr.sort(function(a, b) {
        return -a.age + b.age;
    })
    console.log(arr);
    ```

    

  - splice

    arr.splice(从第几位开始，截取多少的长度，在切口处添加新的数据)

    ```javascript
    var arr = [1, 2, 3, 5];
    arr.splice(3, 0, 4); // 在第3位添加4
    console.log(arr);  // [1, 2, 3, 4, 5]
    ```

    

- 不改变原数组

  - concat，join --> split，toString，slice

    slice(从该位截取，截取到该位)

    split字符串的方法；



**类数组**

- 属性是索引（数字）属性，必须有length属性，最好加上push方法；

  对象增加上splice之后，变成数组，拥有数组的方法

  类数组关键点在length上

  ```javascript
  var obj = {
      "0": 'a',
      "1": 'b',
      "2": 'c',
      "length": 3,
      push: Array.prototype.push,
      splice: Array.prototype.splice
  }
  obj.push('d')
  console.log(obj)
  ```

  ```javascript
  // 类数组的push方法实现
  Array.prototype.push = function(target) {
      this[obj.length] = target;
      this.length++;
  }
  ```

  

  阿里巴巴笔试题：

  ```javascript
  var obj = {
      "2": 'a',
      "3": 'b',
      "length": 2,
      push: Array.prototype.push
  }
  obj.push('c') //
  obj.push('d') // 
  console.log(obj) // 
  --------
  obj {
    2: "c"
    3: "d"
    length: 4
    push: ƒ push()
  }
  ```

  

