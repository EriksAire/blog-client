import axios from "axios"
import { checkCookies, getCookie, getCookies, setCookies } from "cookies-next"
import Router, { useRouter } from "next/router"
import { SyntheticEvent, useState } from "react"
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

export default Login
