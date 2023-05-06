import React from "react";
import styles from "../../styles/modules/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles["footer"]}>
        <div className="container">
          <div className={styles["footer-row"]}>
            LOGO
            <div>
              Menu and <div>social icons</div>
            </div>
            <div>grid menu</div>
            <div>Contacts</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
