module.exports = {
    base: '/zyd-blog/',
    title: 'zyd-blog',
    description: 'zyd 的个人博客记录',


    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/zhengyadong/zyd-blog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: '/blog/menu.md' }
        ],

        sidebar: [
            ['/', '首页'],
            ['/blog/menu.md', '博客导航']
        ]

  }
}