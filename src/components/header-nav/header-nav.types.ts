import { IconTypes } from "../icon/icon";

export type HeaderNavProps = Readonly<{
    children: React.ReactNode
    className?: string,
}>

export type HeaderNavBtnProps = Readonly<{
    label: string,
    isActive?: boolean,
    className?: string,

    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    component?: any,
    href?: string,
    icon: IconTypes,
  }>;