import React from "react"
import { RegistrationForm } from "./api-authorization/RegistrationForm"
import { NavBar } from "./NavBar"
import { Wrapper } from "./Wrapper"

interface LayoutProps {
	children?: any
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<NavBar />
			<Wrapper>{children}</Wrapper>
		</>
	)
}
