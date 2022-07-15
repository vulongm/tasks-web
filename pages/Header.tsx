import type { NextPage } from 'next'
import { PlusIcon, MoonIcon } from '@heroicons/react/outline'

const Header: NextPage = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-3 bg-fuchsia-300">
      <h1 className="text-3xl font-bold">
        To Do
      </h1>
      <div className="space-x-2">
        <PlusIcon className="inline-block h-9 w-9 p-2 border rounded border-black hover:bg-fuchsia-200"/>
        <MoonIcon className="inline-block h-9 w-9 p-2 border rounded border-black hover:bg-fuchsia-200"/>
      </div>
    </nav>
  )
}

export default Header
