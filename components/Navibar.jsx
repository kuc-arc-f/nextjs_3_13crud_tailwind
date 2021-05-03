import Link from 'next/link';
import Head from 'next/head';
//
export default function Page(){
  return (
  <div className="bg-white py-2 px-4">
    <ul className="flex">
      <li className="mr-6">
        <Link href="/">
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
