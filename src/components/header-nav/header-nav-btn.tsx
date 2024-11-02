import styles from './header-nav.module.sass'
import clsx from 'clsx'
import { Icon } from '../icon/icon'

import { HeaderNavBtnProps } from './header-nav.types'

export const HeaderNavBtn = (props: HeaderNavBtnProps) => {
    const WrapComponent: any = props.component

    const sharedProps = {
        className: clsx(
            styles['header-nav__btn'],
            props.isActive && styles['header-nav__tbn--is-active'],
            props.className
        ),
        'aria-label': props.label,
        title: props.label
    };

    if (WrapComponent) {
        return(
            <WrapComponent
                {...sharedProps}
                onClick={props.onClick}
                href={props.href}
            >
                <Icon type={props.icon} width={27} height={24} fill='currentColor' />
                <div className={styles['header-nav__btn__label']}>
                    <div className={styles['header-nav__btn__label__inner']}>{props.label}</div>
                </div>
                </WrapComponent>
        );
    }

    return (
        <button
            {...sharedProps}
            onClick={props.onClick}
        >
            <Icon type={props.icon} width={27} height={24} fill='none' />
                <div className={styles['header-nav__btn__label']}>
                    <div className={styles['header-nav__btn__label__inner']}>{props.label}</div>
                </div>
        </button>
    );
}