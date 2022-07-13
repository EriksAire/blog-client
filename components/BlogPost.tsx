import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline"
import axios from "axios"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { API_URL } from "../constants"
import PostType from "../types/post"

const token = getCookie("jwt")

const putData = (post: PostType) => {
	return axios.put(`${API_URL}/EditPost/` + post.id, post, {
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
	})
}

const BlogPost: React.FC<PostType> = (props: PostType) => {
	const [postData, setPostData] = useState<PostType>(props)
	const router = useRouter()

	//TODO: check if user is logged in
	const upVote = (isUpVote: boolean) => {
		if (token == null) {
			return router.push("/login")
		}
		let postToVote: PostType = {
			id: postData.id,
			title: postData.title,
			postBody: postData.postBody,
			rating: postData.rating,
		}
		if (isUpVote) {
			postToVote.rating++
		} else {
			postToVote.rating--
		}
		putData(postToVote)
		setPostData(postToVote)
	}

	useEffect(() => {})

	return (
		<article className="flex max-w-[800px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-2">
			<div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
				<ArrowUpIcon
					onClick={() => upVote(true)}
					className={`voteButtons hover:text-blue-400 h-6 w-6`}
				/>
				<div>{postData.rating}</div>
				<ArrowDownIcon
					onClick={() => upVote(false)}
					className={`voteButtons hover:text-blue-400 h-6 w-6`}
				></ArrowDownIcon>
			</div>
			<div>
				<div className="p-5">
					<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{/* //TODO: Make Text collapse */}
						{postData.title}
					</h2>
					<Link href={`/post/${props.id}`}>
						<a>Read More</a>
					</Link>
				</div>
			</div>
		</article>
	)
}

export default BlogPost
