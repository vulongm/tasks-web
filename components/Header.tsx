import type { NextPage } from 'next'
import Link from 'next/link'
import { CollectionIcon, CogIcon } from '@heroicons/react/outline'

const Header: NextPage = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-3 text-black bg-fuchsia-300">
      <h1 className="text-3xl font-bold">
        Tasks
      </h1>
      <div className="space-x-2">
        <Link href="/">
          <CollectionIcon className="inline-block h-9 w-9 p-2 border rounded border-black hover:bg-fuchsia-200"/>
        </Link>
        <Link href="/settings">
          <CogIcon className="inline-block h-9 w-9 p-2 border rounded border-black hover:bg-fuchsia-200"/>
        </Link>
      </div>
    </nav>
  )
}

export default Header
