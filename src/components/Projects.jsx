import React from "react";

function Projects({onAddClick,projects,onProjectClick}) {
  return (
    <div className="col-span-1 bg-black text-white  rounded-tr-[50px]">
      <div className="container mx-auto flex flex-col p-12 ">
        <h1 className="text-white font-bold text-left text-2xl mb-8">
          YOUR PROJECTS
        </h1>
        <div>
          <button onClick={onAddClick}  className="p-3 pt-2 text-white rounded-lg bg-gray-500">
            Add Project
          </button>
        </div>
        <div className="mt-6">

          {projects.map(project => {
            return(
            <div key={project.id} className="my-4">
                <button onClick={()=> onProjectClick(project)}  className="pr-5 focus:bg-slate-500">{project.title}</button>
            </div>);
          } )}
        
      
        </div>
        
        
      </div>
    </div>
  );
}

export default Projects;
