import style from "./style.module.css";

export function ExperienteBar() {
  return (
    <header className={style.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: "75%" }} />
        <span style={{ left: "75%" }}>450 xp</span>
      </div>
      <span className={style.currentExperience}>600 xp</span>
    </header>
  );
}
