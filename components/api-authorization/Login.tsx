import axios from "axios"
import Link from "next/link"
import { UserManager, WebStorageStateStore } from "oidc-client"
import React, { SyntheticEvent, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { API_URL } from "../../constants"

const ApplicationName = "blog-client"

export const Login: React.FC<any> = (props: {
	setName: (name: string) => void
}) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isRedirect, setRedirect] = useState(false)

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault()

		const response = await fetch("https://localhost:7222/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const content = await response.json()
		console.log(response)
		setRedirect(true)
		props.setName(content.name)
	}

	if (isRedirect) {
		return {
			// <Link href="/posts">
			// 	<a>this is page!</a>
			// </Link>
			redirect: {
				destination: "/Layout",
				permanent: false,
			},
		}
	}

	return (
		<form onSubmit={submit}>
			<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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
				Sign in
			</button>
		</form>
	)
}
