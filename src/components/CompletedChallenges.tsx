import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completados</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}