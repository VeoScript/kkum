import Head from 'next/head'
import { getSession } from 'next-auth/client'

export default function Home({ user }) {
  return (
    <>
      <Head>
        <title>Kkum | Home</title>
      </Head>
      <div className="flex flex-row justify-center items-center w-full h-screen">
        <div className="flex flex-col items-center w-full">
          <h1>Home</h1>
          <img className="w-20 h-20 rounded-full object-cover" src={user.image} alt="avatar" />
          <p>Welcome to Kkum {user.email}</p>
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

  return {
    props: {
      user: session.user,
    },
  }
}