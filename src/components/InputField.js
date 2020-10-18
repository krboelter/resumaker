import React from 'react'
import styled from 'styled-components'

export default function InputField(props) {
    return (
        <Set>
            <Input
                placeholder = `${props.fieldItem}`
            />
        </Set>
    )
}

const Set = styled.div`
    width: 80%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 100%;
    height: 40px;
    background-color: orange;
    border: 4px solid #5e5e5e;
    border-radius: 10px;
`
