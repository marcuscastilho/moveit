import { createContext, useState, ReactNode } from "react";
import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallangesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 2, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;
    let newLevel = level;
    let newExperienceToNextLevel = experienceToNextLevel;

    while (finalExperience >= newExperienceToNextLevel) {
      finalExperience = finalExperience - newExperienceToNextLevel;
      newLevel++;
      newExperienceToNextLevel = Math.pow((newLevel + 1) * 2, 2);
    }

    setLevel(newLevel);
    setCurrentExperience(finalExperience);
    setChallengeCompleted(challengeCompleted + 1);
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengeCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
