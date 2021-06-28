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
      <div className="flex flex-row justify-between w-full h-screen text-kkum-white bg-kkum-dark">
        <div className="sidebar flex flex-col w-full max-w-xs py-10 bg-[#1A2D38]">
          <div className="flex flex-col items-center w-full">
            Display Web Title & and Navigation Menus
          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="topbar flex flex-row justify-between items-center w-full px-5 py-2 space-x-5 bg-kkum-mid">
            <div className="searchbox flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
              <input
                className="w-full px-5 py-3 bg-light-panther rounded-full focus:outline-none"
                placeholder="Search"
              />
              <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <div className="links flex justify-end w-full">
              Display Links and Profile
            </div>
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