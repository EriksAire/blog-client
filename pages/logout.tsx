import axios from "axios"
import { getCookie } from "cookies-next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { API_URL_AUTH } from "../constants"

const token = getCookie("jwt")

const logout: React.FC = () => {
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
		router.push("/")
	}
	useEffect(() => {
		fetchData()
	}, [])

	return <div>Loggin out...</div>
}

export default logout
