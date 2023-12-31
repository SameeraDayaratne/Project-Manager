import Projects from "./components/Projects";
import AddNewProject from "./components/AddNewProject";
import { useState , useRef } from "react";

let initial_projects = [
  {
    id: 1,
    title:'This is the title',
    description: 'this is the description',
    date: new Date(2015,10,20),
    tasks:[{
      id:1,
      taskName:'this is task one'
    },
    {
      id:2,
      taskName:'do this'
    }
  
  ]
  },
  {
    id: 2,
    title:'hahahaa',
    description: 'this is the description',
    date: new Date(2015,12,21),
    tasks:[{
      id:1,
      taskName:'this is task two'
    }]
  }

];
function App() {

  const [showContent , setShowContent] = useState('home');
  const [projects,setProjects] = useState(initial_projects);

  let projectObj = useRef();
  

  function addProject(project,action){

    if(action == 'add')
    {
      setProjects(prev => 
        {
          let updatedProjects = [
            ...prev,
            {
              id: project.id,
              title:project.title,
              description: project.description,
              date: project.date,
              tasks:project.tasks
            }
          ]
  
          return updatedProjects;
        }
        );
    }
    else if (action == 'modify')
    {
      setProjects(prevProjArr => {
      //  let updatedArr = [prevProjArr.map(proj => {
      //     if(proj.id == project.id)
      //     {
      //       return {
      //         ...proj,
      //         tasks:[...project.tasks]
      //       };

            
      //     }
          
      //     return proj;

      //   })];

      for(let proj of prevProjArr)
      {
        if(proj.id == project.id)
          {
            proj.tasks = [...project.tasks];
          }
      }
      let updatedArr = [...prevProjArr];
        console.log(updatedArr);
        return updatedArr;
      });
    }

    

    //   setShowContent('home');

  
  }

  function deleteTask(projectId,taskId){
   

    setProjects(prevProjArr => {

      prevProjArr.forEach(proj => {
        if(proj.id == projectId)
        {
          const index = proj.tasks.findIndex(task => {
            return (task.id === taskId);
          });

          proj.tasks.splice(index,1);
        }
      });

      let updatedArr = [...prevProjArr]
      return(updatedArr);
    });
  }

  function deleteProject(projectId){
    setProjects(prevProjArr => {

      const index = prevProjArr.findIndex(proj => {
        return (proj.id == projectId);
      });

      prevProjArr.splice(index,1);

      let updatedArr = [...prevProjArr];

      return updatedArr;
    });

    setShowContent('home');
  }

  function handleAddClick(){
    setShowContent('form');
  }
  function handleCancelClick(){
    setShowContent('home');
  }

  function handleProjectClick(project){
    //console.log(project);
    projectObj.current = project;
    setShowContent(`${project.id}`);
  }
  return (
    <>
      
      <div className="grid grid-cols-4 gap-3 mt-9 ">
        <Projects projects={projects} onAddClick={handleAddClick}  onProjectClick={handleProjectClick}></Projects>
        <AddNewProject onDeleteProject={deleteProject} project={projectObj.current} showContent={showContent}  onAddClick={handleAddClick} onCancelClick={handleCancelClick} onAddProject={addProject} onDeleteTask={deleteTask}></AddNewProject>
      </div>
    </>
  );
}

export default App;
