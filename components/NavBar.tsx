/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	GlobeIcon,
	HomeIcon,
	MenuIcon,
	PlusIcon,
	SearchIcon,
	SparklesIcon,
	SpeakerphoneIcon,
	VideoCameraIcon,
} from "@heroicons/react/outline"
import react from "react"
import { getCookie } from "cookies-next"
import { LoginButton } from "./LoginButton"
import { RegistrationButton } from "./RegistrationButton"
import axios from "axios"
import { userInfo } from "os"
import { API_URL_AUTH } from "../constants"

const secondImage = "https://links.papareact.com/23l"

// var loginButton: any
// if (getCookie("jwt") == null) {
// 	loginButton = LogineButton
// }
interface user {
	id: number
	Name: string
	email: string
}

export const NavBar: React.FC<any> = () => {
	const [user, setUser] = useState<any>()
	useEffect(() => {
		getUser()
	}, [])

	const getUser = async () => {
		await axios
			.get(`${API_URL_AUTH}/user`, {
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((res) => {
				setUser(res.data)
				console.log(res.data)
			})
			.catch((err) => console.log("Login post error", err))
	}

	return (
		<div className="sticky top-0 z-10 flex bg-white px-4 py-2 shadow-sm">
			<div className="relative h-10 w-20 flex-shrink-0 cursor-pointer mr-2">
				<Link href={"/"}>
					<a>
						<Image
							objectFit="contain"
							src="https://links.papareact.com/fqy"
							layout="fill"
						/>
					</a>
				</Link>
			</div>

			<form className="flex flex-1 item-center space-x-2 border border-gray-200 rounder-sm bg-gray-100 px-3 py-1">
				<SearchIcon className="h-6 w-6 text-gray-400" />
				<input
					className="flex-1 bg-transparent outline-none"
					type="text"
					placeholder="Search Reddit"
				/>
				<button type="submit" hidden />
			</form>

			<div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
				<BellIcon className="icon" onClick={getUser} />
				<PlusIcon className="icon" />
			</div>
			<div className="ml-5 flex items-center lg:hidden">
				<MenuIcon className="icon" />
			</div>
			<div className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
				<div className="relative h-5 w-5 flex-shrink-0">
					<Image
						loader={() => secondImage}
						src={secondImage}
						objectFit="contain"
						layout="fill"
						alt="icon"
					/>
				</div>
				<LoginButton id={user?.id} Name={user?.Name} email={user?.email} />
				<RegistrationButton />
			</div>
		</div>
	)
}
