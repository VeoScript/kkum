import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'
import { navigations, profile_menus } from "~/static/navigations"

export default function NavigationBar({ getUser }) {

  const router = useRouter()

  const [ isOpen, setIsOpen ] = useState(false)

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
              <a className={`flex items-center text-sm text-gray-400 hover:text-kkum-khaki space-x-1 ${router.pathname === href ? 'text-kkum-khaki' : 'text-gray-400'}`}>
                <span>{icon}</span>
                <span>{name}</span>
              </a>
            </Link>
          ))}
        </div>
        <hr className="h-6 border-l-2 border-kkum-mid" />
        <div className="flex flex-col">
          <button onClick={() => {setIsOpen(true)}} className="flex flex-row items-center text-gray-400 space-x-2 focus:outline-none">
            <img className="w-8 h-8 rounded-full object-cover bg-kkum-mid" src={getUser.image} />
            <span className="font-light text-sm">{ getUser.name }</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          {setIsOpen && (
            <>
              <button onClick={() => {setIsOpen(false)}} type="button" className={`${isOpen ? 'z-20 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`}></button>
              <div className={`z-40 w-full max-w-sm h-full ${isOpen ? 'relative' : 'hidden'}`}>
                <div className="absolute w-full h-auto overflow-hidden mt-2 rounded-md shadow-xl bg-kkum-mid text-white z-10">
                  <div className="flex flex-row w-full h-auto max-h-[15rem] overflow-y-auto bg-opacity-75">
                    <div className="flex flex-col w-full">
                      {profile_menus.map(({ name, icon, href }, i) => (
                        <Link href={href} key={i}>
                          <a className="flex items-center w-full text-sm text-gray-400 px-3 py-2 hover:bg-opacity-60 hover:bg-kkum-dark space-x-2">
                            <span>{icon}</span>
                            <span>{name}</span>
                          </a>
                        </Link>
                      ))}
                      <hr className="w-full border-t-2 border-kkum-dark" />
                      <button
                        onClick={signOut}
                        className="flex items-center w-full text-sm text-gray-400 px-3 py-2 hover:bg-opacity-60 hover:bg-kkum-dark space-x-2"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        <span>Sign out</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}