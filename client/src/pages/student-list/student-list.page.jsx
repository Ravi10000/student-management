import "./student-list.styles.scss";

// packages
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// components
import Card from "../../component/card/card.component";

function StudentListPage() {
  const [studentsList, setStudentsList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const res = await axios.get("/students");
      setIsLoading(false);
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
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : studentsList.length > 0 ? (
          studentsList.map((student) => (
            <Card student={student} key={student._id} />
          ))
        ) : (
          <div className="not-found">
            <p className="msg">no students found!</p>
            <Link to="/register">Go to registration page</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentListPage;
