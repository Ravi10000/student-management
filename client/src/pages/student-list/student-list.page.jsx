import "./student-list.styles.scss";

// packages
import { useState, useEffect } from "react";
import axios from "axios";

// components
import Card from "../../component/card/card.component";

function StudentListPage() {
  const [studentsList, setStudentsList] = useState(null);
  useEffect(() => {
    (async function () {
      const res = await axios.get("/student");
      setStudentsList(res.data.studentsList);
    })();
  }, []);
  return (
    <div className="students-list">
      <div className="hero-image">
        <img src="./students1.jpg" alt="students" />
      </div>
      <h1>Students</h1>
      <div className="students-container">
        {studentsList ? (
          studentsList.map((student) => (
            <Card student={student} key={student._id} />
          ))
        ) : (
          <div className="loader-container">
          <div className="loader"></div>
        </div>
        )}
      </div>
    </div>
  );
}

export default StudentListPage;
