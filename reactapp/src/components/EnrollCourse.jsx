import React from "react";
import "../css/style.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Course from "./Course";


const EnrollCourse = () => {

  const navigate = useNavigate();
  const navigateToCourse = () => {
 
    navigate("/course");
  };
  return (
    <>
      <body>
        <div class="main_container" style={{    'align-items': 'center'}}>
          <div class="main_div" className="shadow-lg rounded overflow-hidden" style={{'padding': '28px 40px',
    'background-color': 'wheat',
    'border-radius': '5px'}}>
            <div class="div">
              <p>Course name: Daug Abacus</p>
              <p>Course Duration: 3months</p>
              <p>Course Available Timing: 6am to 6pm</p>
            </div>
            <div class="div1">
              <p>Number of Students: 222</p>
              <p>Course Description: yyyyy</p>
              <button  onClick={navigateToCourse} className="md:w-full bg-fuchsia-800 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">Enroll Now</button>
            </div>
          </div>
          <Routes>
            <Route path="/course" element={<Course />} />
            onClick={navigateToCourse}
          </Routes>

        </div>
      </body>
    </>
  );
};

export default EnrollCourse;
