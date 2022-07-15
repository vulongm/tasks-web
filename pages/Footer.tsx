import type { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <footer className="text-black dark:text-white text-center lg:text-center p-3 bg-gray-200 dark:bg-gray-700">
      Made by <a href="https://vulongm.com" className="p-1 rounded text-black bg-fuchsia-300 hover:bg-fuchsia-200">Long</a>
    </footer>
  )
}

export default Footer
