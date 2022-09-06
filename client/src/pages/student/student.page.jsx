import "./student.styles.scss";

// packages
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export default function StudentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  useEffect(() => {
    (async function () {
      const res = await axios.get(`/student/${id}`);
      if (res.data.notFound) {
        navigate("/not-found");
        return;
      }
      setStudent({ ...res.data.student });
    })();
  }, [navigate, id]);
  function goBack() {
    navigate(-1);
  }
  return (
    <div className="student-page">
      <div className="image">
        <img src="./student.jpg" alt="student" />
      </div>
      {student ? (
        <div className="student-info">
          <h1>{student.name}</h1>
          <p>
            <span>age:</span> {student.age}
          </p>
          <p>
            <span>phone:</span> {student.phone}
          </p>
          <p>
            <span>email:</span> {student.email}
          </p>
          <p>
            <span>address:</span> {student.address}
          </p>
        </div>
      ) : (
        <div className="loader"></div>
      )}
      <motion.div
        className="back-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={goBack}
      >
        <img src="./arrow.png" alt="back" />
      </motion.div>
    </div>
  );
}
