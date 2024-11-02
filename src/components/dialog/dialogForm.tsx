import { clsx } from "clsx";
import { DialogContainerProps } from "./dialogtypes";

import styles from './dialog.module.sass'

export const DialogForm = (props: DialogContainerProps) => (
    <div className={clsx(styles['dialog__form'], props.classname)}>
        {props.children}
    </div>
)