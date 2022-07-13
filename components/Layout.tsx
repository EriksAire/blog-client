import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import React, { ReactNode } from "react"
import { NavBar } from "../components/NavBar"
import { Wrapper } from "../components/Wrapper"
import { getPosts } from "../pages/api/fetchApi"

interface LayoutProps {
	children?: ReactNode
}

// TODO: Get rid off children, if useless
const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<NavBar />
			<main className="flex mx-6 my-8 min-w-[768px]">
				<aside className="w-60 mr-12 flex-shrink-0">
					<div>TopPosts...</div>
				</aside>
				<section className="w-full mt-4">{children}</section>
			</main>
		</>
	)
}

export default Layout
