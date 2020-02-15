## 获取窗口属性和获取DOM尺寸和脚本化CSS

DOM（BOM）基本操作

- 查看滚动条的滚动距离

  - window.pageXOffset/pageYOffset

    - IE8以及IE8以下不兼容

  - document.body/documentElement.scrollLeft/scrollTop

    - 兼容性比较混乱，用时取两个值相加，因为不可能存在两个同时有值

      ```javascript
      document.body.scrollLeft + document.documentElement.scrollLeft
      ```

  - 封装兼容性方法，求滚动轮滚动离getScrollOffset();

    ```javascript
    function getScrollOffset() {
        if (window.pageXOffset) {
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            }
        } else {
            return {
                x: document.body.scrollLeft + document.documentElement.scrollLeft,
                y: document.body.scrollTop + document.documentElement.scrollTop
            }
        }
    }
    
    console.log(getScrollOffset());
    ```

- 查看视口的尺寸

  - window.innerWidth/innerHeight

    - IE8及IE8以下不兼容

  - document.documentElement.clientWidth/clientHeight

    - 标准模式下，任意浏览器都兼容

  - document.body.clientWidth/clientHeight

    - 适用于怪异模式下的浏览器

  - 封装兼容性方法，返回浏览器视口尺寸getViewportOffset()

    ```javascript
    function getViewportOffset() {
        if (window.innerWidth) {
            return {
                w: window.innerWidth,
                h: window.innerHeight
            }
        } else {
            if (document.compatMode == "BackCompat") { // 向后兼容模式 HTML页面中没有<!DOCTYPE html>
                return {
                    w: document.body.clientWidth,
                    h: document.body.clientHeight
                }
            } else {
                return {
                    w: document.documentElement.clientWidth,
                    h: document.documentElement.clientHeight
                }
            }
    
        }
    }
    
    console.log(getViewportOffset());
    ```

- 查看元素的几何尺寸

  - domEle.getBoundingClientRect(); // 任何元素都有这个方法

    ```javascript
    var div = document.getElementsByTagName('div')[0];
    console.log(div.getBoundingClientRect());
    ```

  - 兼容性好

  - 该方法返回一个对象，对象里面有left,top,right,bottom,width,height等属性。left和top代表该元素左上角的X和Y坐标，right和bottom代表元素右下角的X和Y坐标

  - height和width属性老版本IE并未实现

  - 返回的结果并不是”实时的“

- 查看元素的尺寸

  - dom.offsetWidth, dom.offsetHeight

- 查看元素的位置

  - dom.offsetLeft, dom.offsetTop // 视觉上的尺寸 

  - 对于无定位父级的元素，返回相对文档的坐标。对于有定位父级的元素，返回相对于最近的有定位的父级的坐标。

  - dom.offsetParent

  - 返回最近的有定位的父级，如无，返回body，body.offsetParent返回null

  - eg：求元素相对于文档的坐标 getElementPosition

    ```javascript
    function getElementPosition(elem) {
        var left = 0,
            top = 0;
    
        for (elem; elem.offsetParent; elem = elem.offsetParent) {
            left += elem.offsetLeft;
            top += elem.offsetTop;
        }
        return {
            left: left,
            top: top
        }
    }
    var div = document.getElementsByClassName('demo')[0];
    console.log(getElementPosition(div));
    ```

    

- 让滚动条滚动

  - window上有三个方法

  - scroll(x, y)/scrollTo() 滚动到的位置，两个方法实现功能一致

  - scrollBy(x, y) // 累加滚动的位置

  - 三个方法功能类似，用法都是将x，y坐标传入。即实现滚动轮滚动到当前位置。

  - 区别：scrollBy()会在之前的数据基础之上做累加。

  - eg：利用scrollBy()快速阅读的功能

    ```javascript
    var start = document.getElementsByTagName('div')[0];  // 快速阅读按钮
    var stop = document.getElementsByTagName('div')[1];   // 停止按钮
    
    var timer = 0;
    var key = true;
    
    start.onclick = function() {
        if (key) {
            timer = setInterval(function() {
                window.scrollBy(0, 10);
            }, 100);
            key = false;
        }
    }
    stop.onclick = function() {
        clearInterval(timer);
        key = true;
    }
    ```

    

- 脚本化CSS

  - dom.style.prop   可读可写（只有此方法可写）  // 行间样式

    - 可读写**行间样式**，没有兼容性问题，碰到float这样的保留字属性，前面应加CSS

    - eg: float -->  cssFloat

      ```javascript
      div.style.cssFloat = "right";
      ```

    - 复合属性必须拆解，组合单词变成小驼峰式写法

      ```javascript
      div.style.backgroundColor = "green";
      ```

    - 写入的值必须是字符串格式

- 查询计算样式

  - window.getComputedStyle(ele, null)   // 获取元素的所有显示值  绝对值

    **第二个参数null，解决的伪元素问题；**

    ```css
    div::after {
            content: "";
            width: 50px;
            height: 50px;
            background-color: green;
            display: inline-block;
        }
    ```

    ```javascript
    window.getComputedStyle(div, "after").width // 50px
    ```

  - 计算样式只读

  - 返回的计算样式的值都是绝对值，没有相对单位

  - IE8及IE8以下不兼容

    - 查询样式
      - ele.currentStyle
      - 计算样式只读
      - 返回的计算样式的值不是经过转换的绝对值
      - IE独有的属性

- 封装兼容性方法getStyle(ele, prop)

  ```javascript
  var div = document.getElementsByTagName('div')[0];
  
  function getStyle(elem, prop) {
      if (window.getComputedStyle) {
          return window.getComputedStyle(elem, null)[prop];
      } else {
          return elem.currentStyle[prop];
      }
  }
  console.log(getStyle(div, "width"))
  ```

案例：让方块运动

```javascript
function getStyle(elem, prop) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}

var div = document.getElementsByTagName('div')[0];

var timer = setInterval(function() {
    div.style.left = parseInt(getStyle(div, 'left')) + 10 + "px";

    if (parseInt(div.style.left) > 100) {
        clearInterval(timer);
    }
}, 1000);
```


