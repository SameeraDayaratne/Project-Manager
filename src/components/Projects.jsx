import React from "react";

function Projects(props) {
  return (
    <div className="col-span-1 bg-black text-white  rounded-tr-[50px]">
      <div className="container mx-auto flex flex-col p-12 ">
        <h1 className="text-white font-bold text-left text-2xl mb-8">
          YOUR PROJECTS
        </h1>
        <div>
          <a href="" className="p-3 pt-2 text-white rounded-lg bg-gray-500">
            Add Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
