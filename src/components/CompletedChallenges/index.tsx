import { useContext } from 'react'
import { ChallengesContext } from '../../providers/ChallengesContext'
import styled from './style.module.css'

export function CompletedChallenges(){
  const { challengeCompleted } = useContext(ChallengesContext)

  return (
    <div className={styled.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengeCompleted}</span>
    </div>
  )
}