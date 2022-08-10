import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusIcon, PencilIcon, XIcon } from '@heroicons/react/outline'

const Tasks: NextPage = () => {
  let [tasks, setTasks] = useState<any[]>([]);
  let [inputTask, setInputTask] = useState<any>("");

  const handleKeyDown = (e: { target: { style: { height: string; }; scrollHeight: any; }; }) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  const taskInput = (e: { target: { value: any; }; }) => {
    setInputTask(e.target.value);
  };

  const taskAdd = () => {
    const newTask = { id: uuidv4(), text: inputTask }
    setTasks((tasks) => [...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    setInputTask("");
  };

  const taskRemove = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  return (
    <div className="flex-grow container mx-auto p-5">
      <form className="p-2 block mb-5 rounded border bg-white dark:bg-gray-800 border-gray-500 dark:border-gray-500">
        <div className="flex justify-between items-center">
          <textarea className="flex-1 w-full pl-2 mr-2 text-black dark:text-white bg-white dark:bg-gray-800 hover:border-none dark:hover:border-none" placeholder="Enter task here" value={inputTask} onKeyDown={handleKeyDown} onChange={taskInput}/>
          <PlusIcon className="h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500" onClick={taskAdd}/>
        </div>
      </form>
      {tasks && tasks.map((task) =>
        <div className="block p-2 mb-5 rounded border bg-white dark:bg-gray-800 border-gray-500 dark:border-gray-500" key={task.id}>
          <div className="flex justify-between items-center">
            <p className="pl-2 text-black dark:text-white">{task.text}</p>
            <div className="pl-2 flex justify-between items-center">
              <XIcon className="h-9 w-9 p-2 border rounded dark:text-white border-black dark:border-white hover:bg-gray-300 dark:hover:bg-gray-500" onClick={() => taskRemove(task.id)}/>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tasks
