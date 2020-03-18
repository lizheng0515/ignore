(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{397:function(s,n,e){"use strict";e.r(n);var a=e(2),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"前端路由简介以及vue-router实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端路由简介以及vue-router实现原理"}},[s._v("#")]),s._v(" 前端路由简介以及vue-router实现原理")]),s._v(" "),e("h2",{attrs:{id:"后端路由简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后端路由简介"}},[s._v("#")]),s._v(" 后端路由简介")]),s._v(" "),e("p",[s._v("路由这个概念最先是后端出现的。在以前用模板引擎开发页面时，经常会看到这样")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://www.xxx.com/login\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("大致流程可以看成这样：")]),s._v(" "),e("ol",[e("li",[s._v("浏览器发出请求")]),s._v(" "),e("li",[s._v("服务器监听到80端口（或443）有请求过来，并解析url路径")]),s._v(" "),e("li",[s._v("根据服务器的路由配置，返回相应信息（可以是 html 字串，也可以是 json 数据，图片等）")]),s._v(" "),e("li",[s._v("浏览器根据数据包的 Content-Type 来决定如何解析数据")])]),s._v(" "),e("p",[s._v("简单来说路由就是用来跟后端服务器进行交互的一种方式，通过不同的路径，来请求不同的资源，请求不同的页面是路由的其中一种功能。")]),s._v(" "),e("h2",{attrs:{id:"前端路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端路由"}},[s._v("#")]),s._v(" 前端路由")]),s._v(" "),e("h4",{attrs:{id:"_1-hash-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-hash-模式"}},[s._v("#")]),s._v(" 1. hash 模式")]),s._v(" "),e("p",[s._v("随着 ajax 的流行，异步数据请求交互运行在不刷新浏览器的情况下进行。而异步交互体验的更高级版本就是 SPA —— 单页应用。单页应用不仅仅是在页面交互是无刷新的，连页面跳转都是无刷新的，为了实现单页应用，所以就有了前端路由。 类似于服务端路由，前端路由实现起来其实也很简单，就是匹配不同的 url 路径，进行解析，然后动态的渲染出区域 html 内容。但是这样存在一个问题，就是 url 每次变化的时候，都会造成页面的刷新。那解决问题的思路便是在改变 url 的情况下，保证页面的不刷新。在 2014 年之前，大家是通过 hash 来实现路由，url hash 就是类似于：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://www.xxx.com/#/login\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("这种 #。后面 hash 值的变化，并不会导致浏览器向服务器发出请求，浏览器不发出请求，也就不会刷新页面。另外每次 hash 值的变化，还会触发"),e("code",[s._v("hashchange")]),s._v(" 这个事件，通过这个事件我们就可以知道 hash 值发生了哪些变化。然后我们便可以监听"),e("code",[s._v("hashchange")]),s._v("来实现更新页面部分内容的操作：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function matchAndUpdate () {\n   // todo 匹配 hash 做 dom 更新操作\n}\n\nwindow.addEventListener('hashchange', matchAndUpdate)\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"_2-history-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-history-模式"}},[s._v("#")]),s._v(" 2. history 模式")]),s._v(" "),e("p",[s._v("14年后，因为HTML5标准发布。多了两个 API，"),e("code",[s._v("pushState")]),s._v(" 和 "),e("code",[s._v("replaceState")]),s._v("，通过这两个 API 可以改变 url 地址且不会发送请求。同时还有"),e("code",[s._v("popstate")]),s._v(" 事件。通过这些就能用另一种方式来实现前端路由了，但原理都是跟 hash 实现相同的。用了 HTML5 的实现，单页路由的 url 就不会多出一个#，变得更加美观。但因为没有 # 号，所以当用户刷新页面之类的操作时，浏览器还是会给服务器发送请求。为了避免出现这种情况，所以这个实现需要服务器的支持，需要把所有路由都重定向到根页面。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function matchAndUpdate () {\n   // todo 匹配路径 做 dom 更新操作\n}\n\nwindow.addEventListener('popstate', matchAndUpdate)\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"vue-router-实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-实现"}},[s._v("#")]),s._v(" Vue router 实现")]),s._v(" "),e("p",[s._v("我们来看一下"),e("code",[s._v("vue-router")]),s._v("是如何定义的：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import VueRouter from 'vue-router'\nVue.use(VueRouter)\n\nconst router = new VueRouter({\n  mode: 'history',\n  routes: [...]\n})\n\nnew Vue({\n  router\n  ...\n})\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("可以看出来"),e("code",[s._v("vue-router")]),s._v("是通过 "),e("code",[s._v("Vue.use")]),s._v("的方法被注入进 Vue 实例中，在使用的时候我们需要全局用到 "),e("code",[s._v("vue-router")]),s._v("的"),e("code",[s._v("router-view")]),s._v("和"),e("code",[s._v("router-link")]),s._v("组件，以及"),e("code",[s._v("this.$router/$route")]),s._v("这样的实例对象。那么是如何实现这些操作的呢？下面我会分几个章节详细的带你进入"),e("code",[s._v("vue-router")]),s._v("的世界。")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/muwoo/blogs/issues/23",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-router 实现 -- install"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/muwoo/blogs/issues/24",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-router 实现 -- new VueRouter(options)"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/muwoo/blogs/issues/25",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-router 实现 -- HashHistory"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/muwoo/blogs/issues/26",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-router 实现 -- HTML5History"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/muwoo/blogs/issues/27",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-router 实现 -- 路由变更监听"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"造轮子-动手实现一个数据驱动的-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#造轮子-动手实现一个数据驱动的-router"}},[s._v("#")]),s._v(" 造轮子 -- 动手实现一个数据驱动的 router")]),s._v(" "),e("p",[s._v("经过上面的阐述，相信您已经对前端路由以及"),e("code",[s._v("vue-router")]),s._v("有了一些大致的了解。那么这里我们为了贯彻无解肥，我们来手把手撸一个下面这样的数据驱动的 "),e("code",[s._v("router")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("new Router({\n  id: 'router-view', // 容器视图\n  mode: 'hash', // 模式\n  routes: [\n    {\n      path: '/',\n      name: 'home',\n      component: '<div>Home</div>',\n      beforeEnter: (next) => {\n        console.log('before enter home')\n        next()\n      },\n      afterEnter: (next) => {\n        console.log('enter home')\n        next()\n      },\n      beforeLeave: (next) => {\n        console.log('start leave home')\n        next()\n      }\n    },\n    {\n      path: '/bar',\n      name: 'bar',\n      component: '<div>Bar</div>',\n      beforeEnter: (next) => {\n        console.log('before enter bar')\n        next()\n      },\n      afterEnter: (next) => {\n        console.log('enter bar')\n        next()\n      },\n      beforeLeave: (next) => {\n        console.log('start leave bar')\n        next()\n      }\n    },\n    {\n      path: '/foo',\n      name: 'foo',\n      component: '<div>Foo</div>'\n    }\n  ]\n})\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br")])]),e("h4",{attrs:{id:"思路整理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路整理"}},[s._v("#")]),s._v(" 思路整理")]),s._v(" "),e("p",[s._v("首先是数据驱动，所以我们可以通过一个"),e("code",[s._v("route")]),s._v("对象来表述当前路由状态，比如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("current = {\n    path: '/', // 路径\n    query: {}, // query\n    params: {}, // params\n    name: '', // 路由名\n    fullPath: '/', // 完整路径\n    route: {} // 记录当前路由属性\n}\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[e("code",[s._v("current.route")]),s._v("内存放当前路由的配置信息，所以我们只需要监听"),e("code",[s._v("current.route")]),s._v("的变化来动态"),e("code",[s._v("render")]),s._v("页面便可。")]),s._v(" "),e("p",[s._v("接着我么需要监听不同的路由变化，做相应的处理。以及实现"),e("code",[s._v("hash")]),s._v("和"),e("code",[s._v("history")]),s._v("模式。")]),s._v(" "),e("h4",{attrs:{id:"数据驱动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动"}},[s._v("#")]),s._v(" 数据驱动")]),s._v(" "),e("p",[s._v("这里我们延用"),e("code",[s._v("vue")]),s._v("数据驱动模型，实现一个简单的数据劫持，并更新视图。首先定义我们的"),e("code",[s._v("observer")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Observer {\n  constructor (value) {\n    this.walk(value)\n  }\n\n  walk (obj) {\n    Object.keys(obj).forEach((key) => {\n      // 如果是对象，则递归调用walk，保证每个属性都可以被defineReactive\n      if (typeof obj[key] === 'object') {\n        this.walk(obj[key])\n      }\n      defineReactive(obj, key, obj[key])\n    })\n  }\n}\n\nfunction defineReactive(obj, key, value) {\n  let dep = new Dep()\n  Object.defineProperty(obj, key, {\n    get: () => {\n      if (Dep.target) {\n        // 依赖收集\n        dep.add()\n      }\n      return value\n    },\n    set: (newValue) => {\n      value = newValue\n      // 通知更新，对应的更新视图\n      dep.notify()\n    }\n  })\n}\n\nexport function observer(value) {\n  return new Observer(value)\n}\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br")])]),e("p",[s._v("再接着，我们需要定义"),e("code",[s._v("Dep")]),s._v("和"),e("code",[s._v("Watcher")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export class Dep {\n  constructor () {\n    this.deppend = []\n  }\n  add () {\n    // 收集watcher\n    this.deppend.push(Dep.target)\n  }\n  notify () {\n    this.deppend.forEach((target) => {\n      // 调用watcher的更新函数\n      target.update()\n    })\n  }\n}\n\nDep.target = null\n\nexport function setTarget (target) {\n  Dep.target = target\n}\n\nexport function cleanTarget() {\n  Dep.target = null\n}\n\n// Watcher\nexport class Watcher {\n  constructor (vm, expression, callback) {\n    this.vm = vm\n    this.callbacks = []\n    this.expression = expression\n    this.callbacks.push(callback)\n    this.value = this.getVal()\n\n  }\n  getVal () {\n    setTarget(this)\n    // 触发 get 方法，完成对 watcher 的收集\n    let val = this.vm\n    this.expression.split('.').forEach((key) => {\n      val = val[key]\n    })\n    cleanTarget()\n    return val\n  }\n\n  // 更新动作\n  update () {\n    this.callbacks.forEach((cb) => {\n      cb()\n    })\n  }\n}\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br")])]),e("p",[s._v("到这里我们实现了一个简单的订阅-发布器，所以我们需要对"),e("code",[s._v("current.route")]),s._v("做数据劫持。一旦"),e("code",[s._v("current.route")]),s._v("更新，我们可以及时的更新当前页面：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  // 响应式数据劫持\n  observer(this.current)\n\n  // 对 current.route 对象进行依赖收集，变化时通过 render 来更新\n  new Watcher(this.current, 'route', this.render.bind(this))\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("恩....到这里，我们似乎已经完成了一个简单的响应式数据更新。其实"),e("code",[s._v("render")]),s._v("也就是动态的为页面指定区域渲染对应内容，这里只做一个简化版的"),e("code",[s._v("render")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  render() {\n    let i\n    if ((i = this.history.current) && (i = i.route) && (i = i.component)) {\n      document.getElementById(this.container).innerHTML = i\n    }\n  }\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"hash-和-history"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hash-和-history"}},[s._v("#")]),s._v(" hash 和 history")]),s._v(" "),e("p",[s._v("接下来是"),e("code",[s._v("hash")]),s._v("和"),e("code",[s._v("history")]),s._v("模式的实现，这里我们可以沿用"),e("code",[s._v("vue-router")]),s._v("的思想，建立不同的处理模型便可。来看一下我实现的核心代码：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("this.history = this.mode === 'history' ? new HTML5History(this) : new HashHistory(this)\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("当页面变化时，我们只需要监听"),e("code",[s._v("hashchange")]),s._v("和"),e("code",[s._v("popstate")]),s._v("事件，做路由转换"),e("code",[s._v("transitionTo")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  /**\n   * 路由转换\n   * @param target 目标路径\n   * @param cb 成功后的回调\n   */\n  transitionTo(target, cb) {\n    // 通过对比传入的 routes 获取匹配到的 targetRoute 对象\n    const targetRoute = match(target, this.router.routes)\n    this.confirmTransition(targetRoute, () => {\n      // 这里会触发视图更新\n      this.current.route = targetRoute\n      this.current.name = targetRoute.name\n      this.current.path = targetRoute.path\n      this.current.query = targetRoute.query || getQuery()\n      this.current.fullPath = getFullPath(this.current)\n      cb && cb()\n    })\n  }\n\n  /**\n   * 确认跳转\n   * @param route\n   * @param cb\n   */\n  confirmTransition (route, cb) {\n    // 钩子函数执行队列\n    let queue = [].concat(\n      this.router.beforeEach,\n      this.current.route.beforeLeave,\n      route.beforeEnter,\n      route.afterEnter\n    )\n    \n    // 通过 step 调度执行\n    let i = -1\n    const step = () => {\n      i ++\n      if (i > queue.length) {\n        cb()\n      } else if (queue[i]) {\n        queue[i](step)\n      } else {\n        step()\n      }\n\n    }\n    step(i)\n  }\n}\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br")])]),e("p",[s._v("这样我们一方面通过"),e("code",[s._v("this.current.route = targetRoute")]),s._v("达到了对之前劫持数据的更新，来达到视图更新。另一方面我们又通过任务队列的调度，实现了基本的钩子函数"),e("code",[s._v("beforeEach")]),s._v("、"),e("code",[s._v("beforeLeave")]),s._v("、"),e("code",[s._v("beforeEnter")]),s._v("、"),e("code",[s._v("afterEnter")]),s._v("。 到这里其实也就差不多了，接下来我们顺带着实现几个API吧：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  /**\n   * 跳转，添加历史记录\n   * @param location \n   * @example this.push({name: 'home'})\n   * @example this.push('/')\n   */\n  push (location) {\n    const targetRoute = match(location, this.router.routes)\n\n    this.transitionTo(targetRoute, () => {\n      changeUrl(this.router.base, this.current.fullPath)\n    })\n  }\n\n  /**\n   * 跳转，添加历史记录\n   * @param location\n   * @example this.replaceState({name: 'home'})\n   * @example this.replaceState('/')\n   */\n  replaceState(location) {\n    const targetRoute = match(location, this.router.routes)\n\n    this.transitionTo(targetRoute, () => {\n      changeUrl(this.router.base, this.current.fullPath, true)\n    })\n  }\n\n  go (n) {\n    window.history.go(n)\n  }\n\n  function changeUrl(path, replace) {\n    const href = window.location.href\n    const i = href.indexOf('#')\n    const base = i >= 0 ? href.slice(0, i) : href\n    if (replace) {\n      window.history.replaceState({}, '', `${base}#/${path}`)\n    } else {\n      window.history.pushState({}, '', `${base}#/${path}`)\n    }\n  }\n复制代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br")])]),e("p",[s._v("到这里也就基本上结束了。源码地址：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/muwoo/blogs/tree/master/src/router",target:"_blank",rel:"noopener noreferrer"}},[s._v("动手撸一个 router"),e("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);