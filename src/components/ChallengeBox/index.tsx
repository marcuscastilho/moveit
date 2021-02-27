import { useContext } from "react";
import { ChallengesContext } from "../../providers/ChallengesContext";
import { CountDownContext } from "../../providers/CountDownContext";

import style from "./style.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountDown } = useContext(CountDownContext)

  function handleChallengeSucceeded(){
    completeChallenge()
    resetCountDown()
  }

  function handleChallengeFailed(){
    resetChallenge()
    resetCountDown()
  }

  return (
    <div className={style.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={style.challengeActive}>
          <header> Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />

            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={style.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={style.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={style.challengeNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios.
          </p>
        </div>
      )}
    </div>
  );
}
