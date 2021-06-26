import Head from 'next/head'
import Link from 'next/link'

export default function VerifyEmail() {
  return (
    <>
      <Head>
        <title>Kkum | Email Verification</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h1>Check your email for the verification.</h1>
        <Link href="/">
          <a>Back to Index Page</a>
        </Link>
      </div>
    </>
  )
}