(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{451:function(s,a,e){"use strict";e.r(a);var t=e(2),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"grid-vs-flex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grid-vs-flex"}},[s._v("#")]),s._v(" Grid vs Flex")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic2.zhimg.com/v2-2e1ad128c6d7fc823c544767375f5c6d_1200x500.jpg",alt:"最全～Grid vs Flex"}})]),s._v(" "),e("p",[s._v("一般来说，布局的传统解决方案，是基于盒状模型，依赖"),e("code",[s._v("display + position + float")]),s._v("，但它对于那些特殊的布局非常不方便，比如，垂直居中实现起来很麻烦")]),s._v(" "),e("p",[e("code",[s._v("Flexbox")]),s._v("的出现很好的解决了这个问题。它赋予父容器更改子元素宽高或顺序的能力，来更好的填充可用的空间(响应式)。它是简单的一维布局，最适合用在组件和小规模的布局中，如果是更复杂的布局，"),e("code",[s._v("Grid")]),s._v("布局会比较好一些")]),s._v(" "),e("p",[e("code",[s._v("CSS Grid")]),s._v("，基于网格的二维布局，目的是改变布局解决方法, 它有很多与"),e("code",[s._v("Flexbox")]),s._v("相同的功能，但优势不同，要根据实际情况选择布局方式")]),s._v(" "),e("p",[s._v("下面让我们来比较一下两种布局方式")]),s._v(" "),e("h2",{attrs:{id:"一、display"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、display"}},[s._v("#")]),s._v(" "),e("strong",[s._v("一、display")])]),s._v(" "),e("p",[s._v("通过定义 "),e("code",[s._v("display")]),s._v("的属性值定义环境")]),s._v(" "),e("p",[e("strong",[s._v("Flexbox:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("display: flex | inline-flex;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("Grid:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("display: grid | inline-grid | subgrid;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"二、基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[s._v("#")]),s._v(" "),e("strong",[s._v("二、基本概念")])]),s._v(" "),e("p",[s._v("两种布局布局及概念有相似之处，也有不同的地方，理解基本概念及术语有助与我们更好的学习")]),s._v(" "),e("h2",{attrs:{id:"_1-flexbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-flexbox"}},[s._v("#")]),s._v(" "),e("strong",[s._v("1.Flexbox")])]),s._v(" "),e("p",[s._v("Flexbox应用与一维布局，用来为盒状模型提供最大的灵活性 "),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/46684565",target:"_blank",rel:"noopener noreferrer"}},[s._v("Flexbox了解一下"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"_2-css-grid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-css-grid"}},[s._v("#")]),s._v(" "),e("strong",[s._v("2.CSS Grid")])]),s._v(" "),e("p",[s._v("Gird是css中最强大的布局系统，应用于二维布局，可以同时处理行和列，可以通过将css规则用于父元素（网格容器）和该元素的子元素（网格元素）来使用网格布局。 "),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/46754464",target:"_blank",rel:"noopener noreferrer"}},[s._v("Grid布局了解一下"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"三、一维与二维"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、一维与二维"}},[s._v("#")]),s._v(" "),e("strong",[s._v("三、一维与二维")])]),s._v(" "),e("p",[e("code",[s._v("Flexbox")]),s._v("用于一维布局，"),e("code",[s._v("Grid")]),s._v("用于二维布局")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-415f145a1c25b27647ae1be1797e33fd_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("这意味着如果在一个方向上排列内容项（例如标题内的三个按钮），那么应该使用"),e("code",[s._v("Flexbox")]),s._v(" 相比"),e("code",[s._v("Grid")]),s._v("更加灵活，并且代码少易维护")]),s._v(" "),e("p",[s._v("但是，如果要在两个维度（包括行和列）中创建整个布局，那么应该使用"),e("code",[s._v("CSS Grid")]),s._v("：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-1ce78af118212c3a8f5635c8558159c1_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("在这种情况下，"),e("code",[s._v("Grid")]),s._v("提供更大的灵活性，使您的标记更简单，代码将更易于维护。")]),s._v(" "),e("p",[s._v("将两者结合起来，在上面的示例中，使用了"),e("code",[s._v("Grid")]),s._v("进行页面布局，然后使用"),e("code",[s._v("Flexbox")]),s._v("来对齐标题内的内容，完美。在本文末尾向您展示如何做。")]),s._v(" "),e("h2",{attrs:{id:"四、内容优先与布局优先"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、内容优先与布局优先"}},[s._v("#")]),s._v(" "),e("strong",[s._v("四、内容优先与布局优先")])]),s._v(" "),e("p",[s._v("两者之间的另一个核心差异是"),e("code",[s._v("Flexbox")]),s._v("基于内容，而"),e("code",[s._v("Grid")]),s._v("基于布局。这个怎么说，让我们看一个具体的例子，来理解它的含义。 我们将使用上一段中的标题。这是它的HTML：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<header>\n    <div>HOME</div>\n    <div>SEARCH</div>\n    <div>LOGOUT</div>\n</header>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("在我们将它变成"),e("code",[s._v("Flexbox")]),s._v("布局之前，"),e("code",[s._v("div")]),s._v("独占一行向下排列")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-544561473214257820e020eae7dd6aec_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("添加了一些基本样式，与"),e("code",[s._v("Flexbox")]),s._v("或"),e("code",[s._v("Grid")]),s._v("无关")]),s._v(" "),e("h2",{attrs:{id:"_1-flexbox-实现标题布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-flexbox-实现标题布局"}},[s._v("#")]),s._v(" "),e("strong",[s._v("1.Flexbox 实现标题布局")])]),s._v(" "),e("p",[s._v("但是，当我们给它一个"),e("code",[s._v("display: flex;")]),s._v(" "),e("code",[s._v("header")]),s._v("中的"),e("code",[s._v("div")]),s._v("将排列到一条线上")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("header {\n    display：flex;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-57e5aefed734df27e430a69b3278908c_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("要将LOGOUT按钮移动到最右侧，给该元素左侧一个边距：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("header> div：nth-child（3）{\n    margin-left：auto;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("其结果如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-e8170cc15de9e81d793a956ffe553b3b_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("以上是通过子项身来决定它们的放置方式。除了"),e("code",[s._v("display: flex;")]),s._v(" 最初我们没有必要预先定义任何其他内容。")]),s._v(" "),e("p",[s._v("这是"),e("code",[s._v("Flexbox")]),s._v("和"),e("code",[s._v("Grid")]),s._v("之间差异的核心，"),e("code",[s._v("Grid")]),s._v("不是为了创建一维标题而构建的，下面我们通过"),e("code",[s._v("Grid")]),s._v("创建一维标题布局，来看看他们之间的差异")]),s._v(" "),e("h2",{attrs:{id:"_2-grid-实现标题布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-grid-实现标题布局"}},[s._v("#")]),s._v(" "),e("strong",[s._v("2.Grid 实现标题布局")])]),s._v(" "),e("p",[s._v("下面定义网格有十列，每列为一个单位宽")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("header {\n    display：grid;\n    grid-template-columns：repeat（10,1fr）;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("效果看起来与"),e("code",[s._v("Flexbox")]),s._v("解决方案完全相同")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-57e5aefed734df27e430a69b3278908c_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("但是，审查元素你会看到，内容被分成了十列：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-07f9662cd9aa144ec58c96d7be6ca177_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("这种方法的主要区别在于我们必须首先定义列和列的宽度，然后将内容放在可用的网格单元格中 为了将LOGOUT按钮移动到最右侧，我们将其放在第十列，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("header> div：nth-child（3）{\n    grid-column：10;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("以下是我们审查元素的外观：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-49ed9a51ebf6bb97413cbd676f711838_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("我们不能简单地给它一个，"),e("code",[s._v("margin-left: auto;")]),s._v("因为LOGOUT已经被放置在布局的特定单元格中，在第三列中。要移动它，我们必须为它找到另一个网格单元。")]),s._v(" "),e("h2",{attrs:{id:"_3-将两者结合起来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-将两者结合起来"}},[s._v("#")]),s._v(" "),e("strong",[s._v("3.将两者结合起来")])]),s._v(" "),e("p",[s._v("现在让我们看看如何组合使用它们，将我标题合并到页面布局中。我们将从构建网页布局开始")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-90632b4777e43207deca321976f8b145_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[e("strong",[s._v("HTML:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<div class =“container”>\n  <header> HEADER </header>\n  <aside> MENU </aside>\n  <main> CONTENT </main>\n  <footer> FOOTER </footer>\n</div>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[e("strong",[s._v("CSS：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".container {\n    display：grid;\n    grid-template-columns：repeat（12,1fr）;\n    grid-template-rows：50px 350px 50px;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("我们将这些"),e("code",[s._v("div")]),s._v("放到"),e("code",[s._v("Grid")]),s._v("布局中，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("header {\n    grid-column：span 12;\n}\naside {\n    grid-column：span 2;\n}\nmain {\n    grid-column：span 10;\n}\nfooter {\n    grid-column：span 12;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("现在我只需添加标题。首先将'header' 转换为"),e("code",[s._v("Flexbox")]),s._v("容器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("header {\n    display：flex;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后将LOGOUT按钮移动到最右侧：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("header> div：nth-child（3）{\n    margin-left：auto;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("以上我们有了一个完美的布局，使用"),e("code",[s._v("Grid")]),s._v("和"),e("code",[s._v("Flexbox")]),s._v("组合完成，以下是两个容器的外观：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-82867f3286602c8994ed86d5647df8d0_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("所以现在应该对Flexbox和Grid应用场景有了很好的理解，就可以结合使用它们完成布局")]),s._v(" "),e("h2",{attrs:{id:"五、浏览器兼容性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、浏览器兼容性"}},[s._v("#")]),s._v(" "),e("strong",[s._v("五、浏览器兼容性")])]),s._v(" "),e("h2",{attrs:{id:"_1-grid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-grid"}},[s._v("#")]),s._v(" "),e("strong",[s._v("1.Grid")])]),s._v(" "),e("h2",{attrs:{id:"desktop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#desktop"}},[s._v("#")]),s._v(" "),e("strong",[s._v("Desktop")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-81a12b84d212fbee02f0592df09182d9_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[e("strong",[s._v("Mobile/Tablet")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-b1c1245081d967e3be8886e5134c30be_720w.jpg",alt:"img"}})]),s._v(" "),e("h2",{attrs:{id:"_2-flexbox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-flexbox"}},[s._v("#")]),s._v(" "),e("strong",[s._v("2.Flexbox")])]),s._v(" "),e("ul",[e("li",[s._v("new: 现在的最新版")]),s._v(" "),e("li",[s._v("tweener: 2011过度版本")]),s._v(" "),e("li",[s._v("old: 2009版本")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-3feceb4515113bf16053cbe51bb5d2b4_720w.jpg",alt:"img"}})]),s._v(" "),e("p",[s._v("混合三个版本使用可以兼容到：")]),s._v(" "),e("ul",[e("li",[s._v("Chrome any")]),s._v(" "),e("li",[s._v("Firefox any")]),s._v(" "),e("li",[s._v("Safari any")]),s._v(" "),e("li",[s._v("Opera 12.1+")]),s._v(" "),e("li",[s._v("IE 10+")]),s._v(" "),e("li",[s._v("iOS any")]),s._v(" "),e("li",[s._v("Android any")])])])}),[],!1,null,null,null);a.default=r.exports}}]);