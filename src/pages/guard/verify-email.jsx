import Head from 'next/head'
import { useRouter } from 'next/router'

export default function VerifyEmail() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Kkum | Email Verification</title>
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-[#131E29]">
        <div className="flex flex-col items-center w-full">
          <h1 className="font-black text-5xl text-[#CCB57F]">Kkum</h1>
          <h3 className="font-light text-base text-[#fff]">Open the portal of your imagination.</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10">
          <div className="flex flex-col items-center text-center w-full max-w-md space-y-5">
            <h1 className="font-normal text-3xl text-[#fff]">Verify your email address</h1>
            <p className="font-normal text-lg text-[#fff]">
              Please check your email to confirm that you want to use this as your <span className="font-black text-xl text-[#CCB57F]">Kkum</span> account
              email address. Once it's done you will be able to start your odyssey.
            </p>
          </div>
          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => router.back()}
              className="px-5 py-3 mt-10 w-full max-w-sm rounded-lg shadow-2xl transition ease-in-out duration-300 transform hover:scale-95 text-center text-[#fff] bg-[#1A2D38]"
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </>
  )
}