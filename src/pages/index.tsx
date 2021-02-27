import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienteBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountDownProvider } from "../providers/CountDownContext";

import style from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <ExperienteBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  );
}
