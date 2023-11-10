import React from "react";

function AddNewProject(props) {
  return (
    <div className="col-span-3">
      <div className="container flex flex-col items-center  justify-center h-screen">
        <img className="h-20" src="./src/assets/no-projects.png" alt="" />
        <h2 className="font-bold text-2xl">No Project Selected</h2>
        <p className="text-gray-500 my-4">
          Select a Project or get started with a new one
        </p>
        <div className="my-4">
          <a href="" className="p-3 pt-2 text-white rounded-lg bg-gray-500">
            Create New Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default AddNewProject;
