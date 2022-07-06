import React from "react"
import BlogPost from "./Post/BlogPost"
import axios from "axios"
import { API_URL } from "../../constants"
import { getCookie } from "cookies-next"
import { Wrapper } from "../Wrapper"
import PostType from "../../types/post"

const { useEffect, useState } = React

const token = getCookie("jwt")

//TODO: Migrate to getStaticProps
const fetchData = async () => {
	return await axios
		.get(`${API_URL}`, {
			withCredentials: true,
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
		})
		.then(({ data }) => {
			return data
		})
}

const BlogPosts: React.FC<any> = () => {
	const [postData, setPostData] = useState<PostType[]>([])
	const [isLoading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		fetchData().then((data) => {
			setPostData(data)
			setLoading(false)
			console.log(data)
		})
	}, [])

	console.log(`POST DATA`, postData)

	if (isLoading) return <div>Loading...</div>
	if (!postData) return <div>No posts at the moment</div>

	return (
		<>
			{postData.map((item: PostType) => (
				<BlogPost
					key={item.id}
					id={item.id}
					title={item.title}
					postBody={item.postBody}
					rating={item.rating}
				/>
			))}
		</>
	)
}

export default BlogPosts
