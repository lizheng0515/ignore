module.exports = {
    title: 'This is Li Zheng',
    description: '一个前端',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/ignore/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        repo: 'lizheng0515/ignore', // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        smoothScroll: true,//页面滚动效果
        nav:[
            { text: '前端基础', link: '/algorithm/' }, // 内部链接 以docs为根目录
            { text: '代码片段', link: '/codeBlock/' }, // 内部链接 以docs为根目录
            { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
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
        sidebar: [
            {
                title: '侧边栏下拉框的标题 1',   // 必要的
                path: '/accumulate/',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children:  [
                    '/', // 以docs为根目录来查找文件
                    // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                    // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                ]
            },
            {
                title: '第二组侧边栏下拉框的标题 2',
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            }
        ],

    }
};

