import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./form.module.css";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { MyTheme } from "../ThemeProvider/ThemeProvider";

const Form = () => {

  const themeContext = useContext(MyTheme);

  if (!themeContext) {
    throw new Error('ThemedComponent must be used within a ThemeProvider');
  }

  const { theme, setTheme } = themeContext;

  const { t, i18n } = useTranslation()
  const [companyName, setCompanyName] = useState<string>("");
  const [opninon, setOpinion] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [emailIsCorrect, setEmailIsCorrect] = useState<boolean>(true);


  function handleInputs(event: FormEvent) {
    event.preventDefault();
    if (companyName.length > 4 && opninon.length > 10 && email.length > 10) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(emailRegex.test(email));
    
    return emailRegex.test(email);
  };

  function handleEmailValue(event: ChangeEvent<HTMLInputElement>) {

    if (validateEmail(event.target.value)) {
        setEmail(event.target.value)
        setEmailIsCorrect(true);
    } else {
        setEmail(event.target.value)
        setEmailIsCorrect(false);
    }
       
  }

  function handleCompanyNameValue(event: ChangeEvent<HTMLInputElement>) {
    setCompanyName(event.target.value);
  }

  function handleOpninonValue(event: ChangeEvent<HTMLTextAreaElement>) {
    setOpinion(event.target.value);
  }

  return (
    <form className={theme ? styles.form : `${styles.form} ${styles.form_light}`} action="">
      {!isEmpty ? <div className={styles.title}>{t("formTitleIncorrect")}</div> : `${t("formTitle")}`}
      {!emailIsCorrect ? <div className={styles.title}>{t("incorrectEmail")}</div> : ""}
      <input
        value={email}
        onChange={handleEmailValue}
        placeholder="Email"
        className={styles.input}
        type="text"
      />
      <input
        value={companyName}
        onChange={handleCompanyNameValue}
        placeholder={t("companyNamePlaceholder")}
        className={styles.input}
        type="text"
      />
      <textarea
        value={opninon}
        onChange={handleOpninonValue}
        placeholder={t("opinion")}
        className={styles.textArea}
      />
      <button onClick={handleInputs} className={styles.button} type="submit">
        {t("sendMessage")}
      </button>
    </form>
  );
};

export default Form;
