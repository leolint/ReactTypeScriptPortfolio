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
  


  return (
    <footer className={theme ? styles.footer : styles.footer_lightTheme}>
      <Container>
        <div className={styles.wrapper}>
          <a className={theme ? styles.gmail : styles.gmail_lightTheme} target="_blank" href="mailto:liolintelion@gmail.com?subject=React%20Dev&body=Текст%20повідомлення">liolintelion@gmail.com</a>
          <div className={styles.buttons_wrapper}>
            {path === '/form' ? null : <Link to="/form"><button className={theme ? styles.button : styles.button_lightTheme}>{t("feedback")}</button></Link>}
            <a target="_blank" href="https://github.com/leolint"><button className={theme ? styles.button : styles.button_lightTheme}>GitHub</button></a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
