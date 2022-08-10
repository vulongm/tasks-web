import type { NextPage } from 'next'
import ThemeChanger from './ThemeChanger'

const Settings: NextPage = () => {
  return (
    <main className="flex-grow container mx-auto p-5">
      <h1 className="text-xl mb-3 dark:text-white">Settings</h1>
      <div className="block p-5 mb-5 rounded border bg-white dark:bg-gray-800 border-black dark:border-white">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Theme</h5>
        <p className="mb-2 text-gray-700 dark:text-gray-400">Used to set between system, light, and dark mode.</p>
        <ThemeChanger/>
      </div>
    </main>
  )
}

export default Settings
