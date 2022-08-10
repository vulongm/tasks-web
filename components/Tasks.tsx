import type { NextPage } from 'next'
import { PencilIcon, CheckIcon, XIcon } from '@heroicons/react/outline'

const Tasks: NextPage = () => {
  return (
    <main className="flex-grow container mx-auto p-5">
      <h1 className="text-xl mb-3 dark:text-white">Active Tasks</h1>
      <div className="block p-5 mb-5 rounded border bg-white dark:bg-gray-800 border-black dark:border-white">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Eat the grape</h5>
          <div className="flex justify-between items-center">
            <PencilIcon className="h-9 w-9 p-2 mr-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500"/>
            <CheckIcon className="h-9 w-9 p-2 mr-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500"/>
            <XIcon className="h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500"/>
          </div>
        </div>
        <div className="mb-1">
          <p className="p-1 mr-1 text-sm inline rounded text-black bg-orange-300">Food</p>
          <p className="p-1 mr-1 text-sm inline rounded text-black bg-blue-300">Fruit</p>
        </div>
        <p className="text-gray-700 dark:text-gray-400">There is a grape in the living room.</p>
      </div>
      <div className="block p-5 mb-5 rounded border bg-white dark:bg-gray-800 border-black dark:border-white">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cook dinner</h5>
          <div className="flex justify-between items-center">
            <PencilIcon className="h-9 w-9 p-2 mr-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500"/>
            <CheckIcon className="h-9 w-9 p-2 mr-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500"/>
            <XIcon className="h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500"/>
          </div>
        </div>
        <p className="mb-1 dark:text-white">Due by 12:00 AM</p>
        <div className="mb-1">
          <p className="p-1 mr-1 text-sm inline rounded text-black bg-orange-300">Food</p>
          <p className="p-1 mr-1 text-sm inline rounded text-black bg-green-300">Dinner</p>
        </div>
        <p className="text-gray-700 dark:text-gray-400">There is leftover spaghetti in the fridge.</p>
      </div>
    </main>
  )
}

export default Tasks
