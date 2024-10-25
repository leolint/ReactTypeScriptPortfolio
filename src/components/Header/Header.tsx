import React, { useState } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Contacts from "./Contacats/Contacts";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { MyTheme } from "../ThemeProvider/ThemeProvider";
import sprite from "../../assets/img/sprite.svg"
import ThemeButton from "./ThemeButton/ThemeButton";

const Header: React.FC = () => {

  const themeContext = useContext(MyTheme);

  if (!themeContext) {
    throw new Error('ThemedComponent must be used within a ThemeProvider');
  }

  const { theme, setTheme } = themeContext;



  function changeLanguage(language: string) {
    i18n.changeLanguage(language)
  }
  const { t, i18n } = useTranslation()
  const [isMenuActive, setIsMenuActive] = useState<boolean>(true);
  const [showContacts, setShowContacts] = useState<boolean>(false);

  function handleContactsClick() {
    setShowContacts(!showContacts);
  }

  function handleButtonClick() {
    setIsMenuActive(!isMenuActive);
    setShowContacts(false);
  }
  return (
    <header
      className={theme ? styles.header : styles.header_light}
    >
      <Container>
        <div className={styles.wrapper}>
          <div className={theme ? styles.logo : `${styles.logo} ${styles.logo_light}`}>
            <Link to={'/'}>
              <svg>
                <use href={sprite + "#logo"} />
              </svg>
            </Link>
          </div>
          <nav className={isMenuActive ? styles.nav : `${styles.nav} ${styles.open}` }>
            <ul className={styles.list}>
              <li
                onClick={() => handleContactsClick()}
                className={theme && !isMenuActive ? styles.list_item : `${styles.list_item} ${styles.light}`}
              >
                {t("contacts")}
              </li>
              <li
                onClick={() => handleButtonClick()}
                className={theme ? styles.list_item : `${styles.list_item} ${styles.light}`}
              >
                <Link to="/projects"> {t("projects")}</Link>
              </li>
              <li
                onClick={() => handleButtonClick()}
                className={theme ? styles.list_item : `${styles.list_item} ${styles.light}`}
              >
                <Link to="/">{t("home")}</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.buttons_wrapper}>
            <button
              onClick={() => handleButtonClick()}
              className={theme ? styles.menuButton : `${styles.menuButton} ${styles.menuButton_light}`
              }
            >
              <span className={!isMenuActive ? `${styles.redBg} ${styles.spanOneRotate}` : ""}></span>
              <span className={!isMenuActive ? `${styles.redBg} ${styles.spanTwoRotate}` : ""}></span>
              <span className={!isMenuActive ? styles.redBg : ""}></span>
            </button>
            <div>
              <button className={theme ? styles.lng_button : `${styles.lng_button} ${styles.light}`} onClick={() => changeLanguage("ua")}>UA</button>
              <button className={theme ? styles.lng_button : `${styles.lng_button} ${styles.light}`} onClick={() => changeLanguage("en")}>En</button>
            </div>
            <ThemeButton />
          </div>
        </div>
      </Container>
      <Contacts showContacts={showContacts} />
    </header>
  );
};

export default Header;
