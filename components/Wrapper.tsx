import React from "react"

export type WrapperVariant = "small" | "regular"

interface WrapperProps {
	children?: any
	variant?: WrapperVariant
}

export const Wrapper: React.FC<WrapperProps> = ({
	children,
	variant = "regular",
}) => {
	return (
		<div
			className={
				"flex container items-center justify-start" +
				(variant === "regular" ? "max-w-[800px]" : "max-w-[400px]")
			}
		>
			{children}
		</div>
	)
}
