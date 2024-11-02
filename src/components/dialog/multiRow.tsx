import { clsx } from "clsx";
import { DialogContainerProps } from "./dialogtypes";

import styles from './dialog.module.sass'

export const MultiRow = (props: DialogContainerProps) => (
    <div className={clsx(styles['dialog__multiRow'], props.classname)}>
        {props.children}
    </div>
)