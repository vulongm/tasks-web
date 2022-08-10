import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { DesktopComputerIcon, SunIcon, MoonIcon } from '@heroicons/react/outline'

const ThemeChanger: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
      setMounted(true)
  }, [])

  if (!mounted) return null
  
  if (theme === 'light') {
    return (
      <div className="space-x-2">
        <DesktopComputerIcon className="inline-block h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 hover:dark:bg-gray-500" onClick={() => setTheme('system')}/>
        <SunIcon className="inline-block h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white bg-gray-300 dark:bg-gray-500" onClick={() => setTheme('light')}/>
        <MoonIcon className="inline-block h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500" onClick={() => setTheme('dark')}/>
      </div>
    )
  } else if (theme === 'dark') {
    return (
      <div className="space-x-2">
        <DesktopComputerIcon className="inline-block h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 hover:dark:bg-gray-500" onClick={() => setTheme('system')}/>
        <SunIcon className="inline-block h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500" onClick={() => setTheme('light')}/>
        <MoonIcon className="inline-block h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white bg-gray-300 dark:bg-gray-500" onClick={() => setTheme('dark')}/>
      </div>
    )
  } else {
    return (
      <div className="space-x-2">
        <DesktopComputerIcon className="inline-block h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white bg-gray-300 dark:bg-gray-500" onClick={() => setTheme('system')}/>
        <SunIcon className="inline-block h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500" onClick={() => setTheme('light')}/>
        <MoonIcon className="inline-block h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500" onClick={() => setTheme('dark')}/>
      </div>
    )
  }
}

export default ThemeChanger
