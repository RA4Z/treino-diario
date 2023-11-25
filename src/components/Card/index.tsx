import styles from './Card.module.scss'
import Prancha from 'assets/Prancha.png'

export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Prancha Frontal</div>
            <div className={styles.container__img}>
                <img src={Prancha} alt="Prancha" />
            </div>
            <p className={styles.description}>3x 1 minuto</p>
        </div>
    )
}