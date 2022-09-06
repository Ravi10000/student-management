import "./registration.styles.scss";

// components
import RegistrationForm from "../../component/registration-form/form.component";

function RegistrationPage() {
  return (
    <div className="registration-page">
      <div className="hero-image-container">
        <img src="./students2.jpg" alt="students" />
      </div>
      <div className="registration-form-container">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default RegistrationPage;
