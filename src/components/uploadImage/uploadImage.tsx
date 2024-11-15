import { Label } from '../label/label';
import styles from './uploadImage.module.sass';
import { Icon,IconTypes } from '../icon/icon';
import { useRef, useState } from 'react';

export type dataEntryprops = Readonly<{
    isReq: boolean
    id: string,
    formId: string,
}>;

export const UploadImage = (props: dataEntryprops) => {
    const [selectedImage, setSelectedImage] = useState<string>();
    const fileInput: React.MutableRefObject<HTMLInputElement | null> = useRef(null)
    //  createRef<HTMLInputElement>();

    function handleClick() {
        if (fileInput.current) {
            fileInput.current.click()
        }
    }

    const handleRemove = () => {
        setSelectedImage("");
        if (fileInput.current) {
            fileInput.current.value = ""
        }
    };

    return(
    <div>
        <Label>
            <strong>Upload Image:</strong>
        </Label>
        <div className={styles.wrap_control}>
            {selectedImage? (
                        <img
                        className={styles.image}
                        src={selectedImage}
                        onClick={handleRemove}
                        />
                    ): (
                    <button type='button' className={styles.image_wrapper} onClick={handleClick}>
                        <Icon type={IconTypes.Image} fill='none'/>
                    </button>
                    )
                    }
            
        </div>
            <input 
                type='file'
                name={props.id}
                id={props.id} 
                form={props.formId}
                ref={fileInput}
                required={props.isReq}
                className={styles.input}
                accept=".jpg, .jpeg, .png"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    setSelectedImage(
                        file ? URL.createObjectURL(file) :
                        undefined
                    );
                }
                }
                />
    </div>
    )
};