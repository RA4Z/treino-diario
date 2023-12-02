import styles from './Card.module.scss'

interface Props {
    titulo: string,
    imagem: string,
    descricao?: string,
    tecnica?: string,
    onClick?: (_: any) => any
}

export default function Card(props: Props) {
    let corTecnica = ''
    if (props.tecnica) {
        switch (props.tecnica) {
            case 'Progressão de carga':
                corTecnica = '#3F672E'
                break;
            case 'Rest Pause':
                corTecnica = '#A66136'
                break;
            case 'Controle de Movimento':
                corTecnica = '#949494'
                break;
            case 'Pico de Contração 2 Seg':
                corTecnica = '#7043CB'
                break;
            case 'Bi-Set':
                corTecnica = '#144485'
                break;
        }
    }
    return (
        <div className={styles.container}
            onClick={props.onClick}
            style={props.onClick && { cursor: 'pointer' }}>
            <div className={styles.title}>{props.titulo}</div>
            <div className={styles.container__img}>
                <img src={props.imagem} alt={props.titulo} />
            </div>
            {props.descricao && <p className={styles.description}>{props.descricao}</p>}
            {props.tecnica && <p className={styles.tecnicaColor} style={{ background: corTecnica }}>{props.tecnica}</p>}
        </div>
    )
}