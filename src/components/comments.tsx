import Comment from './comment'
import React from 'react'

export default function(props: { comments: any[] }) {

	return (
		<ul>
			{props.comments.map((e: any) => <Comment content={e.content} />)}
		</ul>
	)
}