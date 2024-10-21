import React from "react";
import styles from "./contacts.module.css";
import { MyTheme } from "../../ThemeProvider/ThemeProvider";
import { useContext } from "react";

interface ContactsProps {
    showContacts: boolean;
}

const Contacts: React.FC<ContactsProps> = ({ showContacts }) => {

    const themeContext = useContext(MyTheme);

    if (!themeContext) {
        throw new Error('ThemedComponent must be used within a ThemeProvider');
    }
    const { theme, setTheme } = themeContext;
    return (
        <div className={`${styles.wrapper}  ${!showContacts ? (theme ? `${styles.open} ${styles.light}` : styles.open) : ''}`}>
            <ul className={styles.list}>
                <li className={styles.list_link}><a className={!theme ? styles.light_text : styles.text} target="_blank" href="https://www.linkedin.com/in/leonid-chernyshov/">LinkedIn</a></li>
                <li className={styles.list_link}><a className={!theme ? styles.light_text : styles.text} target="_blank" href="https://www.work.ua/resumes/10152464">WorkUa</a></li>
            </ul>
        </div>
    );
}

export default Contacts;
