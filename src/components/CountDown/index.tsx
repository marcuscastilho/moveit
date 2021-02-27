import Head from "next/head";
import { useContext } from "react";
import { CountDownContext } from "../../providers/CountDownContext";

import style from "./style.module.css";

export function CountDown() {
  const{minutes, seconds, isActive, hasFinished, resetCountDown, startCountDown} = useContext(CountDownContext)

  const [minuteLeft, minuteRigth] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRigth] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={style.countdownContainer}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigth}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRigth}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled type="button" className={style.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${style.countdownButton} ${style.countdownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={style.countdownButton}
              onClick={startCountDown}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
