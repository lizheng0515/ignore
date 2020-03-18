(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{399:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"剖析-react-源码：render-流程（二）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#剖析-react-源码：render-流程（二）"}},[t._v("#")]),t._v(" 剖析 React 源码：render 流程（二）")]),t._v(" "),a("p",[t._v("这是剖析 React 源码的第三篇文章，如果你没有阅读过之前的文章，请务必先阅读一下 "),a("a",{attrs:{href:"https://github.com/KieSun/Dream/issues/18",target:"_blank",rel:"noopener noreferrer"}},[t._v("第一篇文章"),a("OutboundLink")],1),t._v(" 中提到的一些注意事项，能帮助你更好地阅读源码。")]),t._v(" "),a("h2",{attrs:{id:"reactroot-prototype-render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactroot-prototype-render"}},[t._v("#")]),t._v(" ReactRoot.prototype.render")]),t._v(" "),a("p",[t._v("在上一篇文章中，我们介绍了当 "),a("code",[t._v("ReactDom.render")]),t._v(" 执行时，内部会首先判断是否已经存在 "),a("code",[t._v("root")]),t._v("，没有的话会去创建一个 "),a("code",[t._v("root")]),t._v("。在今天的文章中，我们将会了解到存在 "),a("code",[t._v("root")]),t._v(" 以后会发生什么事情。")]),t._v(" "),a("p",[t._v("大家可以先定位到代码的第 592 行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-031954.png",alt:""}})]),t._v(" "),a("p",[t._v("大家可以看到，在上述的代码中调用了 "),a("code",[t._v("unbatchedUpdates")]),t._v(" 函数，这个函数涉及到的知识其实在 React 中相当重要。")]),t._v(" "),a("p",[t._v("大家都知道多个 "),a("code",[t._v("setState")]),t._v(" 一起执行，并不会触发 React 的多次渲染。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虽然 age 会变成 3，但不会触发 3 次渲染")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("这是因为内部会将这个三次 "),a("code",[t._v("setState")]),t._v(" 优化为一次更新，术语是批量更新（batchedUpdate），我们在后续的内容中也能看到内部是如何处理批量更新的。")]),t._v(" "),a("p",[t._v("对于 root 来说其实没必要去批量更新，所以这里调用了 "),a("code",[t._v("unbatchedUpdates")]),t._v(" 函数来告知内部不需要批量更新。")]),t._v(" "),a("p",[t._v("然后在 "),a("code",[t._v("unbatchedUpdates")]),t._v(" 回调内部判断是否存在 "),a("code",[t._v("parentComponent")]),t._v("。这一步我们可以假定不会存在 "),a("code",[t._v("parentComponent")]),t._v("，因为很少有人会在 "),a("code",[t._v("root")]),t._v(" 外部加上 "),a("code",[t._v("context")]),t._v(" 组件。不存在 "),a("code",[t._v("parentComponent")]),t._v(" 的话就会执行 "),a("code",[t._v("root.render(children, callback)")]),t._v("，这里的 "),a("code",[t._v("render")]),t._v(" 指的是 "),a("code",[t._v("ReactRoot.prototype.render")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-031956.png",alt:""}})]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("render")]),t._v(" 函数内部我们首先取出 "),a("code",[t._v("root")]),t._v("，这里的 "),a("code",[t._v("root")]),t._v(" 指的是 FiberRoot，如果你想了解 FiberRoot 相关的内容可以阅读 "),a("a",{attrs:{href:"https://github.com/KieSun/Dream/issues/19",target:"_blank",rel:"noopener noreferrer"}},[t._v("上一篇文章"),a("OutboundLink")],1),t._v("。然后创建了 "),a("code",[t._v("ReactWork")]),t._v(" 的实例，这块内容我们没有必要深究，功能就是为了在组件渲染或更新后把所有传入 "),a("code",[t._v("ReactDom.render")]),t._v(" 中的回调函数全部执行一遍。")]),t._v(" "),a("p",[t._v("接下来我们来看 "),a("code",[t._v("updateContainer")]),t._v(" 内部是怎么样的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-031958.png",alt:""}})]),t._v(" "),a("p",[t._v("我们先从 FiberRoot 的 "),a("code",[t._v("current")]),t._v(" 属性中取出它的 fiber 对象，然后计算了两个时间。这两个时间在 React 中相当重要，因此我们需要单独用一小节去学习它们。")]),t._v(" "),a("h2",{attrs:{id:"时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间"}},[t._v("#")]),t._v(" 时间")]),t._v(" "),a("p",[t._v("首先是 "),a("code",[t._v("currentTime")]),t._v("，在 "),a("code",[t._v("requestCurrentTime")]),t._v(" 函数内部计算时间的最核心函数是 "),a("code",[t._v("recomputeCurrentRendererTime")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recomputeCurrentRendererTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" currentTimeMs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" originalStartTimeMs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tcurrentRendererTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("msToExpirationTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentTimeMs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[a("code",[t._v("now()")]),t._v(" 就是 "),a("code",[t._v("performance.now()")]),t._v("，如果你不了解这个 API 的话可以阅读下 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/now",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关文档"),a("OutboundLink")],1),t._v("，"),a("code",[t._v("originalStartTimeMs")]),t._v(" 是 React 应用初始化时就会生成的一个变量，值也是 "),a("code",[t._v("performance.now()")]),t._v("，并且这个值不会在后期再被改变。那么这两个值相减以后，得到的结果也就是现在离 React 应用初始化时经过了多少时间。")]),t._v(" "),a("p",[t._v("然后我们需要把计算出来的值再通过一个公式算一遍，这里的 "),a("code",[t._v("| 0")]),t._v(" 作用是取整数，也就是说 "),a("code",[t._v("11 / 10 | 0 = 1")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-031959.png",alt:""}})]),t._v(" "),a("p",[t._v("接下来我们来假定一些变量值，代入公式来算的话会更方便大家理解。")]),t._v(" "),a("p",[t._v("假如 "),a("code",[t._v("originalStartTimeMs")]),t._v(" 为 "),a("code",[t._v("2500")]),t._v("，当前时间为 "),a("code",[t._v("5000")]),t._v("，那么算出来的差值就是 "),a("code",[t._v("2500")]),t._v("，也就是说当前距离 React 应用初始化已经过去了 2500 毫秒，最后通过公式得出的结果为：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("currentTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1073741822")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2500")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1073741572")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("接下来是计算 "),a("code",[t._v("expirationTime")]),t._v("，"),a("strong",[t._v("这个时间和优先级有关，值越大，优先级越高")]),t._v("。并且同步是优先级最高的，它的值为 "),a("code",[t._v("1073741823")]),t._v("，也就是之前我们看到的常量 "),a("code",[t._v("MAGIC_NUMBER_OFFSET")]),t._v(" 加一。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("computeExpirationForFiber")]),t._v(" 函数中存在很多分支，但是计算的核心就只有三行代码，分别是：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步")]),t._v("\nexpirationTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sync\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 交互事件，优先级较高")]),t._v("\nexpirationTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computeInteractiveExpiration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步，优先级较低")]),t._v("\nexpirationTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computeAsyncExpiration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("接下来我们就来分析 "),a("code",[t._v("computeInteractiveExpiration")]),t._v(" 函数内部是如何计算时间的，当然 "),a("code",[t._v("computeAsyncExpiration")]),t._v(" 计算时间的方式也是相同的，无非更换了两个变量。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032001.png",alt:""}})]),t._v(" "),a("p",[t._v("以上这些代码其实就是公式，我们把具体的值代入就能算出结果了。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1073741822")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1073741822")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1073741572")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1073741552")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("另外在 "),a("code",[t._v("ceiling")]),t._v(" 函数中的 "),a("code",[t._v("1 * bucketSizeMs / UNIT_SIZE")]),t._v(" 是为了抹平一段时间内的时间差，在抹平的时间差内不管有多少个任务需要执行，他们的过期时间都是同一个，这也算是一个性能优化，帮助渲染页面行为节流。")]),t._v(" "),a("p",[t._v("最后其实我们这个计算出来的 "),a("code",[t._v("expirationTime")]),t._v(" 是可以反推出另外一个时间的：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expirationTimeToMs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("expirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ExpirationTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MAGIC_NUMBER_OFFSET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" expirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UNIT_SIZE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如果我们将之前计算出来的 "),a("code",[t._v("expirationTime")]),t._v(" 代入以上代码，得出的结果如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1073741822")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1073741552")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2700")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这个时间其实和我们之前在上文中计算出来的 "),a("code",[t._v("2500")]),t._v(" 毫秒差值很接近。因为 "),a("code",[t._v("expirationTime")]),t._v(" 指的就是一个任务的过期时间，React 根据任务的优先级和当前时间来计算出一个任务的执行截止时间。只要这个值比当前时间大就可以一直让 React 延后这个任务的执行，以便让更高优先级的任务执行，但是一旦过了任务的截止时间，就必须让这个任务马上执行。")]),t._v(" "),a("p",[t._v("这部分的内容一直在算来算去，看起来可能有点头疼。当然如果你嫌麻烦，只需要记住任务的过期时间是通过当前时间加上一个常量（任务优先级不同常量不同）计算出来的。")]),t._v(" "),a("p",[t._v("另外其实你还可以在后面的代码中看到更加直观且简单的计算过期时间的方式，但是目前那部分代码还没有被使用起来。")]),t._v(" "),a("h2",{attrs:{id:"schedulerootupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedulerootupdate"}},[t._v("#")]),t._v(" scheduleRootUpdate")]),t._v(" "),a("p",[t._v("当我们计算出时间以后就会调用 "),a("code",[t._v("updateContainerAtExpirationTime")]),t._v("，这个函数其实没有什么好解析的，我们直接进入 "),a("code",[t._v("scheduleRootUpdate")]),t._v(" 函数就好。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032002.png",alt:""}})]),t._v(" "),a("p",[t._v("首先我们会创建一个 "),a("code",[t._v("update")]),t._v("，"),a("strong",[t._v("这个对象和 "),a("code",[t._v("setState")]),t._v(" 息息相关")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// update 对象的内部属性")]),t._v("\nexpirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" expirationTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ntag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UpdateState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// setState 的第一二个参数")]),t._v("\npayload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ncallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于在队列中找到下一个节点")]),t._v("\nnext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nnextEffect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("对于 "),a("code",[t._v("update")]),t._v(" 对象内部的属性来说，我们需要重点关注的是 "),a("code",[t._v("next")]),t._v(" 属性。因为 "),a("code",[t._v("update")]),t._v(" 其实就是一个队列中的节点，这个属性可以用于帮助我们寻找下一个 "),a("code",[t._v("update")]),t._v("。对于批量更新来说，我们可能会创建多个 "),a("code",[t._v("update")]),t._v("，因此我们需要将这些 "),a("code",[t._v("update")]),t._v(" 串联并存储起来，在必要的时候拿出来用于更新 "),a("code",[t._v("state")]),t._v("。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("render")]),t._v(" 的过程中其实也是一次更新的操作，但是我们并没有 "),a("code",[t._v("setState")]),t._v("，因此就把 "),a("code",[t._v("payload")]),t._v(" 赋值为 "),a("code",[t._v("{element}")]),t._v(" 了。")]),t._v(" "),a("p",[t._v("接下来我们将 "),a("code",[t._v("callback")]),t._v(" 赋值给 "),a("code",[t._v("update")]),t._v(" 的属性，这里的 "),a("code",[t._v("callback")]),t._v(" 还是 "),a("code",[t._v("ReactDom.render")]),t._v(" 的第三个参数。")]),t._v(" "),a("p",[t._v("然后我们将刚才创建出来的 "),a("code",[t._v("update")]),t._v(" 对象插入队列中，"),a("code",[t._v("enqueueUpdate")]),t._v(" 函数内部分支较多且代码简单，这里就不再贴出代码了，有兴趣的可以自行阅读。函数核心作用就是创建或者获取一个队列，然后把 "),a("code",[t._v("update")]),t._v(" 对象入队。")]),t._v(" "),a("p",[t._v("最后调用 "),a("code",[t._v("scheduleWork")]),t._v(" 函数，这里开始就是调度相关的内容，这部分内容我们将在下一篇文章中来详细解析。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("以上就是本文的全部内容了，这篇文章其实核心还是放在了计算时间上，因为这个时间和后面的调度息息相关，最后通过一张流程图总结一下 render 流程两篇文章的内容。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://yck-1254263422.cos.ap-shanghai.myqcloud.com/blog/2019-06-01-032003.png",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);