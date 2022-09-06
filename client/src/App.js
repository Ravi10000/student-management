import "./App.css";

// packages
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import RegistrationPage from "./pages/registration/registration.page";
import StudentListPage from "./pages/student-list/student-list.page";
import StudentPage from "./pages/student/student.page";
import NotFound from "./pages/not-found/not-found.page";

// components
import Navbar from "./component/navbar/navbar.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/:id" element={<StudentPage />} />
        <Route path="/" element={<StudentListPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
