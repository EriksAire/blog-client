import { LockClosedIcon } from "@heroicons/react/outline"
import axios from "axios"
import { Formik, Field, Form, ErrorMessage } from "Formik"
import { SyntheticEvent, useState } from "react"
import { Navigate } from "react-router-dom"
import { Wrapper } from "../Wrapper"
//import { loginSchema } from './validation/loginSchema'

interface User {
	email: string
	password: string
}

export const RegistrationForm: React.FC<{}> = () => {
	const initValues: User = { email: "", password: "" }
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [redirect, setRedirect] = useState(false)

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault()

		// await axios.post("http://localhost:7222/api/register", {
		// 	body: JSON.stringify({
		// 		name,
		// 		email,
		// 		password,
		// 	}),
		// })
		await fetch("https://localhost:7222/api/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		setRedirect(true)
	}

	if (redirect) {
		return <Navigate to="/login" />
	}

	return (
		<form onSubmit={submit}>
			<h1 className="h3 mb-3 fw-normal">Please register</h1>

			<input
				className="form-control"
				placeholder="Name"
				required
				onChange={(e) => setName(e.target.value)}
			/>

			<input
				type="email"
				className="form-control"
				placeholder="Email address"
				required
				onChange={(e) => setEmail(e.target.value)}
			/>

			<input
				type="password"
				className="form-control"
				placeholder="Password"
				required
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button className="w-100 btn btn-lg btn-primary" type="submit">
				Submit
			</button>
		</form>
	)

	//return (
	// <Wrapper>
	// 	<form className="mt-8 space-y-6" action="#" method="POST">
	// 		<input type="hidden" name="remember" defaultValue="true" />
	// 		<div className="rounded-md shadow-sm -space-y-px">
	// 			<div>
	// 				<label htmlFor="email-address" className="sr-only">
	// 					Email address
	// 				</label>
	// 				<input
	// 					id="email-address"
	// 					name="email"
	// 					type="email"
	// 					autoComplete="email"
	// 					required
	// 					className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
	// 					placeholder="Email address"
	// 				/>
	// 			</div>
	// 			<div>
	// 				<label htmlFor="password" className="sr-only">
	// 					Password
	// 				</label>
	// 				<input
	// 					id="password"
	// 					name="password"
	// 					type="password"
	// 					autoComplete="current-password"
	// 					required
	// 					className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
	// 					placeholder="Password"
	// 				/>
	// 			</div>
	// 		</div>

	// 		<div className="flex items-center justify-between">
	// 			<div className="flex items-center">
	// 				<input
	// 					id="remember-me"
	// 					name="remember-me"
	// 					type="checkbox"
	// 					className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
	// 				/>
	// 				<label
	// 					htmlFor="remember-me"
	// 					className="ml-2 block text-sm text-gray-900"
	// 				>
	// 					Remember me
	// 				</label>
	// 			</div>

	// 			<div className="text-sm">
	// 				<a
	// 					href="#"
	// 					className="font-medium text-indigo-600 hover:text-indigo-500"
	// 				>
	// 					Forgot your password?
	// 				</a>
	// 			</div>
	// 		</div>

	// 		<div>
	// 			<button
	// 				type="submit"
	// 				className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
	// 			>
	// 				<span className="absolute left-0 inset-y-0 flex items-center pl-3">
	// 					<LockClosedIcon
	// 						className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
	// 						aria-hidden="true"
	// 					/>
	// 				</span>
	// 				Sign in
	// 			</button>
	// 		</div>
	// 	</form>
	// </Wrapper>
	//)
}
