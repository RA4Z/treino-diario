import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import styles from './Exercicio.module.scss'
import Treino from "components/Treino"
import Card from "components/Card"
import Ginastica from 'assets/Ginastica.png'
import { infoUsuario } from "services/firestore"
import { exercicios } from "./info"

export default function Exercicio() {
    const { username } = useParams()
    const [selecionado, setSelecionado] = useState('A')
    const [paginaTreino, setPaginaTreino] = useState(0)
    const [infoTreino, setInfoTreino] = useState(exercicios)
    console.log(username!.charAt(0).toUpperCase() + username!.slice(1))
    if (username && infoTreino.nome === '') infoUsuario(username.charAt(0).toUpperCase() + username.slice(1), setInfoTreino)

    useEffect(() => {
        for (let i = 0; i < infoTreino.treinos.length; i++) {
            if (infoTreino.treinos[i].id === selecionado) {
                setPaginaTreino(i)
            }
        }
    }, [selecionado, infoTreino])

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
                {infoTreino.treinos[paginaTreino].exercicios.map(treino => (
                    <Card
                        key={treino.nome}
                        descricao={treino.descricao}
                        titulo={treino.nome}
                        imagem={treino.imagem ? treino.imagem : Ginastica}
                        tecnica={treino.tecnica} />
                ))

                }
            </div>

            <div className={styles.recomendacoes}>
                <h2 className={styles.recomendacoes__title}>Recomendações</h2>
                <p className={styles.recomendacoes__text}>{infoTreino.recomendacoes}</p>
            </div>
        </div>
    )
}