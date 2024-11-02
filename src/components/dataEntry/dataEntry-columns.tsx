import styles from './dataEntry.module.sass'

type columnsProps = Readonly<{
    children?: React.ReactNode,
}>

export const Columns = (props:columnsProps) => (
    <div className={styles.columns}>
        {props.children}
    </div>
);
    
