import React from "react"
import { NavBar } from "../components/NavBar"
import BlogPosts from "../components/Posts/BlogPosts"
import { Wrapper } from "../components/Wrapper"

interface LayoutProps {
	children?: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<NavBar />
			<main className="flex mx-6 my-8 min-w-[768px]">
				{/* <NavBar /> */}
				<aside className="w-60 mr-12 flex-shrink-0">
					<div>TopPosts...</div>
				</aside>
				<section className="w-full mt-4">
					<BlogPosts />
				</section>
			</main>
		</>
	)
}

export default Layout
