import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Project({ project ,onAddTask,onDeleteTask , onDeleteProject}) {

 const [task , setTask] = useState('');

function handleTask(event)
{
    setTask(event.target.value);
}

function handleClick(){

    const guid = uuidv4();

    let updatedProj = {
        ...project,
        tasks:[...project.tasks , {
            id:guid,
            taskName: task
        }]
    }

    onAddTask(updatedProj,'modify');
}

  return (
    <div className="col-span-3">
      <div className="container flex flex-col h-screen py-20 px-10 w-2/3 gap-5 ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h2 className="font-bold text-3xl">{project.title}</h2>
            <p>Date</p>
          </div>

          <button onClick={()=> onDeleteProject(project.id)} className="p-3 py-2 text-center hover:bg-slate-200 rounded-xl">
            Delete
          </button>
        </div>

        <div>
          <p className="pb-5">{project.description}</p>
          <hr />
        </div>

        <div>
          <h2 className="font-bold text-2xl">Tasks</h2>
        </div>

        <div className="flex flex-row justify-start gap-5 ">
          <input
            type="text"
            onChange={handleTask}
            className="p-1 border-gray-400 rounded-md border-2"
          />
          <button onClick={handleClick} className="p-3 py-2 text-center rounded-xl hover:bg-slate-200">
            Add Task
          </button>
        </div>

        {project.tasks.length > 0 ? (
          <div className="flex flex-col bg-slate-200 p-5 gap-5 rounded-md">
            {project.tasks.map((task) => {
              return (
                <div
                  key={task.id}
                  className="container flex flex-row justify-between "
                >
                  <p>{task.taskName}</p>
                  <button onClick={()=>onDeleteTask(project.id ,task.id)} className="p3 py2 rounded-2xl text-center hover:text-red-500">
                    Clear
                  </button>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
