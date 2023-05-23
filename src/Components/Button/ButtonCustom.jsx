import React from "react";
import styles from "../../styles/modules/ButtonCustom.module.scss";

export const ButtonCustom = ({ children }) => {
  return (
    <>
      <button className={styles["button-custom"]}>{children}</button>
    </>
  );
};
