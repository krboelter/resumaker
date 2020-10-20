import React from 'react'
import styled from 'styled-components'

export default function InputField(props) {
    return (
        <div>
            <Label>{props.key}</Label>
            <Input
                placeholder = {props.key}
                value = {props.value}
            />
        </div>
    )
}

const Label = styled.label`
    width: 100%;
`

const Input = styled.input`
    width: 100%;
    height: 40px;
    background-color: orange;
    border: 4px solid #5e5e5e;
    border-radius: 10px;
`
