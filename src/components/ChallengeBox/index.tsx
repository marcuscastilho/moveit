import style from "./style.module.css";

export function ChallengeBox() {
  const hasChanllenge = true;

  return (
    <div className={style.challengeBoxContainer}>
      {hasChanllenge ? (
        <div className={style.challengeActive}>
          <header> Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="" />

            <strong>Novo Desafio</strong>
            <p>Levante e faça uma caminha de 03 minutos.</p>
          </main>
          <footer>
            <button type="button" className={style.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={style.challengeSucceededButton}>
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
