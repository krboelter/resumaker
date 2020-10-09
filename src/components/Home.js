import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <MainDiv>
            <Name>Ken Boelter</Name>
            <Career>Career Path: Web Developer</Career>
            <ol>
                <li>Home will say, "Go to Make It tab to edit your information."</li>
                <li>Before it displays the user's information, you need to fill out the Make It portion</li>
                <li>Possibly only have save user information in a paid version</li>
                <li>Make It will have the place to edit your resume</li>
                <li>Make It will have options to chose the resume format you want</li>
                <li>Print it will display the resume that will be printed</li>
                <li>Print it will have a button that prints your resume to pdf (save as pdf)</li>
            </ol>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    width: 60%;
    margin: auto;
`

const Name = styled.h2`
    font-size: 50px;
`

const Career = styled.p`
    font-size: 28px;
`

export default Home;
