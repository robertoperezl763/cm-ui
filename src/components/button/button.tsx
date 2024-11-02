import styles from './button.module.sass'
import { Icon, IconTypes } from '../icon/icon';
import clsx from 'clsx';



type ButtonProps = Readonly<{
    children?: React.ReactNode,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    icon?: IconTypes
    iconWidth?: number,
    iconHeight?: number,
    style?: 'link',
    type?: 'button' | 'submit'
}>;


export const Button = (props: ButtonProps) => (
    <button 
        onClick={props.onClick} 
        className={clsx(
            styles['button'],
            props.className,
            props.style && styles[`button--${props.style}`]

        )}
        type={props.type}
            // `${styles['button']} ${props.className} ${styles[`button--${props.style}`]}`}
        >
        { props.icon ? (
            <span className={props.children ? styles['button__icon'] : styles['button__content']}>
                <Icon type={props.icon} width={props.iconWidth || 14} height={props.iconHeight || 14} fill="currentColor" />
            </span>
        ): null}
        <span className={styles['button__content']}>
            {props.children}
        </span>
    </button>
);

