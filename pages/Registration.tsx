import { LockClosedIcon } from "@heroicons/react/outline"
import axios from "axios"
import { Formik, Field, Form, ErrorMessage } from "Formik"
import Link from "next/link"
import { useRouter } from "next/router"
import { SyntheticEvent, useState } from "react"
import { Navigate, Route } from "react-router-dom"
import { Wrapper } from "../components/Wrapper"
import { API_URL_AUTH } from "../constants"
//import { loginSchema } from './validation/loginSchema'

interface User {
	email: string
	password: string
}

const Registration: React.FC<{}> = () => {
	const router = useRouter()
	const initValues: User = { email: "", password: "" }
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [redirect, setRedirect] = useState(false)

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault()
		await axios.post(
			`${API_URL_AUTH}/register`,
			{
				name,
				email,
				password,
			},
			{
				withCredentials: true,
				headers: { "Content-Type": "application/json" },
			}
		)

		setRedirect(true)
	}

	if (redirect) {
		router.push("/")
	}

	return (
		<Wrapper>
			<form className="mt-8 space-y-6" onSubmit={submit}>
				<input type="hidden" name="remember" defaultValue="true" />
				<div className="rounded-md shadow-sm -space-y-px">
					<div>
						<label htmlFor="Name" className="sr-only">
							Name
						</label>
						<input
							id="Name"
							name="Name"
							type="text"
							className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Name"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
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

				<div className="text-sm">
					<a
						href="#"
						className="font-medium text-indigo-600 hover:text-indigo-500"
					>
						Forgot your password?
					</a>
				</div>

				<div>
					<button
						type="submit"
						className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<span className="absolute left-0 inset-y-0 flex items-center pl-3">
							<LockClosedIcon
								className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
								aria-hidden="true"
							/>
						</span>
						Sign in
					</button>
				</div>
			</form>
		</Wrapper>
	)
}

export default Registration
