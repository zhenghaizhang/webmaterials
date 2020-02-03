

JS运行三部曲

- 语法分析

- 预编译

  **函数声明整体提升**

  **变量  声明提升**

- ```javascript
  console.log(a); # undefined
  var a = 123;
  ```

  ```javascript
  test();
  function test(){
    console.log('a');
  }
  ```

- 解释执行



预编译前奏

- imply global 暗示全局变量：即任何变量，如果变量未经声明就赋值，此变量就为全局对象所有。
  - eg: a = 123;
  - eg: var a = b = 123;
- 一切声明的全局变量，全是window的属性。
  - eg: var a = 123; ===> window.a = 123;


