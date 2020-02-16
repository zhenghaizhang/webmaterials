(function() {
    //代码执行块  执行空间  命名空间
    var btnsAera = document.getElementsByClassName('btnsAear')[0];
    var cubeNode = document.getElementsByClassName('cube')[0];
    var currentList = cubeNode.classList; // 获得类名列表 类数组集合
    var initClass = currentList[1]; // 获取类名：init

    btnsAera.addEventListener('click', function(e) {
        console.log(e.target.id);
        var current = e.target.id;
        if (current.length > 0 && current != initClass) {
            currentList.replace(initClass, current);
            initClass = current;
        }
    });
}());
