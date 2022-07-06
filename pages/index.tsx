import type { NextPage } from "next"
import Layout from "./Layout"
import BlogPosts from "../components/Posts/BlogPosts"

const Home: NextPage = () => {
	return (
		<Layout>
			<BlogPosts />
		</Layout>
	)
}

export default Home
