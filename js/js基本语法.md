
变量（variable）

- 变量声明
  - 声明、赋值分解
  - 单一var
- 命名规则
  - 变量名必须以英文字母、_、$开头
  - 变量名可以包括英文字母、_、$、数字
  - 不可以用系统的关键字、保留字作为变量名

原始值（栈数据） stack

不可改变

- Number String Boolean undefined null

引用值（堆数据）

- array，object，function

js语句基本规则

- 语句后面要用分号结束“；”
- js语法错误会引发后续代码终止，但不会影响其他js代码块
- 书写格式要规范，“=+/-*”两边都应该有空格

逻辑运算符 &&   ||    !

如下运算符转换为Boolean值都为false：

    undefined, null, NaN, "", 0 false ===> false;

&& 

- 先看第一个表达式转换成布尔值的结果，如果结果为真，那么它会看第二个表达式转换为布尔值得结果，然后如果只有两个表达式的话，只看第二个表达式，就可以返回该表达式的值;

- 如果第一个表达式的值为假，直接返回false； 短路效应；
```javascript
var a = 1 && 2;
console.log(a); // 2
var a = 1 && 1 && 2
console.log(a); // 2
var a = 1 && false && 2;
console.log(a); // false;
var a = 0 && 2;
console.log(a); // 0
```




