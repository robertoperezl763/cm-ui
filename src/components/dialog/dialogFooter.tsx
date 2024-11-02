import { clsx } from "clsx";
import { DialogContainerProps } from "./dialogtypes";

import styles from './dialog.module.sass'

export const DialogFooter = (props: DialogContainerProps) => (
    <footer className={clsx(styles['dialog__footer'], props.classname)}>
        {props.children}
    </footer>
)