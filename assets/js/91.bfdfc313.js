(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{427:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"javascript深入之call和apply的模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript深入之call和apply的模拟实现"}},[s._v("#")]),s._v(" JavaScript深入之call和apply的模拟实现")]),s._v(" "),a("blockquote",[a("p",[s._v("JavaScript深入系列第十篇，通过call和apply的模拟实现，带你揭开call和apply改变this的真相")])]),s._v(" "),a("h2",{attrs:{id:"call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call"}},[s._v("#")]),s._v(" call")]),s._v(" "),a("p",[s._v("一句话介绍 call：")]),s._v(" "),a("blockquote",[a("p",[s._v("call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。")])]),s._v(" "),a("p",[s._v("举个例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var foo = {\n    value: 1\n};\n\nfunction bar() {\n    console.log(this.value);\n}\n\nbar.call(foo); // 1复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("注意两点：")]),s._v(" "),a("ol",[a("li",[s._v("call 改变了 this 的指向，指向到 foo")]),s._v(" "),a("li",[s._v("bar 函数执行了")])]),s._v(" "),a("h2",{attrs:{id:"模拟实现第一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟实现第一步"}},[s._v("#")]),s._v(" 模拟实现第一步")]),s._v(" "),a("p",[s._v("那么我们该怎么模拟实现这两个效果呢？")]),s._v(" "),a("p",[s._v("试想当调用 call 的时候，把 foo 对象改造成如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var foo = {\n    value: 1,\n    bar: function() {\n        console.log(this.value)\n    }\n};\n\nfoo.bar(); // 1复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("这个时候 this 就指向了 foo，是不是很简单呢？")]),s._v(" "),a("p",[s._v("但是这样却给 foo 对象本身添加了一个属性，这可不行呐！")]),s._v(" "),a("p",[s._v("不过也不用担心，我们用 delete 再删除它不就好了~")]),s._v(" "),a("p",[s._v("所以我们模拟的步骤可以分为：")]),s._v(" "),a("ol",[a("li",[s._v("将函数设为对象的属性")]),s._v(" "),a("li",[s._v("执行该函数")]),s._v(" "),a("li",[s._v("删除该函数")])]),s._v(" "),a("p",[s._v("以上个例子为例，就是：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 第一步\nfoo.fn = bar\n// 第二步\nfoo.fn()\n// 第三步\ndelete foo.fn复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("fn 是对象的属性名，反正最后也要删除它，所以起成什么都无所谓。")]),s._v(" "),a("p",[s._v("根据这个思路，我们可以尝试着去写第一版的 "),a("strong",[s._v("call2")]),s._v(" 函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 第一版\nFunction.prototype.call2 = function(context) {\n    // 首先要获取调用call的函数，用this可以获取\n    context.fn = this;\n    context.fn();\n    delete context.fn;\n}\n\n// 测试一下\nvar foo = {\n    value: 1\n};\n\nfunction bar() {\n    console.log(this.value);\n}\n\nbar.call2(foo); // 1复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("正好可以打印 1 哎！是不是很开心！(～￣▽￣)～")]),s._v(" "),a("h2",{attrs:{id:"模拟实现第二步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟实现第二步"}},[s._v("#")]),s._v(" 模拟实现第二步")]),s._v(" "),a("p",[s._v("最一开始也讲了，call 函数还能给定参数执行函数。举个例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var foo = {\n    value: 1\n};\n\nfunction bar(name, age) {\n    console.log(name)\n    console.log(age)\n    console.log(this.value);\n}\n\nbar.call(foo, 'kevin', 18);\n// kevin\n// 18\n// 1复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("注意：传入的参数并不确定，这可咋办？")]),s._v(" "),a("p",[s._v("不急，我们可以从 Arguments 对象中取值，取出第二个到最后一个参数，然后放到一个数组里。")]),s._v(" "),a("p",[s._v("比如这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 以上个例子为例，此时的arguments为：\n// arguments = {\n//      0: foo,\n//      1: 'kevin',\n//      2: 18,\n//      length: 3\n// }\n// 因为arguments是类数组对象，所以可以用for循环\nvar args = [];\nfor(var i = 1, len = arguments.length; i < len; i++) {\n    args.push('arguments[' + i + ']');\n}\n\n// 执行后 args为 [foo, 'kevin', 18]复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("不定长的参数问题解决了，我们接着要把这个参数数组放到要执行的函数的参数里面去。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 将数组里的元素作为多个参数放进函数的形参里\ncontext.fn(args.join(','))\n// (O_o)??\n// 这个方法肯定是不行的啦！！！复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("也许有人想到用 ES6 的方法，不过 call 是 ES3 的方法，我们为了模拟实现一个 ES3 的方法，要用到ES6的方法，好像……，嗯，也可以啦。但是我们这次用 eval 方法拼成一个函数，类似于这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("eval('context.fn(' + args +')')复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里 args 会自动调用 Array.toString() 这个方法。")]),s._v(" "),a("p",[s._v("所以我们的第二版克服了两个大问题，代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 第二版\nFunction.prototype.call2 = function(context) {\n    context.fn = this;\n    var args = [];\n    for(var i = 1, len = arguments.length; i < len; i++) {\n        args.push('arguments[' + i + ']');\n    }\n    eval('context.fn(' + args +')');\n    delete context.fn;\n}\n\n// 测试一下\nvar foo = {\n    value: 1\n};\n\nfunction bar(name, age) {\n    console.log(name)\n    console.log(age)\n    console.log(this.value);\n}\n\nbar.call2(foo, 'kevin', 18); \n// kevin\n// 18\n// 1复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("(๑•̀ㅂ•́)و✧")]),s._v(" "),a("h2",{attrs:{id:"模拟实现第三步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟实现第三步"}},[s._v("#")]),s._v(" 模拟实现第三步")]),s._v(" "),a("p",[s._v("模拟代码已经完成 80%，还有两个小点要注意：")]),s._v(" "),a("p",[a("strong",[s._v("1.this 参数可以传 null，当为 null 的时候，视为指向 window")])]),s._v(" "),a("p",[s._v("举个例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var value = 1;\n\nfunction bar() {\n    console.log(this.value);\n}\n\nbar.call(null); // 1复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("虽然这个例子本身不使用 call，结果依然一样。")]),s._v(" "),a("p",[a("strong",[s._v("2.函数是可以有返回值的！")])]),s._v(" "),a("p",[s._v("举个例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var obj = {\n    value: 1\n}\n\nfunction bar(name, age) {\n    return {\n        value: this.value,\n        name: name,\n        age: age\n    }\n}\n\nconsole.log(bar.call(obj, 'kevin', 18));\n// Object {\n//    value: 1,\n//    name: 'kevin',\n//    age: 18\n// }复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("不过都很好解决，让我们直接看第三版也就是最后一版的代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 第三版\nFunction.prototype.call2 = function (context) {\n    var context = context || window;\n    context.fn = this;\n\n    var args = [];\n    for(var i = 1, len = arguments.length; i < len; i++) {\n        args.push('arguments[' + i + ']');\n    }\n\n    var result = eval('context.fn(' + args +')');\n\n    delete context.fn\n    return result;\n}\n\n// 测试一下\nvar value = 2;\n\nvar obj = {\n    value: 1\n}\n\nfunction bar(name, age) {\n    console.log(this.value);\n    return {\n        value: this.value,\n        name: name,\n        age: age\n    }\n}\n\nbar.call(null); // 2\n\nconsole.log(bar.call2(obj, 'kevin', 18));\n// 1\n// Object {\n//    value: 1,\n//    name: 'kevin',\n//    age: 18\n// }复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("p",[s._v("到此，我们完成了 call 的模拟实现，给自己一个赞 ｂ（￣▽￣）ｄ")]),s._v(" "),a("h2",{attrs:{id:"apply的模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply的模拟实现"}},[s._v("#")]),s._v(" apply的模拟实现")]),s._v(" "),a("p",[s._v("apply 的实现跟 call 类似，在这里直接给代码，代码来自于知乎 @郑航的实现：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Function.prototype.apply = function (context, arr) {\n    var context = Object(context) || window;\n    context.fn = this;\n\n    var result;\n    if (!arr) {\n        result = context.fn();\n    }\n    else {\n        var args = [];\n        for (var i = 0, len = arr.length; i < len; i++) {\n            args.push('arr[' + i + ']');\n        }\n        result = eval('context.fn(' + args + ')')\n    }\n\n    delete context.fn\n    return result;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);