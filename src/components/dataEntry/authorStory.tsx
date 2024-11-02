import { Input } from '../input/input';
import styles from './dataEntry.module.sass'

type authorStoryInputProps = Readonly<{
    children?: React.ReactNode,
    vars: {
        hasAuthor: boolean,
        hasSeries: boolean
    }

}>

export const AuthorStoryInput = (props:authorStoryInputProps) => {

    let { hasAuthor, hasSeries } = props.vars
    
    return (
    <div className={styles.doubleRow}>
        {hasAuthor ? <Input type='text' className={styles.small} placeholder='Enter Author Name'/> : 
            null}
        {hasSeries ? <Input type='text' className={styles.small} placeholder='Enter Series Name'/> :
            null}

    </div> 
    )
};
    