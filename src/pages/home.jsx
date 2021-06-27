import Head from 'next/head'
import { getSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Home({ getUser }) {
  return (
    <>
      <Head>
        <title>Kkum | Home</title>
      </Head>
      <div className="flex flex-row justify-between w-full h-screen text-[#fff] bg-[#131E29]">
        <div className="flex flex-col w-full max-w-xs py-10 bg-[#1A2D38]">
          <div className="flex flex-col items-center w-full space-y-3">
            <img
              src={getUser.image}
              alt="avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-xl">{ getUser.name }</h1>
              <h1 className="font-normal text-sm">{ getUser.bio }</h1>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">

          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  if (!session) {
    ctx.res.writeHead(302, { Location: '/' })
    ctx.res.end()
    return {}
  }
  const getUser = await prisma.user.findFirst({
    where: {
      email: session.user.email
    },
    select: {
      image: true,
      name: true,
      bio: true
    }
  })
  return {
    props: {
      // user: session.user,
      getUser
    },
  }
}