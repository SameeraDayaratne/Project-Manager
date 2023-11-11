import React from "react";
import ProjectForm from "./ProjectForm";
import Project from "./Project";

function AddNewProject({onAddClick,onCancelClick,onAddProject, showContent , onCancelProject}) {

  function handleCancel(){
    onCancelClick();
  }

  function addProject(project){
    onAddProject(project);
  }

  let addNewProjectContent = (<div className="col-span-3">
  <div className="container flex flex-col items-center  justify-center h-screen">
    <img className="h-20" src="./src/assets/no-projects.png" alt="" />
    <h2 className="font-bold text-2xl">No Project Selected</h2>
    <p className="text-gray-500 my-4">
      Select a Project or get started with a new one
    </p>
    <div className="my-4">
      <button href="" onClick={onAddClick} className="p-3 pt-2 text-white rounded-lg bg-gray-500">
        Create New Project
      </button>
    </div>
  </div>
</div>);


    
  return (
    <>
    {/* {(showContent=='home')?addNewProjectContent:(showContent=='form')?<ProjectForm onAddProject={addProject} onCancelClick={handleCancel} ></ProjectForm>:(showContent=='project')?<button onClick={onCancelProject}>Hiii</button> :null} */}
    {(showContent=='home')?<Project></Project>:(showContent=='form')?<ProjectForm onAddProject={addProject} onCancelClick={handleCancel} ></ProjectForm>:(showContent=='project')?<button onClick={onCancelProject}>Hiii</button> :null}
    </>
    
  );
}

export default AddNewProject;
