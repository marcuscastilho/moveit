import { useContext } from "react";
import { ChallengesContext } from "../../providers/ChallengesContext";
import style from "./style.module.css";

export function ExperienteBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
  const percentToNextLevel = (currentExperience / experienceToNextLevel) * 100

  return (
    <header className={style.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
      </div>
      <span className={style.currentExperience}>{experienceToNextLevel} xp</span>
    </header>
  );
}
