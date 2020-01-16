# 前端基础 首页

### 序言

* 已经有好几个大厂有自家的小程序，本文说的小程序默认指的微信小程序。
* 我个人元旦前后业余时间，通过云开发上线了一个小程序，跟大家分享一下小程序云开发。
* 你可以通过此文，配合 [微信官方文档 · 小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/) 尝试你的小程序云开发之旅。
* 我这个小程序使用的 基础库版本 && wx-server-sdk 版本。
![](https://user-gold-cdn.xitu.io/2020/1/13/16f9ccbc9c2ede20?w=737&h=195&f=png&s=9871)
![](https://user-gold-cdn.xitu.io/2020/1/13/16f9ccbfb115265e?w=399&h=503&f=png&s=20280)

### 小程序注册

登录**微信公众平台**，找到 **小程序目录 - 小程序管理 - 添加**，相信大家注册小程序已经游刃有余了。
如有遗忘，可前往 [官方文档 · 注册](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7)

![创建微信小程序](https://user-gold-cdn.xitu.io/2020/1/13/16f9cbde6b97ac2a?w=1920&h=969&f=png&s=72451)

#### 新建云开发模板

新建项目选择一个空目录，填入 `AppID`（使用云开发能力必须填写 AppID），勾选创建 “云开发 QuickStart 项目”，点击创建即可得到一个展示云开发基础能力的示例小程序。

#### 开通云开发、创建环境

创建了第一个云开发小程序后，在开发者工具工具栏左侧，点击“云开发”按钮即可打开云控制台、根据提示开通云开发、创建云环境。

#### 查看控制台

云开发控制台是管理云开发资源的地方，控制台提供以下能力：

* **运营分析**：查看云开发监控、配额使用量、用户访问情况
* **数据库**：管理数据库，可查看、增加、更新、查找、删除数据、管理索引、管理数据库访问权限等
* **存储管理**：查看和管理存储空间
* **云函数**：查看云函数列表、配置、日志

![云开发控制台](https://user-gold-cdn.xitu.io/2020/1/13/16f9cd1f53fd612b?w=1928&h=1048&f=png&s=70485)
以上详细介绍可前往 [传送门](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html) 查看
#### 项目目录

![](https://user-gold-cdn.xitu.io/2020/1/13/16f9cdc29feb5adf?w=1928&h=1048&f=png&s=155429) 

### 创建数据库
云开发提供了一个 **JSON 数据库**，数据库中的每条记录都是一个JSON格式的对象。一个数据库可以有**多个集合**（相当于关系型数据中的表），集合可看做一个 JSON 数组，数组中的每个对象就是一条记录，记录的格式是 **JSON 对象**。
关系型 | 文档型
:--------: | :--------:
数据库 database   | 数据库 database
表 table   | 集合 collection
行 row   | 记录 record / doc
列 column   | 字段 field

我的示例**集合**(我们平时说的表)数据：
``` json
[
    {
      "_id": "xxxxxxx65e0f4b5900349d6127d9c0",
      "buildingId": "xxxxxxxbc5ee75e0f43ef00318efb660fb8",
      "buildingName": "1号楼",
      "roomNumber": "101",
      "status": 1
    },
    {
      "_id": "xxxxxxx5e0f4b5b003611bd23e4d2",
      "buildingId": "xxxxxxxc5ee75e0f43ef00318e6bb60fb8",
      "buildingName": "1号楼",
      "roomNumber": "102",
      "status": 1
    },
    {
      "_id": "xxxxxxx655025e0f4b5e0026d158651eae",
      "buildingId": "xxxxxxx5ee75e0f43ef00318e6bb60fb8",
      "buildingName": "1号楼",
      "roomNumber": "103",
      "status": 1
    }
]
```

![](https://user-gold-cdn.xitu.io/2020/1/13/16f9cecdf5063c80?w=1416&h=943&f=png&s=67162)

### 创建云函数
* 微信开发者工具 找到`clondfunctions` 右键 **新建node.js 云函数**,新建完成。
每一个云函数都有一个 **package.json**文件，我们可以安装`node_module`包来本地调试云函数（下面再讲调试云函数）。
![](https://user-gold-cdn.xitu.io/2020/1/13/16f9d16da843c184?w=726&h=596&f=png&s=50536)
* 也可以打开 **云开发控制台 - 云函数 - 新建云函数** ，填写完成后确定提交，创建了第一个云函数。
![](https://user-gold-cdn.xitu.io/2020/1/13/16f9cf5d950c3ab0?w=1920&h=546&f=png&s=50203)


#### 云函数调用
在创建的云函数的**index.js**文件里处理该云函数的业务逻辑，然后开启本地调试/上传部署该云函数后，在小程序端测试调用。
* **官方示例**：经常，我们需要在云函数中处理一些异步操作，在异步操作完成后再返回结果给到调用方。此时我们可以通过在云函数中返回一个 `Promise` 的方法来完成。
``` js
// index.js
exports.main = async (event, context) => {
  return new Promise((resolve, reject) => {
    // 在 3 秒后返回结果给调用方（小程序 / 其他云函数）
    setTimeout(() => {
      resolve(event.a + event.b)
    }, 3000)
  })
}
```
比如云函数名字为 `test`，，我们在小程序端测试调用：
``` JavaScript
// 在小程序代码中：
wx.cloud.callFunction({
  name: 'test',
  data: {
    a: 1,
    b: 2,
  },
  complete: res => {
    console.log('callFunction test result: ', res)
  },
})
```
此时应该看到调试器输出：
``` js
callFunction test result: 3
```

* **我的示例**：对楼栋数量的增删改查操作。
![](https://user-gold-cdn.xitu.io/2020/1/13/16f9d6c73cda0c79?w=595&h=350&f=png&s=21352)
云函数入口函数`main`:
![](https://user-gold-cdn.xitu.io/2020/1/13/16f9d7970b7bc010?w=832&h=712&f=png&s=38704)
创建楼栋号的方法：
    1. `handleCreate()`这个方法里用`promise()`包起来是因为需要图示77行 ```buildingsCollection.where()```的返回结果来做后续处理。
    2. 头部注释为小程序端调用 `operateBuilding` 这个云函数demo。

![](https://user-gold-cdn.xitu.io/2020/1/13/16f9d94e8e585513?w=615&h=691&f=png&s=34323)

### 云函数本地调试 ([传送门](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/local-debug.html))
云开发提供了云函数本地调试功能，在本地提供了一套与线上一致的 `Node.js` 云函数运行环境，让开发者可以在本地对云函数调试，使用本地调试可以提高开发、调试效率：

* 单步调试/断点调试：比起通过云开发控制台中查看线上打的日志的方法进行调试，使用本地调试后可以对云函数 `Node.js`
! 实例进行单步调试/断点调试
* 集成小程序测试：在模拟器中对小程序发起的交互点击等操作如果触发了开启了本地调试的云函数，会请求到本地实例而不是云端
* 优化开发流程、提高开发效率：调试阶段不需上传部署云函数，在调试云函数时，相对于不使用本地调试时的调试流程（“本地修改代码 -> 上传部署云函数 -> 调用"）的调试流程，省去了上传等待的步骤，改成只需 “本地修改 -> 调用” 的流程，大大提高开发调试效率

![本地调试](https://user-gold-cdn.xitu.io/2020/1/13/16f9d8b8fb8126a4?w=1920&h=1080&f=gif&s=4057034)
#### 云函数运行环境差异
本地调试中的云函数**运行环境**与**线上环境**有如下区别：

* 本地调试中通过 `getWXContext` 获取的 `env` 值为 `local`，也就是不管小程序端指定访问哪个环境的云函数，如果该云函数开启了本地调试，都会被触发，且其中的 `getWXContext().env` 始终为 `local`
* 本地调试中不提供临时存储空间

### 储存

在小程序端可以分别调用 `wx.cloud.uploadFile` 和 `wx.cloud.downloadFile` 完成上传和下载云文件操作。下面简单的几行代码，即可实现在小程序内让用户选择一张图片，然后**上传到云端管理**的功能：
```js
// 让用户选择一张图片
wx.chooseImage({
  success: chooseResult => {
    // 将图片上传至云存储空间
    wx.cloud.uploadFile({
      // 指定上传到的云路径
      cloudPath: 'my-photo.png',
      // 指定要上传的文件的小程序临时文件路径
      filePath: chooseResult.tempFilePaths[0],
      // 成功回调
      success: res => {
        console.log('上传成功', res)
      },
    })
  },
})
```
**下载文件**，可以根据文件 ID 下载文件，用户仅可下载其有访问权限的文件：
```js
wx.cloud.downloadFile({
  fileID: '', // 文件 ID
  success: res => {
    // 返回临时文件路径
    console.log(res.tempFilePath)
  },
  fail: console.error
})
```
**云开发控制台-储存** 提供对文件进行操作的功能。
![](https://user-gold-cdn.xitu.io/2020/1/13/16f9dab315454c69?w=1928&h=1048&f=png&s=180105)


### 计费相关 - 配额调整方式
在小程序**云开发控制台 - 设置** 里，可以选择适合自己的配额方案，我这里选择的免费的`基础版1`
![](https://user-gold-cdn.xitu.io/2020/1/13/16f9d9c536db677c?w=1254&h=981&f=png&s=46744)

### 提交发布上线
小程序云开发整个 `上传代码 - 提交审核 - 发布版本` 与普通小程序开发一样。
- 修改了云函数后，在`clodfunctions`目录下的云函数文件夹右键，选择**上传并部署：云端安装依赖（不上传node_module）**

![](https://user-gold-cdn.xitu.io/2020/1/13/16f9db813b62986d?w=1411&h=915&f=png&s=40508)
### 小结：
    微信小程序云开发为开发者提供完整的原生云端支持和微信服务支持，弱化后端和运维概念，无需搭建服务器，
    使用平台提供的 API 进行核心业务开发，即可实现快速上线和迭代，
    同时这一能力，同开发者已经使用的云服务相互兼容，并不互斥。

- 小程序云开发提供了相当友好的可视化界面，各类创建查看操作，一目了然。
- 官方帮开发者打通了数据库跟服务端，并且对接微信服务。
- 使用官方提供的API，通过云函数对数据库进行**CRUD**,返回给小程序端进行渲染
- 很适合个人开发者，想开发一个小程序，无需其他费用（免费的基础版配额）