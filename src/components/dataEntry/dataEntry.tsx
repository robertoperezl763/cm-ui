import styles from './dataEntry.module.sass';


export type dataEntryprops = Readonly<{
    children?: React.ReactNode,
}>;



export const DataEntry = (props: dataEntryprops) => {


    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.header}>
                <h1>{props.header}</h1>
                <a href='#'>
                <Icon type={IconTypes.X} height={16} width={16}/>
                </a>
            </div> */}
            <div className={styles.interior}>
                {props.children}
            </div>
        </div>

    )

};