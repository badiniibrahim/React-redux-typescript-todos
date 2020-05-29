import React from 'react'

type Props = {
    title?: string;
    onClick?: any;
    arrowLeft?: boolean;
    arrowRight?: boolean;
}
const CustomButtom: React.FC<Props> = ({
    title,
    onClick
}) => {
    return(
        <button 
            className="custom-buttom"
            type='button'
            onClick={onClick}
         >
        {title}
        </button>
    )

}

export default CustomButtom;