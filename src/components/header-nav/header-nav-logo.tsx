import styles from './header-nav.module.sass'

export const HeaderNavLogo = () => (
    <svg className={styles['sidebar-nav__logo']} width="33" height="47" fill="currentColor" viewBox="0 0 38 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8L8 24M8 8L24 24" stroke="#110006" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)