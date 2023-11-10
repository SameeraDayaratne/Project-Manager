import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function ProjectForm({onCancelClick , onAddProject}) {

  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [date , setDate] = useState('');

function handleTitleChange(event){
  setTitle(event.target.value);
}

function handleDscriptionChange(event){
  setDescription(event.target.value);
}

function handleDateChange(event){
  setDate(event.target.value);
}



  function submitHandler(event){
    event.preventDefault();
    const guid = uuidv4();
    
    let project = {
      id: guid,
      title:title,
      description: description,
      date: new Date(date),
      tasks:[]
    }

    onAddProject(project);

  }



  return (
    <div className="col-span-3">
      <div className="container flex flex-col items-center  justify-center h-screen">
        <div className="w-1/2 p-10 bg-gray-50 shadow-md">
          <form onSubmit={submitHandler}>
            <div className="flex flex-row justify-end gap-2 mb-6">
              <div>
                <button
                
                  onClick={onCancelClick}
                  className="px-5 py-3 text-gray-500 rounded-lg text-center bg-slate-100 hover:bg-slate-300"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button

                  type="submit"
                  className="px-5 py-3 text-white rounded-lg text-center bg-black hover:bg-gray-700"
                >
                  Save
                </button>
              </div>
            </div>
            <div>
              <label className="text-left">Title</label>
              <input

                onChange={handleTitleChange}
                className="w-full py-1 border rounded-md border-black"
                type="text"
              />
            </div>

            <div>
              <label className="text-left">Description</label>
              <textarea
              onChange={handleDscriptionChange}
                className="w-full py-1 border rounded-md border-black"
                type="text"
              ></textarea>
            </div>

            <div>
              <label className="text-left">Due date</label>
              <input
              onChange={handleDateChange}
                className="w-full py-1 border rounded-md border-black"
                type="date"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;
