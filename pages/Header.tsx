import type { NextPage } from 'next'
import { PlusIcon, CogIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import {useTheme} from 'next-themes'

const Header: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="flex items-center justify-between flex-wrap p-3 text-black bg-fuchsia-300">
      <h1 className="text-3xl font-bold">
        To Do
      </h1>
      <div className="space-x-2">
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="system">System</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
        <PlusIcon className="inline-block h-9 w-9 p-2 border rounded border-black hover:bg-fuchsia-200"/>
        <CogIcon className="inline-block h-9 w-9 p-2 border rounded border-black hover:bg-fuchsia-200"/>
      </div>
    </nav>
  )
}

export default Header
