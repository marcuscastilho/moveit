import { useContext } from "react";
import { ChallengesContext } from "../../providers/ChallengesContext";
import style from "./style.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você subiu de level!</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="icons/close.svg" alt="Fechar"/>
        </button>
      </div>
    </div>
  );
}
