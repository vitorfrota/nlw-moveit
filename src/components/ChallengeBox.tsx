import { useContext } from 'react';
import { FiEye, FiUser, FiChevronsUp } from 'react-icons/fi';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';


const icons = {
    body: <FiUser />,
    eye: <FiEye />
}

export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }
    
    return (
        <div className={styles.challengeBoxContainer}>
           {
               activeChallenge ? (
                   <div className={styles.challengeActive}>
                    <header>Sua nova missão</header>
                    <main>
                        <div>
                            {icons[activeChallenge.type]}
                            <strong>XP +{activeChallenge.amount}</strong>
                        </div>
                        <p>{activeChallenge.description}</p>  
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Cancelar
                        </button>
                        <button
                         type="button"
                         className={styles.challengeSuccededButton}
                         onClick={handleChallengeSucceded}
                        >
                            Concluir
                        </button>
                    </footer>
                   </div>
               ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Nenhuma missão disponível</strong>
                    <p>
                        <FiChevronsUp />
                        <span>Conclua um ciclo para ter novas missões</span>
                    </p>
                </div>
               )
           }
        </div>
    )
}