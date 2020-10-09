import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <MenuBar>
            <H2>Resumaker</H2>
            <MainMenu>
                <ListItem><Link to='/home'>Home</Link></ListItem>
                <ListItem><Link to='/makeit'>Make It</Link></ListItem>
                <ListItem><Link to='/printit'>Print It</Link></ListItem>
            </MainMenu>
        </MenuBar>
    )
}

const MenuBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: orange;
    height: 75px;
    padding: 0 15px;
`

const H2 = styled.h2`
    font-size: 26px;
`

const MainMenu = styled.ul`
    width: 25%;
    display: flex;
    justify-content: space-evenly;
`

const ListItem = styled.li`
    list-style: none;
    text-decoration: none;
`
