import Head from 'next/head'
import { useRouter } from 'next/router'
import { signIn, getSession, getProviders, getCsrfToken } from 'next-auth/client'

export default function SignIn({ providers, csrfToken  }) {

  const { error } = useRouter().query

  const errors = {
    Signin: "Try signing with a different account.",
    OAuthSignin: "Try signing with a different account.",
    OAuthCallback: "Try signing with a different account.",
    OAuthCreateAccount: "Try signing with a different account.",
    EmailCreateAccount: "Try signing with a different account.",
    Callback: "Try signing with a different account.",
    OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.",
    EmailSignin: "Check your email address.",
    CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
    default: "Unable to sign in.",
  }

  const SignInError = ({ error }) => {
    const errorMessage = error && (errors[error] ?? errors.default);
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      <Head>
        <title>Kkum | Sign In</title>
      </Head>
      <div className="flex flex-row items-center justify-between w-full h-screen bg-kkum-dark">
        <div className="flex flex-row items-center justify-center w-full h-full">
          <div className="flex flex-col">
            <h1 className="font-black text-5xl text-kkum-khaki">Kkum</h1>
            <h3 className="font-light text-lg text-kkum-white">
              It was designed to invigorate the people to re-imagine their lucid dreams.
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center w-full max-w-sm rounded-xl space-y-5">
            <div className="flex flex-col w-full">
              <div className={`${error ? 'px-5 py-3 mb-5 rounded-lg bg-red-500' : 'hidden'}`}>
                <span className="font-normal text-sm text-kkum-white">{error && <SignInError error={error} />}</span>
              </div>
              <h1 className="font-bold text-2xl text-kkum-white">Sign In</h1>
              <form className="flex flex-col w-full space-y-2" method="post" action="/api/auth/signin/email">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <input className="px-5 py-3 w-full rounded-lg bg-kkum-white border-2 border-kkum-mid focus:outline-none" type="email" id="email" name="email" required />
                <button className="px-5 py-3 w-full rounded-lg shadow-2xl transition ease-in-out duration-300 transform hover:scale-95 text-center text-kkum-white bg-kkum-mid focus:outline-none" type="submit">Sign in with Email</button>
              </form>
            </div>
            <div className="flex flex-row items-center w-full font-light text-sm space-x-2">
              <span className="h-0.5 w-full bg-kkum-white opacity-20"></span>
              <span className="font-normal text-sm text-kkum-white">or</span>
              <span className="h-0.5 w-full bg-kkum-white opacity-20"></span>
            </div>
            <div className="flex flex-col w-full h-full space-y-2">
              {Object.values(providers).map((provider) => {
                if (provider.name === "Email") {
                  return
                }
                return (
                  <div key={provider.name}>
                    <button
                      className={`${provider.name === "Google" ? 'text-[#fff] bg-[#DC4E41]' : provider.name === "Facebook" ? 'text-[#fff] bg-[#0B83ED]' : 'text-[#fff] bg-[#000]'} px-5 py-3 w-full rounded-lg shadow-2xl transition ease-in-out duration-300 transform hover:scale-95 text-center focus:outline-none`}
                      onClick={() => signIn(provider.id)}
                    >
                      Sign in with {provider.name}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const providers = await getProviders(ctx)
  const csrfToken = await getCsrfToken(ctx)
  const session = await getSession(ctx)

  if (session) {
    ctx.res.writeHead(302, { Location: '/home' })
    ctx.res.end()
    return {}
  }
  return {
    props: {
      csrfToken,
      providers
    }
  }
}