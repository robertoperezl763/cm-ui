import styles from './itemCard.module.sass';

export type ItemCardProps = Readonly<{
    hasAuthor: boolean,
    hasSeries: boolean,
    itemName: string,
    children?: React.ReactNode,
    className?: string,
    imageUrl?: string,
    description?: string,
    author?: string,
    series?: string,
    itemid?: string,
}>;


export const ItemCard = (props: ItemCardProps) => {
    let className = props.className ? `${styles.card} ${props.className}` : styles.card;
    let itemBody = {
        author: (props.hasAuthor) ? <p className={styles.nowrap}>
                                        <strong>Author: </strong> 
                                        {props.author}
                                    </p> :
                                     <></>,
        series: (props.hasSeries) ? <p className={styles.nowrap}>
                                        <strong>Series: </strong> 
                                        {props.series}
                                    </p> : 
                                    <></>,
    }
    return (
        <div className={className} id={props.itemid}>
            <div className={styles.itemCard__wrapper}>
                <img src={props.imageUrl} />
                <div className={styles.textWrapper1}>

                    <p><strong>{props.itemName}</strong></p>
                    <p>{props.description}</p>

                </div>
                
                <div className={styles.textWrapper2}>
                    {itemBody.author}
                    {itemBody.series}
                </div>
                {props.children}


            </div>
        </div>

    )

};