(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{393:function(e,s,a){"use strict";a.r(s);var t=a(2),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"如何使用-set-来提高代码的性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-set-来提高代码的性能"}},[e._v("#")]),e._v(" 如何使用 Set 来提高代码的性能")]),e._v(" "),a("p",[e._v("我确信有很多开发人员坚持使用基本的全局对象：数字，字符串，对象，数组和布尔值。对于许多用例，这些都是需要的。 但是如果想让你的代码尽可能快速和可扩展，那么这些基本类型并不总是足够好。")]),e._v(" "),a("p",[e._v("在本文中，我们将讨论JS 中"),a("code",[e._v("Set")]),e._v("对象如何让代码更快— 特别扩展性方便。 "),a("code",[e._v("Array")]),e._v(" 和"),a("code",[e._v("Set")]),e._v("工作方式存在大量的交叉。但是使用"),a("code",[e._v("Set")]),e._v("会比"),a("code",[e._v("Array")]),e._v("在代码运行速度更有优势。")]),e._v(" "),a("p",[a("strong",[e._v("想阅读更多优质文章请猛戳GitHub博客,一年百来篇优质文章等着你！")])]),e._v(" "),a("h2",{attrs:{id:"set-有何不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-有何不同"}},[e._v("#")]),e._v(" Set 有何不同")]),e._v(" "),a("p",[e._v("最根本的区别是数组是一个索引集合，这说明数组中的数据值按索引排序。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const arr = [A, B, C, D];\nconsole.log(arr.indexOf(A)); // Result: 0\nconsole.log(arr.indexOf(C)); // Result: 2\n复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("相比之下，"),a("code",[e._v("set")]),e._v("是一个键的集合。"),a("code",[e._v("set")]),e._v("不使用索引，而是使用键对数据排序。"),a("code",[e._v("set")]),e._v(" 中的元素按插入顺序是可迭代的，它不能包含任何重复的数据。换句话说，"),a("code",[e._v("set")]),e._v("中的每一项都必须是惟一的。")]),e._v(" "),a("h2",{attrs:{id:"主要的好处是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要的好处是什么"}},[e._v("#")]),e._v(" 主要的好处是什么")]),e._v(" "),a("p",[a("code",[e._v("set")]),e._v(" 相对于数组有几个优势，特别是在运行时间方面：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("查看元素")]),e._v("：使用"),a("code",[e._v("indexOf()")]),e._v("或"),a("code",[e._v("includes()")]),e._v("检查数组中的项是否存在是比较慢的。")]),e._v(" "),a("li",[a("strong",[e._v("删除元素")]),e._v(":在"),a("code",[e._v("Set")]),e._v("中，可以根据每项的的 "),a("code",[e._v("value")]),e._v(" 来删除该项。在数组中，等价的方法是使用基于元素的索引的"),a("code",[e._v("splice()")]),e._v("。与前一点一样，依赖于索引的速度很慢。")]),e._v(" "),a("li",[a("strong",[e._v("保存 NaN")]),e._v("：不能使用"),a("code",[e._v("indexOf()")]),e._v("或 "),a("code",[e._v("includes()")]),e._v(" 来查找值 "),a("code",[e._v("NaN")]),e._v("，而 "),a("code",[e._v("Set")]),e._v(" 可以保存此值。")]),e._v(" "),a("li",[a("strong",[e._v("删除重复项")]),e._v(":"),a("code",[e._v("Set")]),e._v("对象只存储惟一的值,如果不想有重复项存在，相对于数组的一个显著优势，因为数组需要额外的代码来处理重复。")])]),e._v(" "),a("h2",{attrs:{id:"时间复杂度？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度？"}},[e._v("#")]),e._v(" 时间复杂度？")]),e._v(" "),a("p",[e._v("数组用来搜索元素的方法时间复杂度为"),a("code",[e._v("0(N)")]),e._v("。换句话说，运行时间的增长速度与数据大小的增长速度相同。")]),e._v(" "),a("p",[e._v("相比之下，"),a("code",[e._v("Set")]),e._v("用于搜索、删除和插入元素的方法的时间复杂度都只有"),a("code",[e._v("O(1)")]),e._v("，这意味着数据的大小实际上与这些方法的运行时间无关。")]),e._v(" "),a("h2",{attrs:{id:"set-究竟有多快？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-究竟有多快？"}},[e._v("#")]),e._v(" Set 究竟有多快？")]),e._v(" "),a("p",[e._v("虽然运行时间可能会有很大差异，具体取决于所使用的系统，所提供数据的大小以及其他变量，但我希望我的测试结果能够让你真实地了解"),a("code",[e._v("Set")]),e._v("的速度。 我将分享三个简单的测试和我得到的结果。")]),e._v(" "),a("h4",{attrs:{id:"准备测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备测试"}},[e._v("#")]),e._v(" "),a("strong",[e._v("准备测试")])]),e._v(" "),a("p",[e._v("在运行任何测试之前，创建一个数组和一个 Set，每个数组和 Set 都有100万个元素。为了简单起见，我从"),a("code",[e._v("0")]),e._v("开始，一直数到"),a("code",[e._v("999999")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let arr = [], set = new Set(), n = 1000000;\nfor (let i = 0; i < n; i++) {\n  arr.push(i);\n  set.add(i);\n}\n复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h4",{attrs:{id:"测试1：查找元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试1：查找元素"}},[e._v("#")]),e._v(" 测试1：查找元素")]),e._v(" "),a("p",[e._v("我们搜索数字"),a("code",[e._v("123123")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let result;\nconsole.time('Array'); \nresult = arr.indexOf(123123) !== -1; \nconsole.timeEnd('Array');\nconsole.time('Set'); \nresult = set.has(123123); \nconsole.timeEnd('Set');\n复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("ul",[a("li",[e._v("Array: 0.173ms")]),e._v(" "),a("li",[e._v("Set: 0.023ms")])]),e._v(" "),a("p",[a("code",[e._v("Set")]),e._v(" 速度快了"),a("code",[e._v("7.54")]),e._v("倍")]),e._v(" "),a("h4",{attrs:{id:"测试2：添加元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试2：添加元素"}},[e._v("#")]),e._v(" 测试2：添加元素")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("console.time('Array'); \narr.push(n);\nconsole.timeEnd('Array');\nconsole.time('Set'); \nset.add(n);\nconsole.timeEnd('Set');\n复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("ul",[a("li",[e._v("Array: 0.018ms")]),e._v(" "),a("li",[e._v("Set: 0.003ms")])]),e._v(" "),a("p",[a("code",[e._v("Set")]),e._v(" 速度快了"),a("code",[e._v("6.73")]),e._v("倍")]),e._v(" "),a("h4",{attrs:{id:"测试3：删除元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试3：删除元素"}},[e._v("#")]),e._v(" 测试3：删除元素")]),e._v(" "),a("p",[e._v("最后，删除一个元素，由于数组没有内置方法，首先先创建一个辅助函数：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const deleteFromArr = (arr, item) => {\n  let index = arr.indexOf(item);\n  return index !== -1 && arr.splice(index, 1);\n};\n复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("这是测试的代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("console.time('Array'); \ndeleteFromArr(arr, n);\nconsole.timeEnd('Array');\nconsole.time('Set'); \nset.delete(n);\nconsole.timeEnd('Set');\n复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("ul",[a("li",[e._v("Array: 1.122ms")]),e._v(" "),a("li",[e._v("Set: 0.015ms")])]),e._v(" "),a("p",[a("code",[e._v("Set")]),e._v(" 速度快了"),a("code",[e._v("74.13")]),e._v("倍")]),e._v(" "),a("p",[e._v("总的来说，我们可以看到，使用"),a("code",[e._v("Set")]),e._v(" 极大地改善运行时间。再来看看一些"),a("code",[e._v("Set")]),e._v("有用的实际例子。")]),e._v(" "),a("h4",{attrs:{id:"案例1-从数组中删除重复的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例1-从数组中删除重复的值"}},[e._v("#")]),e._v(" 案例1:从数组中删除重复的值")]),e._v(" "),a("p",[e._v("如果想快速地从数组中删除重复的值，可以将其转换为一个 "),a("code",[e._v("Set")]),e._v("。这是迄今为止过滤惟一值最简洁的方法:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('const duplicateCollection = [\'A\', \'B\', \'B\', \'C\', \'D\', \'B\', \'C\'];\n// 将数组转换为 Set\nlet uniqueCollection = new Set(duplicateCollection);\nconsole.log(uniqueCollection) // Result: Set(4) {"A", "B", "C", "D"}\n// 值保存在数组中\nlet uniqueCollection = [...new Set(duplicateCollection)];\nconsole.log(uniqueCollection) // Result: ["A", "B", "C", "D"]\n复制代码\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h4",{attrs:{id:"案例2：谷歌面试问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例2：谷歌面试问题"}},[e._v("#")]),e._v(" 案例2：谷歌面试问题")]),e._v(" "),a("p",[a("strong",[e._v("问题：")])]),e._v(" "),a("p",[e._v("给定一个整数无序数组和变量 "),a("code",[e._v("sum")]),e._v("，如果存在数组中任意两项和使等于 "),a("code",[e._v("sum")]),e._v(" 的值，则返回"),a("code",[e._v("true")]),e._v("。否则,返回"),a("code",[e._v("false")]),e._v("。例如，数组"),a("code",[e._v("[3,5,1,4]")]),e._v("和 "),a("code",[e._v("sum = 9")]),e._v("，函数应该返回"),a("code",[e._v("true")]),e._v("，因为"),a("code",[e._v("4 + 5 = 9")]),e._v("。")]),e._v(" "),a("p",[a("strong",[e._v("解答")])]),e._v(" "),a("p",[e._v("解决这个问题的一个很好的方法是遍历数组，创建 "),a("code",[e._v("Set")]),e._v("保存相对差值。")]),e._v(" "),a("p",[e._v("当我们遇到"),a("code",[e._v("3")]),e._v("时，我们可以把"),a("code",[e._v("6")]),e._v("加到"),a("code",[e._v("Set")]),e._v("中, 因为我们知道我们需要找到"),a("code",[e._v("9")]),e._v("的和。然后，每当我们接触到数组中的新值时，我们可以检查它是否在 "),a("code",[e._v("Set")]),e._v(" 中。当遇到"),a("code",[e._v("5")]),e._v("时，在 Set 加上4。最后，当我们最终遇到"),a("code",[e._v("4")]),e._v("时，可以在"),a("code",[e._v("Set")]),e._v("中找到它，就返回"),a("code",[e._v("true")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const findSum = (arr, val) => {\n  let searchValues = new Set();\n  searchValues.add(val - arr[0]);\n  for (let i = 1, length = arr.length; i < length; i++) {\n    let searchVal = val - arr[i];\n    if (searchValues.has(arr[i])) {\n      return true;\n    } else {\n      searchValues.add(searchVal);\n    }\n  };\n  return false;\n};\n复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("p",[e._v("简洁的版本：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const findSum = (arr, sum) =>\n  arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set));\n复制代码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("因为"),a("code",[e._v("Set.prototype.has()")]),e._v("的时间复杂度仅为"),a("code",[e._v("O(1)")]),e._v("，所以使用 Set 来代替数组，最终使整个解决方案的线性运行时为"),a("code",[e._v("O(N)")]),e._v("。")]),e._v(" "),a("p",[e._v("如果使用 "),a("code",[e._v("Array.prototype.indexOf()")]),e._v("或"),a("code",[e._v("Array.prototype.includes()")]),e._v("，它们的时间复杂度都为 O(N)，则总运行时间将为"),a("code",[e._v("O(N²)")]),e._v("，慢得多！")])])}),[],!1,null,null,null);s.default=n.exports}}]);