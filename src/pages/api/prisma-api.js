import { getSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const session = await getSession({ req })
  const users = await prisma.user.findMany()

  if (session) {
    res.json(users)
  } else {
    res.status(403).json({
      message:
        'You must be sign in to view this Kkum API!',
    })
  }
}