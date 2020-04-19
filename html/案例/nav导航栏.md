### 导航栏



```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>导航栏</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      color: #424242;
      font-family: Arial, Helvetica, sans-serif;
    }
    
    .nav {
      list-style: none;
    }

    .nav::after{
      content: '';
      display: block;
      clear: both;
    }
    
    .nav a {
      text-decoration: none;
    }
    .nav .list-item{
      float: left;
      margin: 0 10px;
      height: 30px;
      line-height: 30px;
      /* border: 1px solid black; */
    }

    .nav .list-item a {
      color: #f40;
      font-weight: bold;
      height: 30px;
      display: inline-block;
      border-radius: 5px;
      padding: 0 5px;
    }

    .nav .list-item a:hover {
      background-color: #f40;
      color: #fff;
    }
  </style>
</head>
<body>
  

  <ul class="nav">
    <li class="list-item"><a href="#">天猫</a></li>
    <li class="list-item"><a href="#">聚划算</a></li>
    <li class="list-item"><a href="#">天猫超市</a></li>
  </ul>

</body>
</html>
```

