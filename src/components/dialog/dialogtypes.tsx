export type DialogProps = {
    children?: React.ReactNode,
    isOpen?: boolean,
    onKeyDown?: React.KeyboardEventHandler,
    onClose?: React.EventHandler<any>,
    title?: string,
    hasCloseBtn?: boolean,
    className?: string,
};

export type DialogHookReturnType = [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
    React.KeyboardEventHandler
]

export type DialogContainerProps = Readonly<{
    classname?: string,
    children?: React.ReactNode,
}>