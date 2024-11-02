import { PlusIcon } from '../../icons/plus';
import { CameraIcon } from '../../icons/camera';
import { ChevronIcon } from '../../icons/chevron';
import { ImageIcon } from '../../icons/imageIcon';
import { NewUserIcon } from '../../icons/new_user';
import { SettingsIcon } from '../../icons/settings';
import { VerticalMoreIcon } from '../../icons/vertical_more';
import { XIcon } from '../../icons/x';
import { SearchIcon } from '../../icons/search';

export enum IconTypes {
    Plus = 1,
    Camera,
    Chevron,
    Image,
    NewUser,
    Settings,
    VerticalMore,
    X,
    Search,
};

export type IconProps = Readonly<{
    width?: number,
    height?: number,
    fill?: string,
    type?: IconTypes 
    className?: string,
}>;

export const Icon = (props: IconProps) => {

    const iconProps = {
        ...props,
        className: props.className ? `${props.className}` : 'icon',
    }

    switch (props.type) {
        case IconTypes.Plus:
            return <PlusIcon {...iconProps}/>
        case IconTypes.Camera:
            return <CameraIcon {...iconProps}/>
        case IconTypes.Chevron:
            return <ChevronIcon {...iconProps}/>
        case IconTypes.Image:
            return <ImageIcon {...iconProps}/>
        case IconTypes.NewUser:
            return <NewUserIcon {...iconProps}/>
        case IconTypes.Settings:
            return <SettingsIcon {...iconProps}/>
        case IconTypes.VerticalMore:
            return <VerticalMoreIcon {...iconProps}/>    
        case IconTypes.X:
            return <XIcon {...iconProps}/>
        case IconTypes.Search:
            return<SearchIcon {...iconProps}/>
    }
    
};