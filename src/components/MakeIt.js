import React from 'react';
import styled from 'styled-components'

export default function MakeIt() {
    return (
        <Container>
            <H2>Build your resume here!</H2>
            <P>All you need to do is fill out the information below and resumaker will do the rest!</P>
            <Form>
                <SetContainer>
                    <Set>
                        <Label>Fist and Last Name</Label>
                        <Input
                            placeholder='Name'
                        />
                    </Set>
                </SetContainer>
                <Set>
                    <Label>City</Label>
                    <Input
                        placeholder='City'
                    />
                </Set>
                <Set>
                    <Label>State</Label>
                    <Input
                        placeholder='State'
                    />
                </Set>
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
    display: flex;
    justify-content: space-between;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Set = styled.div`
    width: 40%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    width: 100%;
    color: blue;
`

const Input = styled.input`
    width: 100%;
`
