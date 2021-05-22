import Link from 'next/link';
import Head from 'next/head';
//
export default function Page(){
  return (
  <div className="bg-white py-2 px-4">
    <ul className="flex">
      <li className="w-full py-1 pr-6 sm:w-auto sm:py-0">
        <Link href="/">
          <a className="navi_text_color text-3xl font-bold">
            {process.env.MY_SITE_NAME}
          </a>
        </Link>
      </li>      
      <li className="mr-6">
        <Link href="/home">
          <a className="text-blue-500 hover:text-blue-800">Home</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/tasks">
          <a className="text-blue-500 hover:text-blue-800">Tasks</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/about">
          <a className="text-blue-500 hover:text-blue-800">About</a>
        </Link>
      </li>
    </ul>    
  </div>
  )
}
