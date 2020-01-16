module.exports = {
    title: '前端开发体系',
    description: '查缺补漏，厚积薄发',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/manifest.json' }], //
        ["link", { rel: "stylesheet", href: "/css/style.css" }],//自定义样式
    ],
    base: '/ignore/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        repo: 'lizheng0515/ignore', // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        editLinks:true,
        editLinkText:'你有不同的理解？',
        smoothScroll: true,//页面滚动效果
        docsDir:'docs',
        nav: require('./nav.js'),
        sidebar: require('./sidebar.js'),

    },
    plugins: {
        '@vuepress/medium-zoom': {
            selector: '.content__default img',
        },
        '@vuepress/back-to-top':true,
    }
};

