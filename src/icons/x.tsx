import { IconProps } from "../components/icon/icon";

export const XIcon = (props: IconProps) => (

    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={props.width}
        height={props.height}
        viewBox="0 0 32 32" 
        fill={props.fill}
        aria-labelledby="title"
        className={props.className}
    >
        <title lang="en">X Icon</title>
        <path d="M24 8L8 24M8 8L24 24" stroke="#110006" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);