import { useContext } from 'react';
import { ChallengesContext } from '../../providers/ChallengesContext';
import style from './style.module.css'


export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/MarcusCastilho.png" alt="Profile" />
      <div>
        <strong>Marcus Castilho</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}
