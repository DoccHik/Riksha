import React from "react";
import styles from "../../styles/modules/StockCard.module.scss";

const StockCard = ({ children, background }) => {
  return (
    <>
      <div className={styles["stock-card"]} style={{ background }}>
        {children}
      </div>
    </>
  );
};

export default StockCard;
