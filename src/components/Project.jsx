import React from "react";

function Project(props) {
  return (
    <div className="col-span-3">
      <div className="container flex flex-col h-screen py-20 px-10 w-2/3 gap-5 ">
        
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
            <h2 className="font-bold text-3xl">Title</h2>
            <p>Date</p>
            </div>
            
            <button className="p-3 py-2 text-center hover:bg-slate-200 rounded-xl">Delete</button>
        </div>

        <div>
            <p className="pb-5">Description</p>
            <hr />
        </div>

        <div>
            <h2 className="font-bold text-2xl">Tasks</h2>
        </div>

        <div className="flex flex-row justify-start gap-5 ">
            <input type="text" className="p-1 border-gray-400 rounded-md border-2" />
            <button className="p-3 py-2 text-center rounded-xl hover:bg-slate-200">Add Task</button>
        </div>

        <div className="flex flex-row justify-between bg-slate-200 p-5 rounded-md">
            <p>Practive Practivce Pracetias</p>
            <button className="p3 py2 rounded-2xl text-center hover:text-red-500">Clear</button>
        </div>

      </div>
    </div>
  );
}

export default Project;
