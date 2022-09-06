import "./form.styles.scss";

// packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

// components
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/input.component";
import CustomTextarea from "../custom-textarea/textarea.component";

export default function RegistrationForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post("/student", { studentData: data });
      if (res.data.error) {
        console.log(res.data.error);
        return;
      }
      navigate(`/${res.data.studentId}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      className="registration-form"
      noValidate
      onSubmit={handleSubmit(submitForm)}
    >
      <fieldset>
        <legend>Student Registration Form</legend>
        <div className="inputs-container">
          <div className="name input">
            <CustomInput
              label="full name"
              register={{
                ...register("name", { required: "fill your name", pattern:{
                  value: /^[A-Za-z ]+$/,
                  message: 'invalid name'
                } }),
              }}
              name="name"
              required
            />
            <p className="error">{errors?.name?.message}</p>
          </div>
          <div className="age input">
            <CustomInput
              label="age"
              type="number"
              register={{
                ...register("age", {
                  required: "fill your age",
                  pattern: {
                    value: /^[1-9]{1}[0-9]{0,1}$/,
                    message: "invalid age",
                  },
                }),
              }}
              name="age"
              required
            />
            <p className="error">{errors?.age?.message}</p>
          </div>
          <div className="email input">
            <CustomInput
              label="email"
              type="email"
              register={{
                ...register("email", {
                  required: "fill your email address",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "invalid email",
                  },
                }),
              }}
              name="email"
              required
            />
            <p className="error">{errors?.email?.message}</p>
          </div>
          <div className="phone input">
            <CustomInput
              label="phone"
              type="number"
              register={{
                ...register("phone", {
                  required: "fill your phone number",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "invalid phone number",
                  },
                }),
              }}
              name="phone"
              required
            />
            <p className="error">{errors?.phone?.message}</p>
          </div>
          <div className="address input">
            <CustomTextarea
              label="address"
              register={{
                ...register("address", {
                  required: "fill your address",
                }),
              }}
              name="address"
            />
            <p className="error">{errors?.address?.message}</p>
          </div>
        </div>
        <div className="submit-btn-container">
          <div className="submit-btn">
            <CustomButton isLoading={isLoading}>Submit</CustomButton>
          </div>
        </div>
      </fieldset>
    </form>
  );
}
