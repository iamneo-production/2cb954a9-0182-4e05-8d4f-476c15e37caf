import React from "react";

const StudentAdd = () => {

  return (
    <>
    <div>
        <body className="bg-gray-100 flex bg-local">
      <div className=" mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
        <form>
          
          <h1 className="mt-6">Add Student Section</h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="company"
                >
                  Name*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  type="text"
                  placeholder="Title"
                />
              </div>

              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="company"
                >
                 Name*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  type="text"
                  placeholder="Title"
                />
              </div>

              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="company"
                >
                  Name*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="company"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="title"
                >
                  Name*
                  
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="title"
                  type="text"
                  placeholder="Title"
                />
              </div>
            </div>
            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> Full Locaton</label>

        

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Description
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="application-link"
                  type="text"
                  placeholder="discription"
                />
              </div>
            </div>
     
            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <button className="md:w-full bg-fuchsia-800 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                  Add Course Name
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </body>
    </div>
    </>
  );
};

export default StudentAdd;
