import { IconProps } from "../components/icon/icon";

export const PlusIcon = (props: IconProps) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 32 32" 
        width={props.width} 
        height={props.height}
        fill={props.fill}
        aria-labelledby="title"
        className={props.className}
    >
        <title lang="en">Plus Icon</title>
        <path d="M16 6.66663V25.3333M6.66666 16H25.3333" stroke="#110006" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

);