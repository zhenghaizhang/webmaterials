## 编写type函数，输出对应的数据类型
- type([])   --> array
- type({})   --> object

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
