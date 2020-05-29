import React from 'react'

type InputSetting = {
    text?: string,
    value?: any,
    placeholder?: string,
    onBlur?: any,
    defaultValue?: any,
    oninputChange?: any,
    type?: string
}


const CustomInput: React.FC<InputSetting> = setting => (
    <div className="custom-input">
        <input className="custom-input__input"
            onChange={setting.oninputChange}
            placeholder={setting.placeholder}
            value={setting.value}
            defaultValue={setting.defaultValue}
            type={setting.type}
        />
    </div>
)

export default CustomInput;