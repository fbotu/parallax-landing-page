import styles from '../styles/components/card.module.scss'

export const Card = (props) => {
    const header = props.header
    const src = props.src
    const alt = props.alt
    const title = props.title
    const text = props.text
    const footer = props.footer

    return (
        <div className={styles.card} >
            <div className={styles.cardHeader}>
                <h3>{header}</h3>
            </div>
            <div className={styles.cardImage}>
                <img src={src} alt={alt} />
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardTitle}>
                    <h4>{title}</h4>
                </div>
                <div className={styles.cardText}>
                    <p>{text}</p>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <h3>{footer}</h3>
            </div>
        </div>
    );
};
