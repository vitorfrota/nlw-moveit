import { useContext, useEffect } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ExperienceBar.module.css'

function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    
    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel); 
    
    return (
        <header className={styles.experienceBar}>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />          
            </div> 
            <p>{currentExperience}
                <span>/{experienceToNextLevel}</span>
            </p>
        </header>
    )
}

export default ExperienceBar