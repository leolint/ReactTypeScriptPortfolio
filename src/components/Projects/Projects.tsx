import React from "react";
import styles from "./projects.module.css";
import TicTac from "./TicTac/TicTacGame";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import ReactFullpage from "@fullpage/react-fullpage";
import Exchanger from "./Exchanger/Exchanger";
import { useTranslation } from "react-i18next";
import Iframe from 'react-iframe'
import { useContext } from "react";
import { MyTheme } from "../ThemeProvider/ThemeProvider";

const Projects = () => {

  const { t, i18n } = useTranslation()

  const themeContext = useContext(MyTheme);

  if (!themeContext) {
    throw new Error('ThemedComponent must be used within a ThemeProvider');
  }

  const { theme, setTheme } = themeContext;

  return (
    <ReactFullpage
      navigation={true}
      sectionsColor={!theme ? ["#ff5f45", "#435b71", "#ff5f45"] : ["#ffb6c1" , "#add8e6" , "#ffb6c1"]}
      credits={{ enabled: false }}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage">
            <div className="section">
              <Container>
                <div className={styles.wrapper}>
                  <Exchanger />
                </div>
              </Container>
            </div>
            <div className="section">
                  <div className={styles.primeWrapper}>
                    <h3 className={styles.title}>
                      {t("primeTitle")}
                    </h3>
                    <Iframe url="https://prime-club.com.ua/"
                      width="1400"
                      height="800"
                      className={styles.prime} />
                </div>
            </div>
            <div className="section">
              <div className={styles.section_footer}>
                <Container>
                  <div className={styles.footer_wrapper}>
                    <h4>{t("ticTacTitle")}</h4>
                    <TicTac />
                  </div>
                </Container>
                <Footer />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Projects;
