import React from "react";
import { motion } from "framer-motion";

const Spinner = ({ size = 10, color = "#E53E3E" }) => {
  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <svg
        className="animate-spin"
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="90 30"
          strokeDashoffset="10"
        />
      </svg>
    </motion.div>
  );
};

export default Spinner;
