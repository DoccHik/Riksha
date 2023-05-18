import React from "react";
import styles from "../../styles/modules/Card.module.scss";

const Card = ({ children, ...props }) => {
  return (
    <>
      <div {...props} className={styles["card"]}>
        {children}
      </div>
    </>
  );
};

export default Card;
