import React from "react";
import styles from "./themeButton.module.css"
import { useContext } from "react";
import { MyTheme } from "../../ThemeProvider/ThemeProvider";


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
        <button className={theme ? styles.themeButton : `${styles.themeButton} ${styles.themeButton_light}`} onClick={handleTheme}>

            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                width="30px" height="30px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
                <g>
                    <path fill="#F9EBB2" d="M41.15,44H36V25c0-1.104,0.896-2,2-2s2,0.896,2,2c0,0.553,0.447,1,1,1s1-0.447,1-1c0-2.209-1.791-4-4-4
		c-1.201,0-2.267,0.541-3,1.381C34.267,21.541,33.201,21,32,21s-2.267,0.541-3,1.381C28.267,21.541,27.201,21,26,21
		c-2.209,0-4,1.791-4,4c0,0.553,0.447,1,1,1s1-0.447,1-1c0-1.104,0.896-2,2-2s2,0.896,2,2v19h-5.15C15.271,40.525,10,32.883,10,24
		c0-12.15,9.85-22,22-22s22,9.85,22,22C54,32.883,48.729,40.527,41.15,44z"/>
                    <g>
                        <path fill="#394240" d="M32,0C18.745,0,8,10.746,8,24c0,9.684,5.743,18.006,14,21.801V60c0,2.211,1.789,4,4,4h12
			c2.211,0,4-1.789,4-4V45.801C50.257,42.006,56,33.684,56,24C56,10.746,45.255,0,32,0z M40,60c0,1.105-0.896,2-2,2H26
			c-1.104,0-2-0.895-2-2v-2h16V60z M40,56H24v-4h16V56z M40,50H24v-4h16V50z M30,44V25c0-1.104,0.896-2,2-2s2,0.896,2,2v19H30z
			 M41.15,44H36V25c0-1.104,0.896-2,2-2s2,0.896,2,2c0,0.553,0.447,1,1,1s1-0.447,1-1c0-2.209-1.791-4-4-4
			c-1.201,0-2.267,0.541-3,1.381C34.267,21.541,33.201,21,32,21s-2.267,0.541-3,1.381C28.267,21.541,27.201,21,26,21
			c-2.209,0-4,1.791-4,4c0,0.553,0.447,1,1,1s1-0.447,1-1c0-1.104,0.896-2,2-2s2,0.896,2,2v19h-5.15C15.271,40.525,10,32.883,10,24
			c0-12.15,9.85-22,22-22s22,9.85,22,22C54,32.883,48.729,40.527,41.15,44z"/>
                        <path fill="#394240" d="M32,6c-0.553,0-1,0.447-1,1s0.447,1,1,1c4.418,0,8.418,1.791,11.313,4.688c0,0,0.944,1.055,1.687,0.312
			s-0.271-1.729-0.271-1.729C41.471,8.016,36.971,6,32,6z"/>
                    </g>
                    <g>
                        <path fill="#B4CCB9" d="M24,60c0,1.105,0.896,2,2,2h12c1.104,0,2-0.895,2-2v-2H24V60z" />
                        <rect x="24" y="52" fill="#B4CCB9" width="16" height="4" />
                        <rect x="24" y="46" fill="#B4CCB9" width="16" height="4" />
                    </g>
                    <path fill="#F9EBB2" d="M34,44h-4V25c0-1.104,0.896-2,2-2s2,0.896,2,2V44z" />
                </g>
            </svg>
        </button>
    )
}

export default ThemeButton