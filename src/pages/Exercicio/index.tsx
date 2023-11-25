import { useParams } from "react-router-dom"
import { useState } from 'react'
import styles from './Exercicio.module.scss'
import Treino from "components/Treino"
import Card from "components/Card"
import Prancha from 'assets/Prancha.png'
import { infoUsuario } from "services/firestore"
import { InfoTreinoUser } from "utils/User"
import { exercicios } from "./info"

export default function Exercicio() {
    const { username } = useParams()
    const [selecionado, setSelecionado] = useState('A')
    const [infoTreino, setInfoTreino] = useState(exercicios)
    //if (username && infoTreino.nome === '') infoUsuario("Robert", setInfoTreino)
    
    const treinos = ['A', 'B', 'C']
    return (
        <div className={styles.container}>
            <p className={styles.title}>{username?.toUpperCase()}</p>
            <p className={styles.title__clean}>Treinos ativos</p>
            <div className={styles.treinos}>
                {treinos.map(treino => (
                    <Treino key={treino}
                        texto={treino}
                        onClick={() => setSelecionado(treino)}
                        selected={selecionado === treino ? true : false} />
                ))}
            </div>
            <div className={styles.exercicios}>
                {infoTreino.treinos[0].exercicios.map(treino => (
                    <Card
                        descricao={treino.descricao}
                        titulo={treino.nome}
                        imagem={Prancha} />
                ))

                }
            </div>
        </div>
    )
}