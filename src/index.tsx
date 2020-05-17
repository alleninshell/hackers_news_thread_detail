/**
 * 一个可以投票的标题（标上来源url和domain）
 * 第二行是 195 points by DoreenMichele 7 hours ago | hide | past | web | favorite | 111 comments
 * points 是由这页中的vote控制的，算法不明
 * hide 是隐藏（？），需要登陆
 * past 是站内搜索
 * web 是站外搜索
 * favorite 是发布人的收藏，需要登陆
 * 111 comments是到item页，与首页链接一致
 * 
 * 一个可以投票的评论（用户名 时间 折叠） 折叠后只留下第一行，折叠按钮展示为xx more
 * 第二行是评论内容
 * 第三行是reply按钮
 * 
 * 评论可以组成评论树 
 * 
 */
import MainContent from './components/main-content'
import Comments from './components/comments'

export default function () {
    const mock = {
        main: {},
        comments: []
    }
    /**
     * todo 实现获取main-content 和comments 的方法
     * 组装comments
     */
    return (<>
        <MainContent />
        <Comments comments={mock.comments} />
    </>)
}