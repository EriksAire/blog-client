import type { NextPage } from "next"
import { Login } from "../components/api-authorization/Login"
import { RegistrationForm } from "../components/api-authorization/RegistrationForm"
import { Layout } from "../components/Layout"
import ListOfPosts from "../components/ListOfPosts"

const Home: NextPage = () => {
	return (
		<>
			<RegistrationForm />
			<Login />
		</>
		// <Login />
		// <Layout>
		// 	<ListOfPosts />
		// </Layout>
	)
}

export default Home
