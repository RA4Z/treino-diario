import { useParams } from "react-router-dom"
import { useState } from 'react'
import styles from './Exercicio.module.scss'
import Treino from "components/Treino"

export default function Exercicio() {
    const { username } = useParams()
    const [selecionado, setSelecionado] = useState('')
    const treinos = ['A', 'B', 'C']
    function selecionarTreino(treino: string) {
        setSelecionado(treino)
        console.log(selecionado)
    }
    return (
        <div className={styles.container}>
            <p className={styles.title}>{username?.toUpperCase()}</p>
            <p className={styles.title__clean}>Treinos ativos</p>
            <div className={styles.treinos}>
                {treinos.map(treino => (
                    <Treino key={treino}
                        texto={treino}
                        onClick={() => selecionarTreino(treino)}
                        selected={selecionado === treino ? true : false} />
                ))}
            </div>

        </div>
    )
}