
const jsBasicSidebar = [
    {
        title: 'JS基础',
        collapsable: true,
        children: [
            ['/md/js/jsBasic/DOM.md','DOM'],
            ['/md/js/jsBasic/2.md','2']
        ]
    },

];
const esSidebar = [
    {
        title: 'ES6',
        collapsable: true,
        children: [
            ['/md/js/es6/es6.md','ES6'],
            ['/md/js/es6/es2020.md','ES2020'],
        ]
    },

]

module.exports = {
    '/md/js/jsBasic': jsBasicSidebar,  //js模块下面的侧边栏
    '/md/js/es6': esSidebar,
}


