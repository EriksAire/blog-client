import Router, { useRouter } from "next/router"
import Link from "next/link"

export const RegistrationButton: React.FC<any> = () => {
	return (
		<Link href="/Registration">
			<a>Register</a>
		</Link>
	)
}
