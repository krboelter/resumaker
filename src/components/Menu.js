import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <MainMenu>
            <ListItem><Link to=''>Item One</Link></ListItem>
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
