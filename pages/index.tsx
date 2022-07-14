import type { NextPage } from 'next'
import Head from 'next/head'
import { PlusIcon, MoonIcon } from '@heroicons/react/outline'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-800">
      <Head>
        <title>To Do</title>
        <meta name="description" content="A to do app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex items-center justify-between flex-wrap bg-fuchsia-300 p-3">
        <h1 className="text-3xl font-bold">
          To Do
        </h1>
        <div className="space-x-2">
          <PlusIcon className="inline-block h-9 w-9 p-2 border rounded border-black hover:bg-white"/>
          <MoonIcon className="inline-block h-9 w-9 p-2 border rounded border-black hover:bg-white"/>
        </div>
      </nav>
      <main className="flex-grow">
      </main>
      <footer className="text-black dark:text-white text-center lg:text-center p-4 bg-gray-200 dark:bg-gray-700">
        Made by <a href="https://vulongm.com" className="p-1 text-black bg-orange-300">Long</a>
      </footer>
    </div>
  )
}

export default Home
