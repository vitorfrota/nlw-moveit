import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { FiArrowUpRight } from 'react-icons/fi'
import styles from '../styles/components/Profile.module.css'

export default function Profile(){
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/vitorfrota.png" alt="Vitor Frota"/>
            <div>
               <strong>Vitor Frota</strong> 
               
               <p>
                 <FiArrowUpRight />
                  Level { level }
                </p>
            </div>
        </div>
    )
}