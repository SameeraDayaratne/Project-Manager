import Projects from "./components/Projects";
import AddNewProject from "./components/AddNewProject";
function App() {
  return (
    <>
      
      <div className="grid grid-cols-4 gap-3 mt-9 ">
        <Projects></Projects>
        <AddNewProject></AddNewProject>
      </div>
    </>
  );
}

export default App;
