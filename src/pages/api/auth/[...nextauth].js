import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
      server: {
        port: 465,
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  adapter: Adapters.Prisma.Adapter({
    prisma
  }),
  callbacks: {
    redirect: async (url, _) => {
      if (url === '/api/auth/signin') {
        return Promise.resolve('/home')
      }
      return Promise.resolve('/api/auth/signin')
    }
  },
  pages: {
    signIn: '/guard/signin',
    verifyRequest: '/guard/verify-email'
  }
}

export default (req, res) => NextAuth(req, res, options)