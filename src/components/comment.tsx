import Comments from './comments'
import React from 'react'
export default function(props: { content: any }) {
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
