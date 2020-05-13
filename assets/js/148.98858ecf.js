(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{496:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端基础-首页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端基础-首页"}},[t._v("#")]),t._v(" 前端基础 首页")]),t._v(" "),a("h3",{attrs:{id:"序言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序言"}},[t._v("#")]),t._v(" 序言")]),t._v(" "),a("ul",[a("li",[t._v("已经有好几个大厂有自家的小程序，本文说的小程序默认指的微信小程序。")]),t._v(" "),a("li",[t._v("我个人元旦前后业余时间，通过云开发上线了一个小程序，跟大家分享一下小程序云开发。")]),t._v(" "),a("li",[t._v("你可以通过此文，配合 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信官方文档 · 小程序"),a("OutboundLink")],1),t._v(" 尝试你的小程序云开发之旅。")]),t._v(" "),a("li",[t._v("我这个小程序使用的 基础库版本 && wx-server-sdk 版本。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9ccbc9c2ede20?w=737&h=195&f=png&s=9871",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9ccbfb115265e?w=399&h=503&f=png&s=20280",alt:""}})])]),t._v(" "),a("h3",{attrs:{id:"小程序注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序注册"}},[t._v("#")]),t._v(" 小程序注册")]),t._v(" "),a("p",[t._v("登录"),a("strong",[t._v("微信公众平台")]),t._v("，找到 "),a("strong",[t._v("小程序目录 - 小程序管理 - 添加")]),t._v("，相信大家注册小程序已经游刃有余了。\n如有遗忘，可前往 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档 · 注册"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9cbde6b97ac2a?w=1920&h=969&f=png&s=72451",alt:"创建微信小程序"}})]),t._v(" "),a("h4",{attrs:{id:"新建云开发模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建云开发模板"}},[t._v("#")]),t._v(" 新建云开发模板")]),t._v(" "),a("p",[t._v("新建项目选择一个空目录，填入 "),a("code",[t._v("AppID")]),t._v("（使用云开发能力必须填写 AppID），勾选创建 “云开发 QuickStart 项目”，点击创建即可得到一个展示云开发基础能力的示例小程序。")]),t._v(" "),a("h4",{attrs:{id:"开通云开发、创建环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开通云开发、创建环境"}},[t._v("#")]),t._v(" 开通云开发、创建环境")]),t._v(" "),a("p",[t._v("创建了第一个云开发小程序后，在开发者工具工具栏左侧，点击“云开发”按钮即可打开云控制台、根据提示开通云开发、创建云环境。")]),t._v(" "),a("h4",{attrs:{id:"查看控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看控制台"}},[t._v("#")]),t._v(" 查看控制台")]),t._v(" "),a("p",[t._v("云开发控制台是管理云开发资源的地方，控制台提供以下能力：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("运营分析")]),t._v("：查看云开发监控、配额使用量、用户访问情况")]),t._v(" "),a("li",[a("strong",[t._v("数据库")]),t._v("：管理数据库，可查看、增加、更新、查找、删除数据、管理索引、管理数据库访问权限等")]),t._v(" "),a("li",[a("strong",[t._v("存储管理")]),t._v("：查看和管理存储空间")]),t._v(" "),a("li",[a("strong",[t._v("云函数")]),t._v("：查看云函数列表、配置、日志")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9cd1f53fd612b?w=1928&h=1048&f=png&s=70485",alt:"云开发控制台"}}),t._v("\n以上详细介绍可前往 "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),a("OutboundLink")],1),t._v(" 查看")]),t._v(" "),a("h4",{attrs:{id:"项目目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目目录"}},[t._v("#")]),t._v(" 项目目录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9cdc29feb5adf?w=1928&h=1048&f=png&s=155429",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[t._v("#")]),t._v(" 创建数据库")]),t._v(" "),a("p",[t._v("云开发提供了一个 "),a("strong",[t._v("JSON 数据库")]),t._v("，数据库中的每条记录都是一个JSON格式的对象。一个数据库可以有"),a("strong",[t._v("多个集合")]),t._v("（相当于关系型数据中的表），集合可看做一个 JSON 数组，数组中的每个对象就是一条记录，记录的格式是 "),a("strong",[t._v("JSON 对象")]),t._v("。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("关系型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("文档型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("数据库 database")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("数据库 database")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("表 table")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("集合 collection")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("行 row")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("记录 record / doc")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("列 column")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字段 field")])])])]),t._v(" "),a("p",[t._v("我的示例"),a("strong",[t._v("集合")]),t._v("(我们平时说的表)数据：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxx65e0f4b5900349d6127d9c0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"buildingId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxbc5ee75e0f43ef00318efb660fb8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"buildingName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1号楼"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"roomNumber"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"101"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxx5e0f4b5b003611bd23e4d2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"buildingId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxc5ee75e0f43ef00318e6bb60fb8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"buildingName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1号楼"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"roomNumber"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"102"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxx655025e0f4b5e0026d158651eae"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"buildingId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxx5ee75e0f43ef00318e6bb60fb8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"buildingName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1号楼"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"roomNumber"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"103"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9cecdf5063c80?w=1416&h=943&f=png&s=67162",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"创建云函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建云函数"}},[t._v("#")]),t._v(" 创建云函数")]),t._v(" "),a("ul",[a("li",[t._v("微信开发者工具 找到"),a("code",[t._v("clondfunctions")]),t._v(" 右键 "),a("strong",[t._v("新建node.js 云函数")]),t._v(",新建完成。\n每一个云函数都有一个 "),a("strong",[t._v("package.json")]),t._v("文件，我们可以安装"),a("code",[t._v("node_module")]),t._v("包来本地调试云函数（下面再讲调试云函数）。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9d16da843c184?w=726&h=596&f=png&s=50536",alt:""}})]),t._v(" "),a("li",[t._v("也可以打开 "),a("strong",[t._v("云开发控制台 - 云函数 - 新建云函数")]),t._v(" ，填写完成后确定提交，创建了第一个云函数。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9cf5d950c3ab0?w=1920&h=546&f=png&s=50203",alt:""}})])]),t._v(" "),a("h4",{attrs:{id:"云函数调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云函数调用"}},[t._v("#")]),t._v(" 云函数调用")]),t._v(" "),a("p",[t._v("在创建的云函数的"),a("strong",[t._v("index.js")]),t._v("文件里处理该云函数的业务逻辑，然后开启本地调试/上传部署该云函数后，在小程序端测试调用。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("官方示例")]),t._v("：经常，我们需要在云函数中处理一些异步操作，在异步操作完成后再返回结果给到调用方。此时我们可以通过在云函数中返回一个 "),a("code",[t._v("Promise")]),t._v(" 的方法来完成。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 3 秒后返回结果给调用方（小程序 / 其他云函数）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("比如云函数名字为 "),a("code",[t._v("test")]),t._v("，，我们在小程序端测试调用：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在小程序代码中：")]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("complete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'callFunction test result: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("此时应该看到调试器输出：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("callFunction test result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[t._v("我的示例")]),t._v("：对楼栋数量的增删改查操作。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9d6c73cda0c79?w=595&h=350&f=png&s=21352",alt:""}}),t._v("\n云函数入口函数"),a("code",[t._v("main")]),t._v(":\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9d7970b7bc010?w=832&h=712&f=png&s=38704",alt:""}}),t._v("\n创建楼栋号的方法：\n"),a("ol",[a("li",[a("code",[t._v("handleCreate()")]),t._v("这个方法里用"),a("code",[t._v("promise()")]),t._v("包起来是因为需要图示77行 "),a("code",[t._v("buildingsCollection.where()")]),t._v("的返回结果来做后续处理。")]),t._v(" "),a("li",[t._v("头部注释为小程序端调用 "),a("code",[t._v("operateBuilding")]),t._v(" 这个云函数demo。")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9d94e8e585513?w=615&h=691&f=png&s=34323",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"云函数本地调试-传送门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云函数本地调试-传送门"}},[t._v("#")]),t._v(" 云函数本地调试 ("),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/local-debug.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("传送门"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("p",[t._v("云开发提供了云函数本地调试功能，在本地提供了一套与线上一致的 "),a("code",[t._v("Node.js")]),t._v(" 云函数运行环境，让开发者可以在本地对云函数调试，使用本地调试可以提高开发、调试效率：")]),t._v(" "),a("ul",[a("li",[t._v("单步调试/断点调试：比起通过云开发控制台中查看线上打的日志的方法进行调试，使用本地调试后可以对云函数 "),a("code",[t._v("Node.js")]),t._v("\n! 实例进行单步调试/断点调试")]),t._v(" "),a("li",[t._v("集成小程序测试：在模拟器中对小程序发起的交互点击等操作如果触发了开启了本地调试的云函数，会请求到本地实例而不是云端")]),t._v(" "),a("li",[t._v('优化开发流程、提高开发效率：调试阶段不需上传部署云函数，在调试云函数时，相对于不使用本地调试时的调试流程（“本地修改代码 -> 上传部署云函数 -> 调用"）的调试流程，省去了上传等待的步骤，改成只需 “本地修改 -> 调用” 的流程，大大提高开发调试效率')])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9d8b8fb8126a4?w=1920&h=1080&f=gif&s=4057034",alt:"本地调试"}})]),t._v(" "),a("h4",{attrs:{id:"云函数运行环境差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云函数运行环境差异"}},[t._v("#")]),t._v(" 云函数运行环境差异")]),t._v(" "),a("p",[t._v("本地调试中的云函数"),a("strong",[t._v("运行环境")]),t._v("与"),a("strong",[t._v("线上环境")]),t._v("有如下区别：")]),t._v(" "),a("ul",[a("li",[t._v("本地调试中通过 "),a("code",[t._v("getWXContext")]),t._v(" 获取的 "),a("code",[t._v("env")]),t._v(" 值为 "),a("code",[t._v("local")]),t._v("，也就是不管小程序端指定访问哪个环境的云函数，如果该云函数开启了本地调试，都会被触发，且其中的 "),a("code",[t._v("getWXContext().env")]),t._v(" 始终为 "),a("code",[t._v("local")])]),t._v(" "),a("li",[t._v("本地调试中不提供临时存储空间")])]),t._v(" "),a("h3",{attrs:{id:"储存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#储存"}},[t._v("#")]),t._v(" 储存")]),t._v(" "),a("p",[t._v("在小程序端可以分别调用 "),a("code",[t._v("wx.cloud.uploadFile")]),t._v(" 和 "),a("code",[t._v("wx.cloud.downloadFile")]),t._v(" 完成上传和下载云文件操作。下面简单的几行代码，即可实现在小程序内让用户选择一张图片，然后"),a("strong",[t._v("上传到云端管理")]),t._v("的功能：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让用户选择一张图片")]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chooseResult")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将图片上传至云存储空间")]),t._v("\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uploadFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定上传到的云路径")]),t._v("\n      cloudPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-photo.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定要上传的文件的小程序临时文件路径")]),t._v("\n      filePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" chooseResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempFilePaths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功回调")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'上传成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[a("strong",[t._v("下载文件")]),t._v("，可以根据文件 ID 下载文件，用户仅可下载其有访问权限的文件：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("downloadFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fileID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件 ID")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回临时文件路径")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempFilePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("strong",[t._v("云开发控制台-储存")]),t._v(" 提供对文件进行操作的功能。\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9dab315454c69?w=1928&h=1048&f=png&s=180105",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"计费相关-配额调整方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计费相关-配额调整方式"}},[t._v("#")]),t._v(" 计费相关 - 配额调整方式")]),t._v(" "),a("p",[t._v("在小程序"),a("strong",[t._v("云开发控制台 - 设置")]),t._v(" 里，可以选择适合自己的配额方案，我这里选择的免费的"),a("code",[t._v("基础版1")]),t._v(" "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9d9c536db677c?w=1254&h=981&f=png&s=46744",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"提交发布上线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交发布上线"}},[t._v("#")]),t._v(" 提交发布上线")]),t._v(" "),a("p",[t._v("小程序云开发整个 "),a("code",[t._v("上传代码 - 提交审核 - 发布版本")]),t._v(" 与普通小程序开发一样。")]),t._v(" "),a("ul",[a("li",[t._v("修改了云函数后，在"),a("code",[t._v("clodfunctions")]),t._v("目录下的云函数文件夹右键，选择"),a("strong",[t._v("上传并部署：云端安装依赖（不上传node_module）")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/13/16f9db813b62986d?w=1411&h=915&f=png&s=40508",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"小结："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结："}},[t._v("#")]),t._v(" 小结：")]),t._v(" "),a("pre",[a("code",[t._v("微信小程序云开发为开发者提供完整的原生云端支持和微信服务支持，弱化后端和运维概念，无需搭建服务器，\n使用平台提供的 API 进行核心业务开发，即可实现快速上线和迭代，\n同时这一能力，同开发者已经使用的云服务相互兼容，并不互斥。\n")])]),t._v(" "),a("ul",[a("li",[t._v("小程序云开发提供了相当友好的可视化界面，各类创建查看操作，一目了然。")]),t._v(" "),a("li",[t._v("官方帮开发者打通了数据库跟服务端，并且对接微信服务。")]),t._v(" "),a("li",[t._v("使用官方提供的API，通过云函数对数据库进行"),a("strong",[t._v("CRUD")]),t._v(",返回给小程序端进行渲染")]),t._v(" "),a("li",[t._v("很适合个人开发者，想开发一个小程序，无需其他费用（免费的基础版配额）")])])])}),[],!1,null,null,null);s.default=e.exports}}]);