import { LandingContent } from "@/components/landing/content"
import { LandingHero } from "@/components/landing/hero"
import { LandingTopbar } from "@/components/landing/topbar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { db } from "@/lib/db"
import { initialProfile } from "@/lib/initial-profile"
import { auth, currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import { redirect } from "next/navigation"

export default async function Home() {
	const { userId } = await auth()

	let gotoChannelClick = "/setup"
	if (userId) {
		const profile = await initialProfile()
		const user = await currentUser()

		if (!profile) {
			return redirect("/setup")
		}

		const event = await db.channel.findFirst({
			where: {
				profileId: profile.id,
			},
		})

		gotoChannelClick = event ? `/events/${event.id}` : "/setup"
	}

	return (
		<main className="flex flex-col gap-8 row-start-2 items-center justify-center">
			<LandingTopbar gotoChannelClick={gotoChannelClick} />
			<ScrollArea>
				<LandingHero gotoChannelClick={gotoChannelClick} />
				<LandingContent />
			</ScrollArea>
		</main>
	)
}
