import React from "react"
import BlogPost from "./Post/BlogPost"
import axios from "axios"
import { API_URL } from "../../constants"

const { useEffect, useState } = React

interface Post {
	id: number
	title: string
	postBody: string
	rating: number
}

const fetchData = () => {
	return axios.get(`${API_URL}`).then(({ data }) => {
		//console.log(`RES`,data)
		return data
	})
}

const BlogPosts: React.FC<any> = () => {
	const [postData, setPostData] = useState<any>([])

	useEffect(() => {
		fetchData().then((data) => {
			setPostData(data)
		})
	}, [])

	console.log(`POST DATA`, postData)

	return (
		<>
			{postData.map((item: Post) => (
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
