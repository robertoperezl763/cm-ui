import clsx from 'clsx'
import styles from './header-nav.module.sass'
import { HeaderNavProps } from './header-nav.types'

export const HeaderNav = (props: HeaderNavProps) => {
    //somehow have a hook for logged In State - modify header nav based on if user is logged in or not

    return (
    <div className={clsx(styles['header-nav'], props.className)}>
        {props.children}
    </div>
    );
}