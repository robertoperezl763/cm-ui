import styles from './input.module.sass'
import { Icon, IconTypes } from '../icon/icon';

interface InputProps extends React.HTMLProps<HTMLInputElement> {}


export const Input = (props: InputProps) => {
    let className = props.className ? `${props.className} ${styles.input}` : styles.input;

    if (props.type === 'checkbox' || props.type === 'radio') {
        return <input {...props} className={props.className ? `${styles.checkbox} ${props.className}` : styles.checkbox}/>
    };


    return (
        <div className={styles['input__wrapper']}>
            <input {...props} className={className}/>
            {props.type === 'search' ? <Icon type={IconTypes.Search} width={14} height={14} />: null}
        </div>
    )

};