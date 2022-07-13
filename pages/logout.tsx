import axios from "axios"
import { getCookie } from "cookies-next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { API_URL_AUTH } from "../constants"

const token = getCookie("jwt")

const Logout: React.FC<{}> = () => {
	const [redirect, setRedirect] = useState(false)
	const router = useRouter()

	const fetchData = async () => {
		await axios.post(
			`${API_URL_AUTH}/logout`,
			{},
			{
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			}
		)
	}
	if (redirect) {
		router.push("/")
	}
	useEffect(() => {
		fetchData()
		setRedirect(true)
	}, [])

	return <div>Loggin out...</div>
}

export default Logout
