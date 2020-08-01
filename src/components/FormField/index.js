import React from 'react';


function FormField({ label, type, name, value, onChange, textarea, }){
    return(
        <div>
            <label>
                {label}:
                <input type={type}
                value={value}
                name={name}
                onChange={onChange}
                />
            </label>
            
        </div>
    )
}

export default FormField;