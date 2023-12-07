import React from "react";
import styles from "./Header.module.css";
import linkedinLogo from "../../assets/logo-linkedin.svg";
import githubLogo from "../../assets/logo-github.svg";
import telegramLogo from "../../assets/logo-telegram.svg";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        <h1 className={styles.title}>To-Do List</h1>
        <ul className={styles.socialMedia}>
          <li>
            <a className={styles.link} href="https://linkedin.com" target="blank">
              <img src={linkedinLogo} alt="" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://github.com" target="blank">
              <img src={githubLogo} alt="" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://t.me" target="blank">
              <img src={telegramLogo} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
