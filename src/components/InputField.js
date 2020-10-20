import React from 'react'
import styled from 'styled-components'

export default function InputField(props) {
    return (
        <Container>
            <Label>{props.fieldKey}:</Label>
            <Input
                name = {props.name}
                placeholder = {props.fieldKey}
                value = {props.value}
                onChange = {props.onChange}
            />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    width: 80%;
    margin: auto;
    text-transform: capitalize;
    font-size: 16px;
    font-weight: bold;
`

const Input = styled.input`
    width: 80%;
    margin: 2px auto 8px auto;
    height: 40px;
    background-color: orange;
    border: 4px solid #5e5e5e;
    border-radius: 10px;
`
