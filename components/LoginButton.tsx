import Router, { useRouter } from "next/router"
import Link from "next/link"

interface user {
	id: number
	Name: string
	email: string
}

export const LoginButton: React.FC<user> = (props) => {
	if (props.id == undefined) {
		return (
			<Link href="/login">
				<a>login</a>
			</Link>
		)
	} else {
		return (
			<>
				{props.Name}
				<Link href="/logout">
					<a>Logout</a>
				</Link>
			</>
		)
	}
}
