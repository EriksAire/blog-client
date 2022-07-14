import axios from "axios"
import { getCookie } from "cookies-next"
import type { GetStaticProps, NextPage } from "next"
import { json } from "stream/consumers"
import BlogPost from "../components/BlogPost"
import Layout from "../components/Layout"
import { API_URL } from "../constants"
import PostType from "../types/post"
import { getPosts } from "./api/fetchApi"

const token = getCookie("jwt")

type Props = {
	items: PostType[]
}

const Home = ({ items }: Props) => {
	if (items == null) return <div>Loading</div>
	console.log(items)
	return (
		<div>
			{items.map((item) => {
				return (
					<BlogPost
						key={item.id}
						id={item.id}
						postBody={item.postBody}
						rating={item.rating}
						title={item.title}
					/>
				)
			})}
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const items = await axios
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

	return {
		props: { items },
	}
}
export default Home
