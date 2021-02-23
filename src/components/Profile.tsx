import styles from '../styles/components/Profile.module.css'

export default function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/vitorfrota.png" alt="Vitor Frota"/>
            <div>
               <strong>Vitor Frota</strong> 
               
               <p>
                 <img src="icons/level.svg" alt=""/>
                  Level 1
                </p>
            </div>
        </div>
    )
}