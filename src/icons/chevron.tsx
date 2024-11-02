import { IconProps } from "../components/icon/icon";

export const ChevronIcon = (props: IconProps) => (

    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 32 32" 
        width={props.width}
        height={props.height}
        fill={props.fill}
        aria-labelledby="title"
        className={props.className}
    >
        <title lang="en">Chevron Icon</title>
        <path d="M8 12L16 20L24 12" stroke="#110006" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);