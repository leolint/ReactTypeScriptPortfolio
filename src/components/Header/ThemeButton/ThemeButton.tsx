import React from "react";
import styles from "./themeButton.module.css"
import { useContext } from "react";
import { MyTheme } from "../../ThemeProvider/ThemeProvider";
import sprite from "../../../assets/img/sprite.svg";

const ThemeButton = () => {
    const themeContext = useContext(MyTheme);

    if (!themeContext) {
        throw new Error('ThemedComponent must be used within a ThemeProvider');
    }

    const { theme, setTheme } = themeContext;

    function handleTheme() {
        setTheme(!theme)
        console.log(theme);
    }
    return (
        <button className={theme ? styles.themeButton : styles.themeButton_light} onClick={handleTheme}>
            <svg>
                <use href={`${sprite}#themeButton`}/>
            </svg>
        </button>
    )
}

export default ThemeButton