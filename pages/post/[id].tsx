import { useRouter } from "next/router"
import Link from "next/link"
import PostType from "../../types/post"
import axios from "axios"
import { API_URL, API_URL_AUTH } from "../../constants"
import { getCookie } from "cookies-next"
import React, { useEffect, useState } from "react"
import { NavBar } from "../../components/NavBar"
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline"
import { User } from "@styled-icons/heroicons-outline"

interface CommentProps {
	PostID: number
	CommentBody: string
	AuthorName: string
}

const token = getCookie("jwt")

const fetchPost = async (id: string) => {
	return await axios

		.get(`${API_URL}/${id}`, {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
		})
		.then(({ data }) => {
			console.log(`ID + `, data)
			return data
		})
}

const putData = (post: PostType) => {
	return axios.put(`${API_URL}/EditPost/` + post.id, post, {
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
			Authorization: "Bearer " + token,
		},
	})
}

const Post: React.FC = () => {
	const [post, setPost] = useState<PostType>()
	const [isLoading, setLoading] = useState<boolean>(true)
	const [commentBody, setCommentBody] = useState<string>()
	const router = useRouter()
	const id = router.query.id as string
	const [user, setUser] = useState<any>()

	const getUser = async () => {
		await axios
			.get(`${API_URL_AUTH}/user`, {
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				setUser(res.data)
				console.log(res.data)
			})
			.catch((err) => console.log("Login post error", err))
	}

	const submit = async () => {
		const comment = {
			CommentBody: commentBody,
			Name: user.name,
			PostID: id,
		}

		return await axios
			.post(`${API_URL}/AddComment`, comment, {
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			})
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const upVote = (isUpVote: boolean) => {
		if (token == null) {
			return router.push("/login")
		}
		let postToVote: PostType = {
			id: post!.id,
			title: post!.title,
			postBody: post!.postBody,
			rating: post!.rating,
		}
		if (isUpVote) {
			postToVote.rating++
		} else {
			postToVote.rating--
		}
		putData(postToVote)
		setPost(postToVote)
	}

	useEffect(() => {
		fetchPost(id).then((data) => {
			setPost(data)
			setLoading(false)
			getUser()
			console.log(data)
		})
	}, [router.isReady]) //TODO: Find a better way to fetch data, without getting errors on first load

	if (isLoading) return <div>Loading...</div>
	if (!post) return <div>Post is empty</div>

	return (
		<>
			<NavBar />
			<div className="flex flex-col container items-center pt-20">
				<div className="flex container mx-auto max-w-[800px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-2">
					<div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
						<ArrowUpIcon
							onClick={() => upVote(true)}
							className={`voteButtons hover:text-blue-400 h-6 w-6`}
						/>
						<div className="max-w-[200px]">{post.rating}</div>
						<ArrowDownIcon
							onClick={() => upVote(false)}
							className={`voteButtons hover:text-blue-400 h-6 w-6`}
						></ArrowDownIcon>
					</div>
					<div className="px-5 break-all">
						<div className="font-bold py-2">{post.title}</div>
						<div className="py-2">{post.postBody}</div>
						<div>Comment Section</div>
					</div>
				</div>
				<div className="flex max-w-lg shadow-md w-[800px] mx-auto">
					<form onSubmit={submit} className="w-full p-4 flex-row">
						<label className="block mb-2">
							<span className="text-gray-600">Add a comment</span>
							<textarea
								id="commentBody"
								className="block w-full mt-1 rounded resize-none"
								onChange={(e) => setCommentBody(e.target.value)}
							></textarea>
						</label>
						<button
							className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
							type="submit"
						>
							Comment
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

// export async function getStaticProps(id: string) {
// 	const res = fetchPost(id)

// 	return {
// 		props: {
// 			post: res.then((data) => {
// 				return data
// 			}),
// 		},
// 	}
// }

export default Post
