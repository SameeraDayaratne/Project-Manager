import React from "react";

function ProjectForm({onCancelClick}) {
  return (
    <div className="col-span-3">
      <div className="container flex flex-col items-center  justify-center h-screen">
        <div className="w-1/2 p-10 bg-gray-50 shadow-md">
          <form action="">
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
                 
                  className="px-5 py-3 text-white rounded-lg text-center bg-black hover:bg-gray-700"
                >
                  Save
                </button>
              </div>
            </div>
            <div>
              <label className="text-left">Title</label>
              <input
                className="w-full py-1 border rounded-md border-black"
                type="text"
              />
            </div>

            <div>
              <label className="text-left">Description</label>
              <textarea
                className="w-full py-1 border rounded-md border-black"
                type="text"
              ></textarea>
            </div>

            <div>
              <label className="text-left">Due date</label>
              <input
                className="w-full py-1 border rounded-md border-black"
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectForm;
