import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.carousel}>
        <div className={styles.carouse_iItem}>LIQUIDITY <span>19,514,68 USD</span> <i className="fa-solid fa-bahai"></i></div>
        <div className={styles.carouse_iItem}>ANUAL PROFITS <span>19,514,68 USD</span> <i className="fa-solid fa-bahai"></i></div>
        <div className={styles.carouse_iItem}>MARKETING <span>19,514,68 USD</span> <i className="fa-solid fa-bahai"></i></div>
        <div className={styles.carouse_iItem}>VUE LOCKED <span>19,514,68 USD</span> <i className="fa-solid fa-bahai"></i></div>
        <div className={styles.carouse_iItem}>LIQUIDITY <span>19,514,68 USD</span> <i className="fa-solid fa-bahai"></i></div>
        <div className={styles.carouse_iItem}>ANUAL PROFITS <span>19,514,68 USD</span> <i className="fa-solid fa-bahai"></i></div>
        <div className={styles.carouse_iItem}>MARKETING <span>19,514,68 USD</span> <i className="fa-solid fa-bahai"></i></div>
        <div className={styles.carouse_iItem}>VUE LOCKED <span>19,514,68 USD</span> <i className="fa-solid fa-bahai"></i></div>
      </div>
    </div>
  );
};

export default Footer;