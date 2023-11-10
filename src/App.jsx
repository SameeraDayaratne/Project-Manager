import Projects from "./components/Projects";
import AddNewProject from "./components/AddNewProject";
import { useState } from "react";

let initial_projects = [
  {
    id: 1,
    title:'This is the title',
    description: 'this is the description',
    date: '2015-11-13',
    tasks:[{
      id:1,
      task:'this is task one'
    }]
  },
  {
    id: 2,
    title:'hahahaa',
    description: 'this is the description',
    date: '2015-11-13',
    tasks:[{
      id:1,
      task:'this is task one'
    }]
  }

];
function App() {

  const [isShowForm , setIsShowForm] = useState(false);
  const [projects,setProjects] = useState(initial_projects);

  function addProject(project){
    setProjects(prev => 
      {
        let updatedProjects = [
          ...prev,
          {
            id: project.id,
            title:project.title,
            description: project.description,
            date: project.date,
            tasks:[]
          }
        ]

        return updatedProjects;
      }
      );

      setIsShowForm(false);

  
  }
  function handleAddClick(){
    setIsShowForm(true);
  }
  function handleCancelClick(){
    setIsShowForm(false);
  }
  return (
    <>
      
      <div className="grid grid-cols-4 gap-3 mt-9 ">
        <Projects projects={projects} onAddClick={handleAddClick} ></Projects>
        <AddNewProject isShowForm={isShowForm} onAddClick={handleAddClick} onCancelClick={handleCancelClick} onAddProject={addProject}></AddNewProject>
      </div>
    </>
  );
}

export default App;
