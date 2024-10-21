import React from "react";
import styles from "./footer.module.css";
import Container from "../Container/Container";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { MyTheme } from "../ThemeProvider/ThemeProvider";
const Footer = () => {

  const themeContext = useContext(MyTheme);

  if (!themeContext) {
    throw new Error('ThemedComponent must be used within a ThemeProvider');
  }

  const { theme, setTheme } = themeContext;

  const { t, i18n } = useTranslation()
  const location = useLocation()
  const path = location.pathname
  
  let btnClass = styles.button;
  let linkClass = styles.gmail;
  let containerClassname = styles.footer;
  if (theme) {
    btnClass = `${styles.button} ${styles.button_light}`;
    linkClass = `${styles.gmail} ${styles.light_text}`;
    containerClassname = `${styles.footer} ${styles.light}`;
  }

  return (
    <footer className={containerClassname}>
      <Container>
        <div className={styles.wrapper}>
          <a className={linkClass} target="_blank" href="mailto:liolintelion@gmail.com?subject=React%20Dev&body=Текст%20повідомлення">liolintelion@gmail.com</a>
          <div className={styles.buttons_wrapper}>
            {path === '/form' ? null : <Link to="/form"><button className={btnClass}>{t("feedback")}</button></Link>}
            <a target="_blank" href="https://github.com/leolint"><button className={btnClass}>GitHub</button></a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
