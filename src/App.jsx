import Projects from "./components/Projects";
import AddNewProject from "./components/AddNewProject";
import { useState } from "react";
function App() {

  const [isShowForm , setIsShowForm] = useState(false);

  function handleAddClick(){
    setIsShowForm(true);
  }
  function handleCancelClick(){
    setIsShowForm(false);
  }
  return (
    <>
      
      <div className="grid grid-cols-4 gap-3 mt-9 ">
        <Projects onAddClick={handleAddClick} ></Projects>
        <AddNewProject isShowForm={isShowForm} onAddClick={handleAddClick} onCancelClick={handleCancelClick}></AddNewProject>
      </div>
    </>
  );
}

export default App;
