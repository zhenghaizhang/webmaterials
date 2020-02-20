## 正则表达式



补充知识

- 转义字符"\\"

- 多行字符串` 或在行末增加\
- 字符串换行符号\n



RegExp

正则表达式的作用：匹配特殊字符或有特殊搭配原则的字符的最佳选择。



两种创建方式

- 直接量——推荐
- new RegExp();



```javascript
// 验证正则表达式
var reg = /abc/;
var str = "abcd";
console.log(reg.test(str)); // true
```

```javascript
// 验证new RegExp()和RegExp()
var reg = /abc/m;
var reg1 = new RegExp(reg); // 此处reg1和reg不是一个东西
var reg2 = RegExp(reg); // 此处reg2和reg是一个东西  reg2是reg的一个引用
```

```javascript
var regi = /abc/i; // ignoreCase 忽略大小写
var regg = /abc/g; // 执行全局匹配（查找所有匹配，而非在找到第一个匹配后停止）
var regm = /abc/m; // 执行多行匹配
```

```javascript
var reg = /^a/mg; // m多行匹配
var str = "abcde\na"
console.log(str.match(reg)); // ["a", "a"]
```

正则表达式测试和字符串根据正则表达式查找

```javascript
var reg = /^a/mg;
var str = "abcde\na"
console.log(reg.test(str)); // true
console.log(str.match(reg)); // ["a","a"]
```

正则表达式[a-z]表示范围

```javascript
var reg = /[0-9]{3}/g
var str = "123djslfsdjl332433lj;dfslfjls"
console.log(str.match(reg));
```

正则表达式\w表示范围{0-9A-z_]}，等，见如下

```javascript
// \w === [0-9A-z_]
// \W === [^\w]
// \d === [0-9]
// \D === [^\d]
// \s === [\t\n\r\v\f]
// \S === [^\s]
// \b === 单词边界
// \B === 非单词边界
// . === [^\r\n]

// 贪婪匹配原则
// n+   {1, }
// n*   {0, }
// n?   {0, 1}
// n{x} {x} //x个
// n{x, y} {x, y}
```

练习

```javascript
var reg = /\bc/g; // \b单词边界
var str = "abc cde fgh";
console.log(str.match(reg)); // ["c"]
```

检验一个字符串首尾是否有数字

```javascript
var reg = /^\d|\d$/g;
var str = "1d2";
console.log(str.match(reg));
console.log(reg.test(str));
```

RegExp对象方法

- compile：编译正则表达式。
- exec：检索字符串中指定的值。返回找到的值，并确定其位置
- test：检索字符串中指定的值，返回true或false。





字符串的replace（直接替换）

```javascript
var str = "abcdefa";
console.log(str.replace('a', 'b')); // bbcdefa
```

正则表达式的replace

```javascript
var reg = /a/g;
var str = "abcdefa";
console.log(str.replace(reg, 'b')); // bbcdefb
```

字符串变形：aabb-->bbaa

```javascript
var reg = /(\w)\1(\w)\2/g;
var str = "aabb";
console.log(str.replace(reg, '$2$2$1$1')); // bbcdefb
```

字符串变形：aabb-->bbaa第二种方法

```javascript
var reg = /(\w)\1(\w)\2/g;
var str = "aabb";
console.log(str.replace(reg, function($, $1, $2) { 
  // 第一个变量是全局
    return $2 + $2 + $1 + $1
})); // bbaa
```





案例：连字符连接的单词改成驼峰表达式

```javascript
// 原始字符串：the-first-name
// 修改后的字符串：theFirstName

var reg = /-(\w)/g;
var str = "the-first-name";
console.log(str.replace(reg, function($, $1) {
    return $1.toUpperCase();
}));
```

连字符连接的单词改成首字母大写方式

```javascript
// 原始字符串：the-first-name
// 修改后的字符串：The-First-Name

var reg = /(^(\w)|-(\w))/g;
var str = "the-first-name";
console.log(str.replace(reg, function($, $1) {
    return $1.toUpperCase();
}));
```



> ?=n：匹配任何其后紧接指定字符串n的字符串

```javascript
// 正向预查，正向断言
var str = "abaaaa";
var reg = /a(?=b)/g;

console.log(str.match(reg)); // 其后紧接指定字符串b
```




默认为贪婪模式，改成非贪婪模式

```javascript
// 改成非贪婪模式

var str = "aaaaaa";
var reg = /a+/g; // 贪婪模式
var reg2 = /a+?/g; // 非贪婪模式

console.log(str.match(reg)); // aaaaaa
console.log(str.match(reg2)); // ["a", "a", "a", "a", "a", "a"]
```

案例：将字符串中连续重复的元素去重

```javascript
var str = "aaaaaaabbbbbbcccc"
var reg = /(\w)\1*/g
console.log(str.replace(reg, "$1")); // abc
```

案例：将大数字改成千分位分隔符形式

```javascript
// 1000000   --> 1,000,000
var str = "112000000000"
var reg = /(?=(\B)(\d{3})+$)/g;
// 空后面跟着非单词边界，数字从后往前数每三个为一组
console.log(str.replace(reg, ",")); // 112,000,000,000
```

