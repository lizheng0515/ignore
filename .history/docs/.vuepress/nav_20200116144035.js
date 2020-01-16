module.exports = [
    { text: '资源工具', link: '/md/resource/resource' }, // 各类工具，资源，教程，社区
    { text: '导读', link: '/md/introduction/introduction' },
    {
        text: 'Javascript',
        items: [
            { text: 'JS基础', link: '/md/js/jsBasic/' },
            { text: 'ES6', link: '/md/js/es6/' },
            {
                text: 'JS书籍',
                items: [
                    { text: '你不知道的JavaScript(上)', link: '/md/js/book/你不知道的javascript上' },
                    { text: '你不知道的JavaScript(中)', link: '/md/js/book/你不知道的javascript中' },
                ]
            },
        ]
    },

    // {
    //     text: '前端概括',
    //     items: [
    //         { text: 'CSS', link: '' },
    //         { text: 'HTML5', link: '' },
    //         { text: 'HTTP', link: '' },
    //         {
    //             text: '解决方案',
    //             items: [
    //                 { text: '小程序', link: '' },
    //                 { text: 'flutter', link: '' },
    //                 { text: 'uniApp', link: '' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     text: '前端框架',
    //     items: [
    //         { text: 'Vue.js', link: '' },
    //         { text: 'React', link: '' },
    //         { text: 'Angular', link: '' },
    //         { text: 'jQuery', link: '' },
    //         {
    //             text: 'UI库',
    //             items: [
    //                 { text: 'elementUI', link: '' },
    //                 { text: 'MUI', link: '' },
    //             ]
    //         },
    //     ]
    // },
    {
        text: '日积月累',
        items: [
            { text: '每日壹题', link: '/md/performance/performance' },
            // { text: '每周汇总', link: '/md/performance/performance' },
        ]
    },
    {
        text: '代码片段',
        items: [
            { text: '小模块', link: '/md/codeBlock' },
            // { text: '小组件', link: '/md/codeBlock/README' },
            // { text: '小记录', link: '/md/codeBlock/README' },
        ]
    },

    { text: '关于我', link: '/md/about/' }, // 外部链接

]