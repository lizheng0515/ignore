(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{407:function(a,s,n){"use strict";n.r(s);var e=n(2),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"javascript深入之参数按值传递"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript深入之参数按值传递"}},[a._v("#")]),a._v(" JavaScript深入之参数按值传递")]),a._v(" "),n("blockquote",[n("p",[a._v("JavaScript深入系列第九篇，除了按值传递、引用传递，还有第三种传递方式 —— 按共享传递")])]),a._v(" "),n("h2",{attrs:{id:"定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[a._v("#")]),a._v(" 定义")]),a._v(" "),n("p",[a._v("在《JavaScript高级程序设计》第三版 4.1.3，讲到传递参数：")]),a._v(" "),n("blockquote",[n("p",[a._v("ECMAScript中所有函数的参数都是按值传递的。")])]),a._v(" "),n("p",[a._v("什么是按值传递呢？")]),a._v(" "),n("blockquote",[n("p",[a._v("也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。")])]),a._v(" "),n("h2",{attrs:{id:"按值传递"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#按值传递"}},[a._v("#")]),a._v(" 按值传递")]),a._v(" "),n("p",[a._v("举个简单的例子：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var value = 1;\nfunction foo(v) {\n    v = 2;\n    console.log(v); //2\n}\nfoo(value);\nconsole.log(value) // 1复制代码\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("p",[a._v("很好理解，当传递 value 到函数 foo 中，相当于拷贝了一份 value，假设拷贝的这份叫 _value，函数中修改的都是 _value 的值，而不会影响原来的 value 值。")]),a._v(" "),n("h2",{attrs:{id:"引用传递"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用传递"}},[a._v("#")]),a._v(" 引用传递")]),a._v(" "),n("p",[a._v("拷贝虽然很好理解，但是当值是一个复杂的数据结构的时候，拷贝就会产生性能上的问题。")]),a._v(" "),n("p",[a._v("所以还有另一种传递方式叫做按引用传递。")]),a._v(" "),n("p",[a._v("所谓按引用传递，就是传递对象的引用，函数内部对参数的任何改变都会影响该对象的值，因为两者引用的是同一个对象。")]),a._v(" "),n("p",[a._v("举个例子：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var obj = {\n    value: 1\n};\nfunction foo(o) {\n    o.value = 2;\n    console.log(o.value); //2\n}\nfoo(obj);\nconsole.log(obj.value) // 2复制代码\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("p",[a._v("哎，不对啊，连我们的红宝书都说了 ECMAScript 中所有函数的参数都是按值传递的，这怎么能按引用传递成功呢？")]),a._v(" "),n("p",[a._v("而这究竟是不是引用传递呢？")]),a._v(" "),n("h2",{attrs:{id:"第三种传递方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第三种传递方式"}},[a._v("#")]),a._v(" 第三种传递方式")]),a._v(" "),n("p",[a._v("不急，让我们再看个例子：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("var obj = {\n    value: 1\n};\nfunction foo(o) {\n    o = 2;\n    console.log(o); //2\n}\nfoo(obj);\nconsole.log(obj.value) // 1复制代码\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("p",[a._v("如果 JavaScript 采用的是引用传递，外层的值也会被修改呐，这怎么又没被改呢？所以真的不是引用传递吗？")]),a._v(" "),n("p",[a._v("这就要讲到其实还有第三种传递方式，叫按共享传递。")]),a._v(" "),n("p",[a._v("而共享传递是指，在传递对象的时候，传递对象的引用的副本。")]),a._v(" "),n("p",[n("strong",[a._v("注意： 按引用传递是传递对象的引用，而按共享传递是传递对象的引用的副本！")])]),a._v(" "),n("p",[a._v("所以修改 o.value，可以通过引用找到原值，但是直接修改 o，并不会修改原值。所以第二个和第三个例子其实都是按共享传递。")]),a._v(" "),n("p",[a._v("最后，你可以这样理解：")]),a._v(" "),n("p",[a._v("参数如果是基本类型是按值传递，如果是引用类型按共享传递。")]),a._v(" "),n("p",[a._v("但是因为拷贝副本也是一种值的拷贝，所以在高程中也直接认为是按值传递了。")])])}),[],!1,null,null,null);s.default=t.exports}}]);