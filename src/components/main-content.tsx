import React from "react"

export default function (props: { mock: any }) {
	const mock = props.mock
	/**
     * 从url获取域名
     * @param url
     */
	const getDomain = (url: string): string => {
		return url
	}


	return (
		<>
			{/* 第一行 */}
			<div>
				<a href={mock.href}>{mock.title}</a>
				<a href={mock.insite_href}>{getDomain(mock.href)}</a>
			</div>
			{/* 第二行 */}
			<div>
				<ul>
					<li>
						<div>{mock.points}points by<a>{mock.author}</a>{mock.time}ago</div>

					</li>
					<li>
						<a>hide</a>
					</li>
					<li>
						<a>past</a>
					</li>
					<li>
						<a>web</a>
					</li>
					<li>
						<a>favorite</a>
					</li>
					<li>
						<a>{}comments</a>
					</li>
				</ul>
			</div>
			{/* 第三行 */}
			<textarea />
			{/* 第四行 */}
			<button>add comment</button>
		</>
	)
}