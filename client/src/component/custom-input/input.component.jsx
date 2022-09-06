import "./input.styles.scss";

export default function CustomInput({ label, register, ...otherProps }) {
  return (
    <div className="custom-input">
      <input id={label} type="text" {...register} {...otherProps} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
