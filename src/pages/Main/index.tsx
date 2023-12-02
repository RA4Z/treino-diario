import styles from './Main.module.scss'
import { useState, useEffect } from 'react'
import Card from 'components/Card'
import { visualizarUser } from 'services/firestore'
import { useNavigate } from 'react-router-dom'

export default function Main() {
    const navigate = useNavigate()
    const [user, setUser] = useState([{ nome: '', imagem: '', personal: '' }])

    useEffect(() => {
        async function atualizarUser() {
            await visualizarUser(setUser)
        }
        atualizarUser()
    }, [])

    return (
        <div className={styles.container}>
            <h1>Usuários com treinos cadastrados</h1>
            <div className={styles.cards}>
                {user.map(atual => (
                    <Card imagem={atual.imagem}
                        titulo={atual.nome}
                        onClick={() => navigate(`/exercicio/${atual.nome}`)}
                        descricao={atual.personal} />
                ))}
            </div>
        </div>
    )
}