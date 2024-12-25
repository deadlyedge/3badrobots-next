import Image from "next/image"
import {
	SignedIn,
	SignedOut,
	SignInButton,
	// useAuth,
	UserButton,
} from "@clerk/nextjs"
import Link from "next/link"

export const LandingTopbar = ({
	gotoChannelClick,
}: {
	gotoChannelClick: string
}) => {
	return (
		<nav className="sticky top-0 z-20 bg-black/50 text-xs md:text-base flex items-center justify-between w-full h-12 p-2 backdrop-blur">
			<div className="flex">
				<Image
					src="/logo.svg"
					alt="3badrobots logo"
					width={32}
					height={32}
					priority
				/>
				<Image
					src="/logo.text.svg"
					alt="Content Image"
					width={0}
					height={0}
					style={{ width: "auto", height: "32px" }}
				/>
			</div>

			<div className="flex items-center">
				<SignedOut>
					<div className="hover:text-white">
						<SignInButton mode="modal">login</SignInButton>
					</div>
				</SignedOut>
				<SignedIn>
					<Link href={gotoChannelClick} className="mr-2 hover:text-white">
						go to my events
					</Link>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	)
}
