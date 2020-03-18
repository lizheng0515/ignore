(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{487:function(s,e,n){"use strict";n.r(e);var a=n(2),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"解密vue-ssr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解密vue-ssr"}},[s._v("#")]),s._v(" 解密Vue SSR")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("作者：百度外卖 耿彩丽 李宗原\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"引言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[s._v("#")]),s._v(" 引言")]),s._v(" "),n("p",[s._v("最近笔者和小伙伴在研究Vue SSR，但是市面上充斥了太多的从0到1的文章，对大家理解这其中的原理帮助并不是很大，因此，本文将"),n("strong",[s._v("从Vue SSR的构建流程、运行流程、SSR的特点和利弊")]),s._v("这几方面对Vue SSR有一个较为详细的介绍。最后还将附上一个笔者实现"),n("strong",[s._v("的去除Vue全家桶的Demo")]),s._v("案例。")]),s._v(" "),n("h2",{attrs:{id:"剖析构建流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#剖析构建流程"}},[s._v("#")]),s._v(" 剖析构建流程")]),s._v(" "),n("p",[s._v("首先我们镇上一张官网给出的构建图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/24/16390509c83aef03?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),n("p",[s._v("Vue SSR构建流程")]),s._v(" "),n("p",[n("strong",[s._v("app.js入口文件")])]),s._v(" "),n("p",[s._v("app.js是我们的通用entry，它的作用就是构建一个Vue的实例以供服务端和客户端使用，注意一下，在纯客户端的程序中我们的app.js将会挂载实例到dom中，而在ssr中这一部分的功能放到了Client entry中去做了。")]),s._v(" "),n("p",[n("strong",[s._v("两个entry")])]),s._v(" "),n("p",[s._v("接下里我们来看Client entry和Server entry，这两者分别是客户端的入口和服务端的入口。"),n("strong",[s._v("Client entry的功能很简单，就是挂载我们的Vue实例到指定的dom元素上")]),s._v("；Server entry是一个使用export导出的函数。主要负责调用组件内定义的获取数据的方法，获取到SSR渲染所需数据，并存储到上下文环境中。"),n("strong",[s._v("这个函数会在每一次的渲染中重复的调用")]),s._v("。")]),s._v(" "),n("p",[n("strong",[s._v("webpack打包构建")])]),s._v(" "),n("p",[s._v("然后我们的服务端代码和客户端代码通过webpack分别打包，生成Server Bundle和Client Bundle，前者会运行在服务器上通过node生成预渲染的HTML字符串，发送到我们的客户端以便完成初始化渲染；而客户端bundle就自由了，初始化渲染完全不依赖它了。客户端拿到服务端返回的HTML字符串后，会去“激活”这些静态HTML，是其变成由Vue动态管理的DOM，以便响应后续数据的变化。")]),s._v(" "),n("h2",{attrs:{id:"剖析运行流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#剖析运行流程"}},[s._v("#")]),s._v(" 剖析运行流程")]),s._v(" "),n("p",[s._v("到这里我们该谈谈ssr的程序是怎么跑起来的了。首先我们得去构建一个vue的实例，也就是我们前面构建流程中说到的app.js做的事情，但是这里不同于传统的客户端渲染的程序，我们"),n("strong",[s._v("需要用一个工厂函数去封装它，以便每一个用户的请求都能够返回一个新的实例，也就是官网说到的避免交叉污染了")]),s._v("。")]),s._v(" "),n("p",[s._v("然后我们可以暂时移步到服务端的entry中了，这里要做的就是拿到当前路由匹配的组件，调用组件里定义的一个方法（官网取名叫asyncData）拿到初始化渲染的数据，而这个方法要做的也很简单，就是"),n("strong",[s._v("去调用我们vuex store中的方法去异步获取数据")]),s._v("。")]),s._v(" "),n("p",[s._v("接下来node服务器如期启动了，跑的是我们刚写好的服务端entry里的函数。在这里还要做的就是将我们刚刚构建好的Vue实例渲染成HTML字符串，然后将拿到的数据混入我们的HTML字符串中，最后发送到我们客户端。")]),s._v(" "),n("p",[s._v("打开浏览器的network，我们看到了初始化渲染的HTML，并且是我们想要初始化的结构，且完全不依赖于客户端的js文件了。再仔细研究研究，里面有初始化的dom结构，有css，还有一个script标签。script标签里把我们在服务端entry拿到的数据挂载了window上。原来只是一个纯静态的HTML页面啊，没有任何的交互逻辑，所以啊，现在知道为啥子需要服务端跑一个vue客户端再跑一个vue了，服务端的vue只是混入了个数据渲染了个静态页面，客户端的vue才是去实现交互的！")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/24/16390509c8632678?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),n("p",[s._v("chrome network")]),s._v(" "),n("p",[s._v("顺着前面的思路，我们该看客户端的entry了。在这里客户端拿到存在window中的数据混入我们客户端的vuex中，然后分析数据去执行我们熟悉的其余客户端操作了。")]),s._v(" "),n("h2",{attrs:{id:"ssr独特之处"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssr独特之处"}},[s._v("#")]),s._v(" SSR独特之处")]),s._v(" "),n("p",[s._v("在SSR中，创建Vue实例、创建store和创建router都是套了一层"),n("strong",[s._v("工厂函数")]),s._v("的，目的就是"),n("strong",[s._v("避免数据的交叉污染")]),s._v("。")]),s._v(" "),n("p",[s._v("在服务端只能执行生命周期中的created和beforeCreate，原因是在服务端是无法操纵dom的，所以可想而知其他的周期也就是不能执行的了。")]),s._v(" "),n("p",[s._v("服务端渲染和客户端渲染不同，需要创建两个entry分别跑在服务端和客户端，"),n("strong",[s._v("并且需要webpack对其分别打包")]),s._v("；")]),s._v(" "),n("p",[n("strong",[s._v("SSR服务端请求不带cookie")]),s._v("，需要手动拿到浏览器的cookie传给服务端的请求。"),n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//www.mmxiaowu.com/article/596cbb2d436eb550a5423c30",target:"_blank",rel:"noopener noreferrer"}},[s._v("实现方式戳这里"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("p",[s._v("SSR要求dom结构规范，因为浏览器会自动给HTML添加一些结构比如tbody，但是客户端进行混淆服务端放回的HTML时，不会添加这些标签，导致混淆后的HTML和浏览器渲染的HTML不匹配。")]),s._v(" "),n("p",[n("strong",[s._v("性能问题需要多加关注。")])]),s._v(" "),n("ul",[n("li",[s._v("vue.mixin、axios拦截请求使用不当，会内存泄漏。"),n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/vuejs/vue/issues/5089",target:"_blank",rel:"noopener noreferrer"}},[s._v("原因戳这里"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("lru-cache向内存中缓存数据，需要合理缓存改动不频繁的资源。")])]),s._v(" "),n("h2",{attrs:{id:"可能是把双刃剑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可能是把双刃剑"}},[s._v("#")]),s._v(" 可能是把双刃剑")]),s._v(" "),n("p",[n("strong",[s._v("SSR的优点")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("更利于SEO。")])])]),s._v(" "),n("p",[s._v("不同爬虫工作原理类似，只会爬取源码，不会执行网站的任何脚本（Google除外，据说Googlebot可以运行javaScript）。使用了Vue或者其它MVVM框架之后，页面大多数DOM元素都是在客户端根据js动态生成，可供爬虫抓取分析的内容大大减少。另外，浏览器爬虫不会等待我们的数据完成之后再去抓取我们的页面数据。服务端渲染返回给客户端的是已经获取了异步数据并执行JavaScript脚本的最终HTML，网络爬中就可以抓取到完整页面的信息。")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("更利于首屏渲染")])])]),s._v(" "),n("p",[s._v("首屏的渲染是node发送过来的html字符串，并不依赖于js文件了，这就会使用户更快的看到页面的内容。尤其是针对大型单页应用，打包后文件体积比较大，普通客户端渲染加载所有所需文件时间较长，首页就会有一个很长的白屏等待时间。")]),s._v(" "),n("p",[n("strong",[s._v("SSR的局限")])]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("服务端压力较大")])])]),s._v(" "),n("p",[s._v("本来是通过客户端完成渲染，现在统一到服务端node服务去做。尤其是高并发访问的情况，会大量占用服务端CPU资源；")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("开发条件受限")])])]),s._v(" "),n("p",[s._v("在服务端渲染中，created和beforeCreate之外的生命周期钩子不可用，因此项目引用的第三方的库也不可用其它生命周期钩子，这对引用库的选择产生了很大的限制；")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("学习成本相对较高")])])]),s._v(" "),n("p",[s._v("除了对webpack、Vue要熟悉，还需要掌握node、Express相关技术。相对于客户端渲染，项目构建、部署过程更加复杂。")]),s._v(" "),n("h2",{attrs:{id:"去除vuex的ssr实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#去除vuex的ssr实践"}},[s._v("#")]),s._v(" 去除VUEX的SSR实践")]),s._v(" "),n("p",[s._v("先附上demo地址，"),n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/LNoe-lzy/vue-ssr-demo/tree/vue-ssr-without-vuex",target:"_blank",rel:"noopener noreferrer"}},[s._v("戳这里"),n("OutboundLink")],1),s._v("！")]),s._v(" "),n("p",[s._v("说在前面：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("vue-router不是必须的")]),s._v("，不用router其实做个vue的"),n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//link.juejin.im/%3Ftarget%3Dhttps%253A%252F%252Fgithub.com%252Fchrisvfritz%252Fprerender-spa-plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("preRender"),n("OutboundLink")],1),s._v("就可以了，完全没必要做ssr；")]),s._v(" "),n("li",[n("strong",[s._v("vuex不是必须的")]),s._v("，vuex是实现我们客户端和服务端的状态共享的关键，我们可以不使用vuex，但是我们得去实现一套数据预取的逻辑；")])]),s._v(" "),n("p",[s._v("官网的demo大而全，集成了vue-router和vuex，想想我们的项目如果没有使用到这两者，光引入就又需要改造成本，这并不是我们想搞的“丝滑般”过渡，接下来笔者将带领大家一步一步的做个“啥都没有的”demo。")]),s._v(" "),n("p",[s._v("在此笔者的思路是："),n("strong",[s._v("构造一个Vue的实例，那么我们可以用这个实例的data来存储我们的预取数据，而用methods中的方法去做数据的异步获取，这样我们只在需要预取数据的组件中去调用这个方法就可以了")]),s._v("。")]),s._v(" "),n("p",[s._v("首先我们需要让我们的组件“共享”这个EventBus，为此笔者简单的封装了一个plugin：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export default {\n install (Vue) {\n   const EventBus = new Vue({\n     data () {\n       return {\n\t      list: [],\n\t      nav: []\n       }\n     },\n     methods: {\n       getList () {\n\t      // get list\n\t\t},\n       getNav () {\n         // get nav\n       }\n     }\n   })\n   \n   Vue.prototype.$events = EventBus\n   Vue.$events = EventBus\n }\n}\n复制代码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("然后我们需要在main.js中export出我们的EventBus以便两个entry使用。这样我们的main.js就像下面这样：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import Vue from 'vue'\nimport App from './App'\nimport EventBus from './event'\n\nVue.use(EventBus)\nVue.config.devtools = true\n\nexport function createApp () {\n const app = new Vue({\n   // 注入 router 到根 Vue 实例\n   router,\n   render: h => h(App)\n })\n \n return { app, router, eventBus: app.$events }\n}\n复制代码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("接下来是我们的两个entry了。server用来匹配我们的组件并调用组件的asyncData方法去获取数据，client用来将预渲染的数据存储到我们eventBus中的data中。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// server\nimport { createApp } from './main'\n\nexport default context => {\n return new Promise((resolve, reject) => {\n   const { app, eventBus, App } = createApp()\n   // 这里笔者的demo比较简单，仅app组件需要预取数据，复杂业务可以递归遍历哈；\n   const matchedComponents = [App]\n\n   Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({\n     eventBus\n   }))).then(() => {\n     context.state = eventBus._data\n     resolve(app)\n   }).catch(reject)\n })\n}\n\n\n// client\nimport Vue from 'vue'\nimport { createApp } from './main'\nconst { app, eventBus } = createApp()\n\nif (window.__INITIAL_STATE__) {\n eventBus._data = window.__INITIAL_STATE__\n}\n\napp.$mount('#app')\n复制代码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("然后我们需要改造我们的组件了，只需要定义一个async方法去调用EventBus中的方法获取，考虑到服务端只会执行beforeCreate和created两个生命周期而beforeCreate不能拿到data，所以我们需要在created中去做数据的获取。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 服务端渲染数据预取；\nasyncData ({ store, eventBus }) {\n return eventBus.getNav()\n}\n// 将服务端拿到的数据混入vue组件中；\ncreated () {\n this.nav = this.$events.nav\n}\n复制代码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("然后是webpack的改造了，webpack的配置其实和纯客户端应用类似，为了区分客户端和服务端两个环境我们将配置分为base、client和server三部分，base就是我们的通用基础配置，而client和server分别用来打包我们的客户端和服务端代码。")]),s._v(" "),n("p",[s._v("首先是webpack.server.conf.js，用于生成server bundle来传递给createBundleRenderer函数在node服务器上调用，入口文件是我们的entry-server：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const webpack = require('webpack')\nconst merge = require('webpack-merge')\nconst nodeExternals = require('webpack-node-externals')\nconst baseConfig = require('./webpack.base.conf.js')\nconst VueSSRServerPlugin = require('vue-server-renderer/server-plugin')\n// 去除打包css的配置\nbaseConfig.module.rules[1].options = ''\n\nmodule.exports = merge(baseConfig, {\n entry: './src/entry-server.js',\n // 以 Node 适用方式导入\n target: 'node',\n // 对 bundle renderer 提供 source map 支持\n devtool: '#source-map',\n output: {\n   filename: 'server-bundle.js',\n   libraryTarget: 'commonjs2'\n },\n externals: nodeExternals({\n   whitelist: /\\.css$/\n }),\n plugins: [\n   new webpack.DefinePlugin({\n     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),\n     'process.env.VUE_ENV': '\"server\"'\n   }),\n   // 这是将服务器的整个输出\n   // 构建为单个 JSON 文件的插件。\n   // 默认文件名为 `vue-ssr-server-bundle.json`\n   new VueSSRServerPlugin()\n ]\n})\n复制代码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("p",[s._v("其次是webpack.client.conf.js，这里我们可以根据官方的配置生成clientManifest，自动推断和注入资源预加载，以及 css 链接 / script 标签到所渲染的 HTML。入口是我们的client-server:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const webpack = require('webpack')\nconst merge = require('webpack-merge')\nconst base = require('./webpack.base.conf')\nconst VueSSRClientPlugin = require('vue-server-renderer/client-plugin')\n\nconst config = merge(base, {\n entry: {\n   app: './src/entry-client.js'\n },\n plugins: [\n   new webpack.DefinePlugin({\n     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),\n     'process.env.VUE_ENV': '\"client\"'\n   }),\n   new webpack.optimize.CommonsChunkPlugin({\n     name: 'vendor',\n     minChunks: function (module) {\n       return (\n         /node_modules/.test(module.context) &&\n         !/\\.css$/.test(module.request)\n       )\n     }\n   }),\n   // 这将 webpack 运行时分离到一个引导 chunk 中，\n   // 以便可以在之后正确注入异步 chunk。\n   // 这也为你的 应用程序/vendor 代码提供了更好的缓存。\n   new webpack.optimize.CommonsChunkPlugin({\n     name: 'manifest'\n   }),\n   new VueSSRClientPlugin()\n ]\n})\n复制代码\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("p",[s._v("从localhost中我们看到ssr预取的数据已经成功出来了，大功告成！")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/24/16390509c8632678?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"结语"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),n("p",[s._v("本文介绍了Vue的SSR的构建和运行流程，也分析了SSR的特点和利弊，希望对大家了解SSR有一定的帮助。最后针对不使用vuex的SSR实现方案进行了介绍，如果感兴趣或者有疑问，欢迎大家交流。")])])}),[],!1,null,null,null);e.default=t.exports}}]);