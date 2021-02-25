import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export default function Profile(){
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/vitorfrota.png" alt="Vitor Frota"/>
            <div>
               <strong>Vitor Frota</strong> 
               
               <p>
                 <img src="icons/level.svg" alt=""/>
                  Level { level }
                </p>
            </div>
        </div>
    )
}