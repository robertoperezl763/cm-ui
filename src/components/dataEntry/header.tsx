import styles from './dataEntry.module.sass';
import { IconTypes } from '../icon/icon';
import { Button } from '../button/button';

export type popupHeaderProps = Readonly<{
    children?: React.ReactNode,
    title: string,

}>;

export const PopupHeader = (props: popupHeaderProps) => {


    return (<div className={styles.header}>
                <h1>{props.title}</h1>
                <Button style='link' icon={IconTypes.X} iconHeight={16} iconWidth={16} />
            </div>
    )
};