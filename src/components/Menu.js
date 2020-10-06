import React from 'react'
import styled from 'styled-components'

export default function Menu() {
    return (
        <MainMenu>
            <ListItem><a>Item One</a></ListItem>
        </MainMenu>
    )
}

const MainMenu = styled.ul`
    display: flex;
    justify-content:
`

const ListItem = styled.li`
    list-style: none;
`
