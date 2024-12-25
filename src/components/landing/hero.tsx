import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function LandingHero({
  gotoChannelClick,
}: {
  gotoChannelClick: string
}) {
  return (
    <div className='flex flex-col items-center justify-center text-white py-16 text-center space-y-5'>
				<div>
					<Image
						src="/logo.svg"
						alt="3badrobots logo"
						width={180}
						height={38}
						priority
					/>
					<Image
						src="/logo.text.svg"
						alt="3badrobots logo text"
						width={180}
						height={38}
						priority
					/>
				</div>
      <div>
        <Link href={gotoChannelClick}>
          <Button className='md:text-lg p-4 md:p-6 rounded-full font-semibold w-fit'>
            Start planning bad things NOW!
          </Button>
        </Link>
      </div>
      <div className='text-foreground text-xs md:text-sm font-normal'>
        use vercel or vps and docker to serve.
      </div>
    </div>
  )
}
