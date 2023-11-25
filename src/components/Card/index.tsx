import styles from './Card.module.scss'

interface Props {
    titulo:string,
    imagem:string,
    descricao:string,
    tecnica?:string
}

export default function Card(props:Props) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.titulo}</div>
            <div className={styles.container__img}>
                <img src={props.imagem} alt={props.titulo} />
            </div>
            <p className={styles.description}>{props.descricao}</p>
            {props.tecnica && <p>{props.tecnica}</p>}
        </div>
    )
}