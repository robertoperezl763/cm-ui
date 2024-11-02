import styles from './collectionCard.module.sass';

export type CollectionCardProps = Readonly<{
    children?: React.ReactNode,
    className?: string,
    collectionName: string,
    imageUrl?: string,
    description?: string,
}>;


export const CollectionCard = (props: CollectionCardProps) => {
    let className = props.className ? `${styles.card} ${props.className}` : styles.card;

    return (
        <div className={className}>
            <div className={styles['card_wrapper']}>
                <h1 className={styles.card__header}>
                    {props.collectionName}
                </h1>
                <hr/>
                <img className={styles.card__img} src={props.imageUrl}/>
                <p className={styles.card__content}>
                    {props.description}
                </p>
                <div className={styles.card__cta}>
                    {props.children}
                </div>
            </div>
        </div>

    )

};