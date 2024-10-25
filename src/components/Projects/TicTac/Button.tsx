import React, { useEffect , useState } from "react";
import styles from "./tictac.module.css";
import { useContext } from "react";
import { MyTheme } from "../../ThemeProvider/ThemeProvider";

interface ButtonProps {
  wrapperCounter: number;
  isWinner : boolean
}

const Button: React.FC<ButtonProps> = ({ wrapperCounter , isWinner  }) => {
  const [buttonInner, setButtonInner] = useState<string>("");
  const [active , setActive] = useState<boolean>(false)

  ///BUTTON CLASSES
  const activeButtonClass = !active ? styles.ticTac_button : `${styles.ticTac_button} ${ styles.ticTac_button_active}`
  const activeButtonLightThemeClass = !active ? styles.ticTac_button_light : `${styles.ticTac_button_light} ${ styles.ticTac_button_active}`

  const themeContext = useContext(MyTheme);

  if (!themeContext) {
      throw new Error('ThemedComponent must be used within a ThemeProvider');
  }

  const { theme, setTheme } = themeContext;
 
  useEffect(() => {
    setActive(false)
  } , [isWinner])

  const handleClick = (): void => {  
    if (wrapperCounter % 2 == 0) {
      setButtonInner("X");
    } else {
      setButtonInner("O"); 
    }    
    setActive(!active)  
  };
    
  
  return <button className={theme ? activeButtonClass : activeButtonLightThemeClass} onClick={handleClick}>{buttonInner}</button>;
};

export default Button;
