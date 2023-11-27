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

            <div className={styles.recomendacoes}>
                <p className={styles.recomendacoes__text} style={{ background: '#3F672E' }}>Progressão de carga: A cada Série aumente a carga de FORMA UNIFORME SEM EXAGEROS.</p>
                <p className={styles.recomendacoes__text} style={{ background: '#A66136' }}>Rest Pause: Faça a série de preferência próximo a falha, descanse 10-15 segundos e retorne até o máximo que conseguir</p>
                <p className={styles.recomendacoes__text} style={{ background: '#949494' }}>Controle de Movimento: Faça o controle tanto na excêntrica quanto concêntrica, desça e suba devagar controlando o peso e o movimento</p>
                <p className={styles.recomendacoes__text} style={{ background: '#7043CB' }}>Pico de Contração 2 Seg: Quando o músculo CONTRAIR, seguro por 2 segundos e então retorne à execução, assim sucessivamente</p>
                <p className={styles.recomendacoes__text} style={{ background: '#144485' }}>Bi-Set: Os dois exercícios ao mesmo tempo sem descanso entre ambos, assim que fez um comece o outro imediatamente, e descanse quando terminar de fazer os dois.</p>

            </div>
        </div>
    )
}