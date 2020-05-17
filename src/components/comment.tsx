import Comments from './comments'
export default function (props: { content: any }) {
    return (
        <>
            {/* 评论内容 */}
            <div>
                <div>{props.content}</div>
                <a>reply</a>
            </div>
            {/* 子树 */}
            <Comments comments={[]} />
        </>
    )
}