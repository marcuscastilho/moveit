import styled from './style.module.css'

export function CompletedChallenges(){
  return (
    <div className={styled.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  )
}