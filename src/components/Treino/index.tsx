import styles from './Treino.module.scss'

interface Props {
    texto: string,
    selected: boolean
    onClick: (_: any) => any
}

export default function Treino(props: Props) {
    return (
        <button onClick={props.onClick} className={props.selected ? styles.container__selected : styles.container} >
            {props.texto}
        </button>
    )
}