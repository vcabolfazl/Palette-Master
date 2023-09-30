import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Header() {
 const router = useRouter()

 return (
  <header className={`border-b border-gray-500 ${router.pathname == "/" ? "hidden" : "block"}`}>
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center">
     <img src="/assets/images/logo.svg" className="h-8 mr-3" alt="Palette Master Logo" />
     <span className="self-center text-2xl font-semibold whitespace-nowrap">Palette Master</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
     <span className="sr-only">Open main menu</span>
     <svg className="w-5 h-5">
      <use href='#menu'></use>
     </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
     <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
      <li>
       <Link href="/Web" className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 ">Web Design</Link>
      </li>
      <li>
       <Link href="/Mobile" className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 ">Mobile Design</Link>
      </li>
      <li>
       <Link href="#" className="block py-2 pl-3 pr-4  rounded  md:border-0 md:p-0 ">About</Link>
      </li>
     </ul>
    </div>
   </div>
  </header>
 )
}
