import { motion } from "framer-motion";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  secondary,
  handleClick,
  backgroundColor,
  isLoading,
}) => {
  return (
    <motion.button
      className={`custom-button ${secondary && "secondary"}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      style={{ backgroundColor, borderColor: backgroundColor }}
    >
      {children}
      {isLoading && <div className="loader"></div>}
    </motion.button>
  );
};

export default CustomButton;
