import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className={styles.completedChallengesContainer}>
            <div>
                <p>Missões completadas</p>
                <span>{challengesCompleted}</span>
            </div>
            <footer>
                <span>Contador de missões completadas durante o dia</span>
            </footer>
        </div>
    )
}