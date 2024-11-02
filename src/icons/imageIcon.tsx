import { IconProps } from "../components/icon/icon";

export const ImageIcon = (props: IconProps) => (

    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={props.width}
        height={props.height}
        viewBox="0 0 32 32" 
        fill={props.fill}
        aria-labelledby="title"
        className={props.className}
    >
        <title>Image Placeholder Icon</title>
        <path d="M6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28ZM6.66667 28L21.3333 13.3333L28 20M13.3333 11.3333C13.3333 12.4379 12.4379 13.3333 11.3333 13.3333C10.2288 13.3333 9.33333 12.4379 9.33333 11.3333C9.33333 10.2288 10.2288 9.33333 11.3333 9.33333C12.4379 9.33333 13.3333 10.2288 13.3333 11.3333Z" stroke="#110006" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

);



