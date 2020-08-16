module.exports = {
    title: 'LG的个人博客',  //标题
    keywords: '前端开发',
    description: '前端开发 lhs的个人博客',
    repo: 'https://github.com/zeroonbush/blog.git',  //仓库地址
    base: '/myBlog/',  // 配合部署项目
    head: [
        // ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {  //主题配置
        // logo: '/img/logo.png',
        nav: [  //导航栏
            { text: '首页', link: '/' },
            { text: 'Html', link: '/html_docs/' },
            { text: 'JS', link: '/js_docs/' },
            { text: 'CSS', link: '/css_docs/' },
            { text: 'Vue', link: '/vue_docs/' },
            { text: 'Node', link: '/node_docs/' },
            //   {
            //       text: '2020',
            //       ariLabel: '2020',
            //       items: [  //多级导航栏
            //           { text: 'May', link: '/2020/5/' },
            //           { text: 'June', link: '/2020/6/' }
            //       ]
            //   },
            { text: 'github', link: 'https://github.com/leigong421/myBlog' }
        ],
        sidebar: {  //侧边拦
            '/html_docs/': [
                '',
                'html5新增标签',
                'html5存储'
            ],
            '/css_docs/': [
                '',
                '字符样式的区分',
            ],
            '/js_docs/': [
                '',
                '统计字符出现次数',
                '排序',
                '数组扁平化',
                '数组去重'
            ],
            '/vue_docs/': [
                '',
                '组件传参',
                '开发规范'
            ],
            '/node_docs/': [
                '',
                'nodejs底层原理介绍',
            ],
            //   '/2020/': [
            //       ['/2020/5/', '5月份'],
            //       ['/2020/6/', '6月份']
            //   ]
        }
    }
}