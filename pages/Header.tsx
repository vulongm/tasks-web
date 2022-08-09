import type { NextPage } from 'next'
import { PlusIcon, CogIcon } from '@heroicons/react/outline'

const Header: NextPage = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-3 text-black bg-fuchsia-300">
      <h1 className="text-3xl font-bold">
        Tasks
      </h1>
      <div className="space-x-2">
        <PlusIcon className="inline-block h-9 w-9 p-2 border rounded border-black hover:bg-fuchsia-200"/>
        <CogIcon className="inline-block h-9 w-9 p-2 border rounded border-black hover:bg-fuchsia-200"/>
      </div>
    </nav>
  )
}

export default Header
