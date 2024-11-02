import styles from './dataEntry.module.sass'

type rowProps = Readonly<{
    children?: React.ReactNode
}>

export const Rows = (props: rowProps) => {
    
    return(
        <div className={styles.rows}>{props.children}</div>
    );
    
    // if (props.vertical) {
    //     {console.log("this is vertical")}
    //     return(<div className={styles.values_vertical}>{props.children}</div>)
        
    // } else {
    //     {console.log("this is horizontal")}
    //     return(<div className={styles.values_horizontal}>{props.children}</div>)
    // }
};