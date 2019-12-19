module.exports = {
    title: 'This is Li Zheng',
    description: '一个前端',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/manifest.json' }], // 
    ],
    base: '/ignore/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        repo: 'lizheng0515/ignore', // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        editLinks:true,
        editLinkText:'编辑文档！',
        smoothScroll: true,//页面滚动效果
        docsDir:'docs', 
        nav:[
            { text: '前端基础', link: '/webBasics/' }, // 内部链接 以docs为根目录
            { text: '代码片段', link: '/codeBlock/' }, // 内部链接 以docs为根目录
            { text: '关于我', link: '/about/' }, // 外部链接
            // 下拉列表
            // {
            //     text: 'GitHub',
            //     items: [
            //         { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
            //         {
            //             text: '算法仓库',
            //             link: 'https://github.com/OBKoro1/Brush_algorithm'
            //         }
            //     ]
            // }
        ],
        sidebar: 'auto'

    }
};

