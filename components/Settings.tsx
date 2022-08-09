import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import {useTheme} from 'next-themes'

const Settings: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
      setMounted(true)
  }, [])

  if (!mounted) {
      return null
  }
    
  return (
    <main className="flex-grow container mx-auto p-5">
      <h1 className="text-xl mb-3 dark:text-white">Settings</h1>
      <div className="block p-5 mb-5 rounded border border-gray-800 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-500">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Theme</h5>
        <p className="mb-2 text-gray-700 dark:text-gray-400">Used to set between system, light, and dark mode.</p>
        <select value={theme} onChange={e => setTheme(e.target.value)} className="inline-block h-7 bg-white dark:bg-white text-black dark:text-black">
          <option value="system" className="bg-white dark:bg-white text-black dark:text-black">System</option>
          <option value="dark" className="bg-white dark:bg-white text-black dark:text-black">Dark</option>
          <option value="light" className="bg-white dark:bg-white text-black dark:text-black">Light</option>
        </select>
      </div>
    </main>
  )
}

export default Settings
