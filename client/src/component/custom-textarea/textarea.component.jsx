import "./textarea.styles.scss";

export default function CustomTextarea({ label, register, otherProps }) {
  return (
    <div className="custom-textarea">
      <textarea id={label} {...register} {...otherProps} required></textarea>
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
