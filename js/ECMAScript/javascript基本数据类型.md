## JavaScript数据类型

- 空（Null）
- 未定义（Undefined）
- 数字（Number）
- 字符串（String）
- 布尔值（Boolean）
- 符号（Symbol）
- 对象（Object）

基础类型的数据在被引用或拷贝时是值传递，会创建一个完全相等的变量。

引用类型只是创建一个指针指向原有的变量，实际上两个变量是共享这个数据的，并没有重新创建一个新的数据。

### Null

> 只有唯一的一个值null，都可以表示空值。
>
> null是JavaScript保留关键字
>
> 而undefined只是一个常量



### Undefined

> 只有一个值undefined

- 引用已声明但未初始化的变量
- 引用未定义的对象属性
- 执行无返回值函数
- 执行void表达式
- 全局常量window.undefined或undefined

```javascript
var a; //undefined
var o = {}
o.b // undefined
(()=>{})() // undefined
void 0 // undefined
window.undefined // undefined
```

如下代码当x满足条件时执行fn()否则不执行任何操作

```javascript
x>0 && x<5 ? fn() : void 0;
```

如何判断一个变量的值是否为undefined呢？

```javascript
if(typeof x === 'undefined'){}
```

### Boolean

> Boolean数据类型有两个值：true和false

注意：不要将各种表达式和变量转换成Boolean数据类型来当做判断条件。

### Number

- NaN（Not a Number）通常在计算失败的时候会得到该值，要判断一个变量是否为NaN则可以通过Number.isNaN函数进行判断。

- Infinity是无穷大，加上负号”-“会变成无穷小

  在某些场景下比较有用，比如通过数值来表示权重或者优先级

  Infinity可以表示最高优先级或最大权重

> 可能会出现精度问题
>
> 0.1+0.2 // 0.300000004

### String

> 笔试题：千分位分隔符的实现？
>
> 数值转成字符，从右向左，每隔三位加一个千分位分隔符

### Symbol

是ES6中引入的新数据类型，它表示一个唯一的常量。

```javascript
var a = Symbol('1')
var b = Symbol(1)
a.description === b.description // true
var c = Symbol({id:1})
c.description // [Object Object]
var _a = Symbol('1')
_a == a //false
```

作用：避免常量值重复

```javascript
const KEY = {
  alibaba: Symbol(),
  baidu: Symbol(),
  ...
  bytedance: Symbol()
}
```

不关心值本身，只关心值的唯一性。

避免对象属性覆盖。

> 假设有这样一个函数fn，需要对传入的对象参数添加一个临时属性user，但可能该对象参数中已经有这个属性了，如果直接赋值就会覆盖之前的值，此时就可以使用Symbol来避免这个问题。

```javascript
function fn(o){
  const s = Symbol()
  o[s] = 'zzz'
}
```

### Object

> 简单的说，Object类型数据就是键值对的集合。
>
> 键是一个字符串（或者Symbol），值可以是任意类型的值。

复杂的说，Object又包括很多子类型

比如：Date、Array、Set、RegExp

- 由于引用类型在赋值时值传递指针，这种拷贝方式称为浅拷贝

- 而创建一个新的与之相同的引用类型数据的过程称之为深拷贝

> 通过等号”=“赋值只是浅拷贝
>
> 要实现真正的拷贝操作则需要通过遍历键来赋值对应的值
>
> 这个过程中如果遇到Object类型还需要再次进行遍历。





## 补充：类型转换

什么是类型转换？

> JavaScript是弱类型的语言，相对于其他高级语言有一个特点，那就是在处理不同数据类型运算或逻辑操作时，会强制转换成同一数据类型。

| -         | String          | Number          | Boolean              |
| --------- | --------------- | --------------- | -------------------- |
| undefined | "undefined"     | NaN             | false                |
| null      | "null"          | 0               | false                |
| String    | -               | 对应的数值或NaN | 除空字符串外都为true |
| Number    | 对应的字符串    | -               | 除0外都为true        |
| Boolean   | ”true“或”false“ | 1或0            | -                    |
| Symbol    | 不可转换        | 不可转换        | true                 |

- 把基本类型的数据转换成对应的对象过程称之为”装箱转换“
- 把数据对象转换为基本类型的过程称之为”拆箱转换“

会触发隐式地类型转换的操作

- 运算相关操作符包括+、-、+=、++、*、/、%、<<、&等
- 数据比较相关的操作符包括>、<、==、<=、>=、===
- 逻辑判断相关的操作符包括&&、！、||、三目运算符

无限递归调用？clone函数

```javascript
var a = {}
var b = {}
a.b = b
b.a = a
```

如何避免此种情况呢？

> 把已添加的对象记录下来，这样下次碰到相同的对象引用时，直接指向记录中的对象即可。
>
> ES6的WeakMap对象



## 小结

深入理解了JavaScript的6种基础数据类型和1种引用数据类型

熟知6种基础数据类型之间的转换关系

引用类型则重点讲了如何深拷贝一个对象


谢谢！
