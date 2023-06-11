import React from "react";
import styles from "../../styles/modules/Card.module.scss";
import { motion } from "framer-motion";
export const Card = ({ children, ...props }) => {
  return (
    <>
      <motion.div
        {...props}
        className={styles["card"]}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};
