import Head from 'next/head'
import Layout from '~/layouts/default'
import HomeContent from '~/components/HomeContent'
import { getSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Home({ getUser }) {
  return (
    <>
      <Head>
        <title>Kkum | Home</title>
      </Head>
      <Layout getUser={getUser}>
        <HomeContent getUser={getUser} />
      </Layout>
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
      getUser
    },
  }
}