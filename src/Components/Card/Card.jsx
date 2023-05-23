import React from "react";
import styles from "../../styles/modules/Card.module.scss";

export const Card = ({ children, ...props }) => {
  return (
    <>
      <div {...props} className={styles["card"]}>
        {children}
      </div>
    </>
  );
};
