import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import InputField from './InputField'

export default function MakeIt() {
    const [fieldItems, setFieldItems] = useState({
        name: "Ken Boelter",
        email: "krboelter@gmail.com",
        phone_number: "208-577-1562",
        city: "West Jordan",
        state: "Utah"
    })

    const [links, setLinks] = useState({
        github: "",
        linkedin: "",
        portfolio: "",
    })

    const [resumeBody, setResumeBody] = useState({
        name: "",
        email: "",
        phone_number: "",
        city: "",
        state: ""
    })

    return (
        <Container>
            <H2>Build your resume here!</H2>
            <P>All you need to do is fill out the information below and resumaker will do the rest!</P>
            <Form>
                <SetContainer>
                    Personal Information
                    {Object.entries(fieldItems).map(([key, value]) => (
                        <div>
                            <InputField fieldKey={key} value={value} />
                        </div>
                    ))}
                </SetContainer>
                <SetContainer>
                    Links
                    {Object.entries(links).map(([key, value]) => (
                        <div>
                            <InputField fieldKey={key} value={value} />
                        </div>
                    ))}
                </SetContainer>
                <SetContainer>
                    Resume Body
                    {Object.entries(resumeBody).map(([key, value]) => (
                        <div>
                            <InputField fieldKey={key} value={value} />
                        </div>
                    ))}
                </SetContainer>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
`

const H2 = styled.h2`
    margin: 6px auto;
    text-align: center;
    font-size: 38px;
`

const P = styled.p`
    margin: 6px auto;
    text-align: center;
    font-size: 16px;
`

const SetContainer = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
`

const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Label = styled.label`
    width: 100%;
    color: blue;
`

const Input = styled.input`
    width: 100%;
`
