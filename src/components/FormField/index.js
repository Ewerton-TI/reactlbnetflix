import React from 'react';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
position: relative;
textarea{
    min-height: 150px;
}
input[type="color"]{
    padding-left: 56px; 
}
`;


const Label = styled.label``;
Label.Text = styled.span`
color: #e5e5e5;
height:57px;
position: absolute;
top:0;
left:16px;

display:flex;
align-items: center;

transform-origin: 0% 0%;
font-size:18px;
font-style: normal;
font-weight: 300;

transition: .1s ease-in-out;
`;


const Input = styled.input`
background: #53585D;
color: #f5f5f5;
display: block;
width:100%;
height:57px;
font-size:18px;

outline:0;
border:0;
border-top: 4px solid transparent;
border-bottom: 4px solid #53585d;

padding: 16px 16px;
margin-bottom: 45px;

resize:none;
border-radius: 4px;
transition: border-color .3s;

&:focus{
border-bottom-color:var(--primary);
}

&:focus:not([type="color"]) + span{
    transform: scale(.7) translateY(-10px);
}
${({hasvalue}) => hasvalue && css`
    &:not([type="color"]) + span{
    transform: scale(.7) translateY(-10px);
        }
    `}
`;

function FormField({ label, type, name, value, onChange, textarea, }){
    const isTextarea = type ==='textarea';
    const tag = isTextarea ? 'textarea':'input';

    const hasvalue = Boolean(value.length);

    return(
        <FormFieldWrapper>
            <Label>
                <Input 
                as={tag}
                type={type}
                value={value}
                name={name}
                hasvalue={hasvalue}
                onChange={onChange}
                />
                <Label.Text>
                {label}:
                </Label.Text>
            </Label>
            
        </FormFieldWrapper>
    )
}

export default FormField;