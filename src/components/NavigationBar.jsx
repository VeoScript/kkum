import Link from 'next/link'
import { useRouter } from 'next/router'
import { navigations } from "~/static/navigations"
import { signOut } from 'next-auth/client'

export default function NavigationBar({ getUser }) {
  return (
    <div className="navbar flex flex-row items-center justify-between w-full px-32 py-3 border-b border-kkum-mid text-kkum-white">
      <div className="flex flex-row items-center w-full space-x-3">
        <Link href="/home">
          <a className="font-black text-2xl text-kkum-khaki">Kkum</a>
        </Link>
        <span className="flex flex-row items-center w-full max-w-xs px-3 py-2 space-x-2 rounded-md text-gray-400 bg-kkum-mid">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input className="w-full text-sm bg-kkum-mid focus:outline-none" placeholder="Search"/>
        </span>
      </div>
      <div className="flex flex-row items-center justify-end w-full space-x-3">
        <div className="flex flex-row items-center space-x-5">
          {navigations.map(({ name, icon, href }, i) => (
            <Link href={href} key={i}>
              <a className="flex items-center text-sm text-gray-400 space-x-1">
                <span>{icon}</span>
                <span>{name}</span>
              </a>
            </Link>
          ))}
        </div>
        <hr className="h-6 border-l-2 border-kkum-mid" />
        <button className="flex flex-row items-center text-gray-400 space-x-2 focus:outline-none">
          <img className="w-8 h-8 rounded-full object-cover bg-kkum-mid" src={getUser.image} />
          <span className="font-light text-sm">{ getUser.name }</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
      </div>
    </div>
  )
}