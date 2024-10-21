import React, { useRef, useState, useEffect } from "react";
import styles from "./tictac.module.css";
import Button from "../TicTac/Button";

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTac() {
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [wrapperCounter, setWrapperCounter] = useState<number>(0);
  const [componentKey, setComponentKey] = useState<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function isSubset(array: number[], line: number[]): boolean {
    return line.every(index => array.includes(index));
  }

  function handleWrapperClicks() {
    if (!isWinner) { 
      setWrapperCounter(wrapperCounter + 1);
    }
  }

  function makeRandomMove() {
    if (wrapperRef.current) {
      const buttons = wrapperRef.current.querySelectorAll("button");
      const availableButtons = Array.from(buttons).filter(button => button.innerHTML === "");

      if (availableButtons.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableButtons.length);
        availableButtons[randomIndex].click();
      }
    }
  }

  function resetGame() {
    if (wrapperRef.current) {
      const buttons = wrapperRef.current.querySelectorAll("button");
      buttons.forEach(button => {
        button.innerHTML = '';
      });
    }
    setWrapperCounter(0);
    setIsWinner(false);
    setComponentKey(prevKey => prevKey + 1); 
  }

  useEffect(() => {
    if (wrapperRef.current) {
      const buttons = wrapperRef.current.querySelectorAll("button");
      let newXArray: number[] = [];
      let newOArray: number[] = [];

      buttons.forEach((button, index) => {
        switch (button.innerHTML) {
          case "X":
            newXArray.push(index);
            break;
          case "O":
            newOArray.push(index);
            break;
        }
      });

      lines.forEach(line => {
        if (isSubset(newXArray, line)) {
          setTimeout(() => {
            alert("X Won");
            setIsWinner(true);
            resetGame();
          }, 500);
        }
        if (isSubset(newOArray, line)) {
          setTimeout(() => {
            alert("O Won");
            setIsWinner(true);
            resetGame();
          }, 500);
        }
      });

      if (!isWinner && buttons.length > 0 && wrapperCounter % 2 !== 0) {
        setTimeout(() => {
          makeRandomMove();
        }, 500);
      }
    }
  }, [wrapperCounter]);

  return (
    <div
      ref={wrapperRef}
      onClick={handleWrapperClicks}
      className={styles.wrapper}
      key={componentKey} 
    >
      <div className={styles.buttons_row}>
        <Button isWinner={isWinner} wrapperCounter={wrapperCounter} />
        <Button isWinner={isWinner} wrapperCounter={wrapperCounter} />
        <Button isWinner={isWinner} wrapperCounter={wrapperCounter} />
      </div>

      <div className={styles.buttons_row}>
        <Button isWinner={isWinner} wrapperCounter={wrapperCounter} />
        <Button isWinner={isWinner} wrapperCounter={wrapperCounter} />
        <Button isWinner={isWinner} wrapperCounter={wrapperCounter} />
      </div>

      <div className={styles.buttons_row}>
        <Button isWinner={isWinner} wrapperCounter={wrapperCounter} />
        <Button isWinner={isWinner} wrapperCounter={wrapperCounter} />
        <Button isWinner={isWinner} wrapperCounter={wrapperCounter} />
      </div>
    </div>
  );
}

export default TicTac;
