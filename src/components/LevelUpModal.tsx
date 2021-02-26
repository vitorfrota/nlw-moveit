import { useContext } from 'react'
import { FiX } from 'react-icons/fi';
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Novo level</strong>
                <p>Você avançou para o próximo level</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <FiX />
                </button>
            </div>
        </div>
    )
}