import axios from "axios"
import { getCookie } from "cookies-next"
import { useRouter } from "next/router"
import { SyntheticEvent, useState } from "react"
import { NavBar } from "../components/NavBar"
import { API_URL_AUTH } from "../constants"

const Login: React.FC<{}> = () => {
	const router = useRouter()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [redirect, setRedirect] = useState(false)

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault()

		await axios
			.post(
				`${API_URL_AUTH}/login`,
				{ email, password },
				{
					withCredentials: true,
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((res) => {
				console.log(res)
			})
		console.log(redirect)

		if (getCookie("jwt") != null) {
			setRedirect(true)
		}
	}

	if (redirect) {
		router.push("/")
	}
	return (
		<div>
			<NavBar />
			<div className="flex flex-col w-screen container justify-center items-center">
				<form className="mt-8 space-y-6 w-[800px]" onSubmit={submit}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Sign in
						</button>
					</div>
				</form>
				{/* </Wrapper> */}
			</div>
		</div>
	)
}

export default Login
