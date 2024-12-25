import { currentUser, auth } from "@clerk/nextjs/server"

import { db } from "@/lib/db"

export const initialProfile = async () => {
  const { redirectToSignIn } = await auth()
  const user = await currentUser()

  if (!user) {
    return redirectToSignIn()
  }

  const profile = await db.profile.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  })

  if (profile) {
    return profile
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  })

  return newProfile
}