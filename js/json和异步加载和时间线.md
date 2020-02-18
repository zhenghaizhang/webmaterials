## json和异步加载和时间线

- json是一种传输数据的格式（以对象为样板，本质上就是对象，但用途有土鳖，兑现个就是本地用的，json是用来传输的）
- JSON.parse();  string-->json
- JSON.stringify();  json -->  string

```javascript
var obj = {
    "name": "abc",
    "age": 12
}

var str = JSON.stringify(obj);
var jsonstr = JSON.parse(str);
```



html树渲染步骤：深度优先

domTree  + cssTree =  renderTree

reflow  重排



**异步加载js**

- js加载的缺点：加载工具方法没必要阻塞文档，过多js加载会影响页面效率，一旦网速不好，那么整个网站将等待js加载而不进行后续渲染工作。
- 有些工具方法需要按需加载，用到再加载，不用不加载。



javascript异步加载的三种方案

- defer异步加载，但要等到dom文档全部解析完才会被执行。只有IE能用，也可以将代码写到内部。

  ```html
  <script type="text/javascript" src="./index.js" defer>
    var a = 123;
  </script>
  ```

- async 异步加载，加载完就执行，async只能加载外部脚本，不能把js写在script标签里。

  ```html
  <script type="text/javascript" src="./index.js" async="async"></script>
  ```

  

- 上述两种：defer和async执行时也不阻塞页面

- 创建script，插入到DOM中，加载完毕后callBack。

  通用的方法

  ```html
  <script type="text/javascript">
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "index.js";
    document.head.appendChild(script);
  </script>
  ```

  等待js异步加载完之后再执行方法（非IE浏览器）：

  ```html
  <script type="text/javascript">
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "index2.js";
  
    script.onload = function() {
      // 等待加载完成之后再执行
      // 兼容浏览器 Safari chrome firefox opera
      test();
    }
  
    document.head.appendChild(script);
  </script>
  ```

  等待js异步加载完之后再执行方法（兼容IE浏览器）：

  ```html
  <script type="text/javascript">
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "index2.js";
  
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState == "complete" || script.readyState == "loaded") {
          test();
        }
      }
    } else {
      script.onload = function() {
        test();
      }
    }
  
    document.head.appendChild(script);
  </script>
  ```

  封装成函数，兼容所有浏览器，第一种方法：

  ```javascript
  function loadScript(url, callback) {
      /*
          * 异步加载js，及其执行js内部的方法
          */
      var script = document.createElement('script');
      script.type = "text/javascript";
  
      if (script.readyState) {
          script.onreadystatechange = function() {
              if (script.readyState == "complete" || script.readyState == "loaded") {
                  callback();
              }
          }
      } else {
          script.onload = function() {
              callback();
          }
      }
      script.src = url;
  
      document.head.appendChild(script);
  }
  loadScript('index2.js', function() {
    test();
  }); // 调用方法
  ```

  封装成函数，兼容所有浏览器，第二种方法：

  ```javascript
  function loadScript(url, callback) {
      /*
          * 异步加载js，及其执行js内部的方法
          */
      var script = document.createElement('script');
      script.type = "text/javascript";
      script.src = url;
  
      if (script.readyState) {
          script.onreadystatechange = function() {
              if (script.readyState == "complete" || script.readyState == "loaded") {
                  eval(callback);
              }
          }
      } else {
          script.onload = function() {
              eval(callback);
          }
      }
  
      document.head.appendChild(script);
  }
  
  loadScript('index2.js', "test()");
  ```



**js加载时间线**

- 1. 创建Document对象，开始解析web界面。解析HTML元素和他们的文本内容后添加Element对象和Text节点到文档中。这个阶段document.readyState = "loading"。

- 2. 遇到link外部css，创建线程加载，并继续解析文档。

- 3. 遇到script外部js，并且没有设置async、defer，浏览器加载，并阻塞，等待js加载完成并执行该脚本，然后继续解析文档。

- 4. 遇到script外部js，并且设置有async、defer，浏览器创建线程加载，并继续解析文档。对于async属性的脚本，脚本加载完成后立即执行。（异步禁止使用document.write()）

- 5. 遇到img等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档。

- 6. 当文档解析完成，document.readState = 'interactive'。

  ```javascript
  // 验证interactive状态
  document.onreadystatechange = function() {
    console.log(document.readyState); // interactive  complete
  }
  ```

- 7. 文档解析完成后，所有设置有defer的脚本会按顺序执行。（注意与async的不同，但同样禁止使用document.write()）

- 8. document对象触发DOMContentLoaded事件，这也标志着程序执行从同步脚本执行阶段，转化为事件驱动阶段。

  ```javascript
  document.addEventListener('DOMContentLoaded', function() {
    console.log("a");
  }, false);
  ```

- 9. 当所有async的脚本加载完成并执行后、img等加载完城后，document.readState = 'complete'，window对象触发load事件。

- 10. 从此，以异步响应方式处理用户输入、网络事件等。



**如果要把script脚本写到head标签里面，那么给document绑定一个事件：**

```javascript
document.addEventListener('DOMContentLoaded', function() {
  var div = document.getElementsByTagName('div')[0];
  console.log(div);
}, false);
```

当然，最规范的写法还是放到body的最下面。




