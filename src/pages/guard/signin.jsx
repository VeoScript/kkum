import Head from 'next/head'
import { signIn, getSession, getProviders, getCsrfToken } from 'next-auth/client'

export default function SignIn({ providers, csrfToken  }) {
  return (
    <>
      <Head>
        <title>KKUM</title>
      </Head>
      <div className="flex flex-row items-center justify-center w-full h-screen">
        <div className="flex flex-col items-center justify-center w-full max-w-sm space-y-5">
          <div className="flex flex-col items-center w-full">
            <form className="flex flex-col w-full space-y-2" method="post" action="/api/auth/signin/email">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <label>Email</label>
              <input className="px-3 py-2 border border-gray-500 focus:outline-none" type="email" id="email" name="email" />
              <button className="px-3 py-2 border border-gray-500 focus:outline-none" type="submit">Sign in with Email</button>
            </form>
          </div>
          <div className="flex flex-col w-full h-full space-y-2">
            {Object.values(providers).map((provider) => {
              if (provider.name === "Email") {
                return
              }
              return (
                <div key={provider.name}>
                  <button
                    className="w-full px-5 py-3 bg-gray-800 text-white rounded-full transition ease-in-out duration-200 transform hover:scale-95"
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in with { provider.name }
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const { req, res } = ctx
  const providers = await getProviders(ctx)
  const csrfToken = await getCsrfToken(ctx)
  const session = await getSession({ req })

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/"
    })
    res.end()
    return {
      session: undefined,
      providers: await providers(ctx),
      csrfToken: await getCsrfToken(ctx)
    }
  }
  return {
    props: {
      csrfToken,
      providers
    }
  }
}