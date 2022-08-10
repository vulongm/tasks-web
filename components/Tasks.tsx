import type { NextPage } from 'next'
import { PlusIcon, PencilIcon, XIcon } from '@heroicons/react/outline'

const Tasks: NextPage = () => {
  let tasks: String[] = ['Test']

  const handleKeyDown = (e: { target: { style: { height: string }; scrollHeight: any } }) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  return (
    <div className="flex-grow container mx-auto p-5">
      <form className="p-2 block mb-5 rounded border bg-white dark:bg-gray-800 border-gray-500 dark:border-gray-500">
        <div className="flex justify-between items-center">
          <textarea className="flex-1 w-full pl-2 mr-2 text-black dark:text-white bg-white dark:bg-gray-800 hover:border-none dark:hover:border-none" placeholder="Enter task here" onKeyDown={handleKeyDown}/>
          <PlusIcon className="h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500"/>
        </div>
      </form>
      {tasks && tasks.map((note, index) =>
        <div className="block p-2 mb-5 rounded border bg-white dark:bg-gray-800 border-gray-500 dark:border-gray-500" key={index}>
          <div className="flex justify-between items-center">
            <p className="pl-2 text-black dark:text-white">{tasks}</p>
            <div className="pl-2 flex justify-between items-center">
              <PencilIcon className="h-9 w-9 p-2 mr-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500"/>
              <XIcon className="h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500"/>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tasks
