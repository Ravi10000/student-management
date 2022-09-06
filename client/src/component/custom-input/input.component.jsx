import "./input.styles.scss";

export default function CustomInput({ label, type, register, ...otherProps }) {
  return (
    <div className="custom-input">
      <input id={label} type={`${type || "text"}`} {...register} {...otherProps} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
