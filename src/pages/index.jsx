import Head from 'next/head'
import Link from 'next/link'
import KkumLoading from '~/components/Icons/KkumLoading'
import { signIn, useSession } from 'next-auth/client'

export default function Home() {
  const [session, loading] = useSession()

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen transition ease-in-out duration-300 bg-kkum-dark">
        <KkumLoading />
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Kkum</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-kkum-dark">
        {!session && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center w-full">
              <h1 className="font-black text-5xl text-kkum-khaki">Kkum</h1>
              <h3 className="font-light text-base text-kkum-white">Open the portal of your imagination.</h3>
              <button
                onClick={signIn}
                className="px-5 py-3 w-full max-w-xs mt-5 rounded-lg shadow-2xl transition ease-in-out duration-300 transform hover:scale-95 font-bold text-center text-kkum-white bg-kkum-mid"
              >
                Sign in
              </button>
            </div>
          </div>
        )}
        {session && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col items-center w-full">
              <h1 className="font-black text-5xl text-kkum-khaki">Kkum</h1>
              <h3 className="font-light text-base text-kkum-white">Open the portal of your imagination.</h3>
              <Link href="/home">
                <a className="px-5 py-3 w-full max-w-xs mt-5 rounded-lg shadow-2xl transition ease-in-out duration-300 transform hover:scale-95 font-bold text-center text-kkum-white bg-kkum-mid">
                  Go to Portal
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
