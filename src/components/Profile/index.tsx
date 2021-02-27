import style from './style.module.css'


export function Profile() {
  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/MarcusCastilho.png" alt="Profile" />
      <div>
        <strong>Marcus Castilho</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}
