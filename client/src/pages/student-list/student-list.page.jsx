import "./student-list.styles.scss";

// packages
import { useState, useEffect } from "react";
import axios from "axios";

// components
import Card from "../../component/card/card.component";

function StudentListPage() {
  const [studentsList, setStudentsList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const res = await axios.get("/student");
      setIsLoading(false)
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
        {studentsList > 0 ? (
          studentsList.map((student) => (
            <Card student={student} key={student._id} />
          ))
        ) : isLoading ? (
          <div className="loader-container">
          <div className="loader"></div>
        </div>
        ) : (<p className="not-found">no students found!</p>)}
      </div>
    </div>
  );
}

export default StudentListPage;
