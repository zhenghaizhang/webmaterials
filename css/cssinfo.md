浮动

left, right, none

一个元素被设定为浮动，会引起元素自身体积的塌缩；

浮动元素的位置

清除浮动：前面的元素浮动，保证后面的元素不受前面浮动元素的影响，叫清浮动；

clear: left;

浮动元素的后面紧跟着的那个元素增加clear: both;

另一种是增加一个div，单独设置clear: both;



相对定位是没有脱离文档流；relative；

bfc（包含块）

- 父节点，向上回溯，第一个有定位的

- 如果都没有，回溯到窗口

- 一种垂直居中的方法



利用包含块达到窗口居中的效果



absolute 从定位元素外壁到包含块元素顶部内壁距离；

relative 从定位元素外壁到原始位置外壁的距离；



定位层叠

z-index

一般来说，定位元素的z-index会高于文档流

通过将z-index设定成负值可以使定位元素在文档流下方



定位层叠

嵌套层叠

层叠包含框

- 层叠包含框必须是定位元素
- 且z-index属性不能是auto
- 同一层叠根元素内的所有定位元素，使用z-index比较
- 不同层叠根元素的定位元素，需要寻找到相同的层叠祖先元素，比较层叠祖先元素下以及的z-index值。

原则：外部相对定位，内部绝对定位。

文字：原则固定布局，用px，不固定布局用%或em；



transform

- 用于内联或者块元素，可以旋转、缩放、移动元素
- Webkit：-webkit-transform
- Gecko: -moz-transform
- Presto: -o-transform
- IE:暂不支持

定义复杂变形

- 除了transform，背景颜色，颜色，宽度都可以成为变形。


响应式布局

一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这个概念是为解决移动互联网浏览而诞生的



position:relative; 相对定位 float？

position:absolute; 必须设置left和top，来实现绝对定位；

子级浮动 父级清除浮动



弹性盒模型

display: flex;

justify-content: space-around;

align-items: center;



弹性盒模型
