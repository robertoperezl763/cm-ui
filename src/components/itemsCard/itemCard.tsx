import styles from './itemCard.module.sass';

export type ItemCardProps = Readonly<{
    // hasAuthor: boolean,
    // hasSeries: boolean,
    // itemName: string,
    children?: React.ReactNode,
    className?: string,
    // imageUrl?: string,
    // description?: string,
    // author?: string,
    // series?: string,
    itemid?: string,
}>;


export const ItemCard = (props: ItemCardProps) => {
    let className = props.className ? `${styles.itemCard__wrapper} ${props.className}` : styles.itemCard__wrapper;

    return (
        <div className='p-0 m-0' id={props.itemid}>
            <div className={className}>

                {/* <img src={props.imageUrl} />
                <div className={styles.textWrapper1}>

                    <p><strong>{props.itemName}</strong></p>
                    <p>{props.description}</p>

                </div>
                
                <div className={styles.textWrapper2}>
                    {itemBody.author}
                    {itemBody.series}
                </div> */}
                {props.children}


            </div>
        </div>

    )

};