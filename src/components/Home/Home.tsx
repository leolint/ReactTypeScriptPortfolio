import Container from "../Container/Container";
import styles from "./home.module.css";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../Footer/Footer";
import sprite from "../../assets/img/sprite.svg";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { MyTheme } from "../ThemeProvider/ThemeProvider";

const Home = () => {

  const themeContext = useContext(MyTheme);

  const spriteImagesIDs = ["#html-icon", "#css-icon", "#git-icon", "#js-icon", "#react-icon", "#gulp-icon", "#wp-icon"]

  if (!themeContext) {
    throw new Error('ThemedComponent must be used within a ThemeProvider');
  }

  console.log(sprite);

  const { theme, setTheme } = themeContext;

  const { t, i18n } = useTranslation()
  return (
    <ReactFullpage
      navigation={true}
      sectionsColor={theme ? ["#ff5f45", "#435b71", "#ff5f45"] : ["#ffb6c1", "#add8e6", "#ffb6c1"]}
      credits={{ enabled: false }}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage">
            <div className="section" id={styles.homeMain}>
              <Container>
                <div id={styles.titleWrapper} className={styles.wrapper}>
                  <h1 className={styles.title}>
                    {t("mainTitle")}
                  </h1>
                </div>
              </Container>
            </div>
            <div className="section">
              <Container>
                <div className={styles.wrapper}>
                  <h2 className={styles.text}>
                    {t("description")}
                  </h2>
                  <div className={styles.line}>

                    <div className={styles.technologies}>
                      {spriteImagesIDs.map((imgID: string, index: number) => (
                        <svg key={index}>
                          <use href={sprite + imgID} />
                        </svg>
                      ))}
                    </div>
                    <div className={styles.technologies}>
                    {spriteImagesIDs.map((imgID: string, index: number) => (
                        <svg key={index}>
                          <use href={sprite + imgID} />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </Container>
            </div>
            <div className="section">
              <div className={styles.section_footer}>
                <Container>
                  <p className={styles.description}>
                    {t("descriptionTwo")}
                  </p>
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

export default Home;
