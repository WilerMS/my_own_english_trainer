import React, {useContext} from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'

import {ThemeContext} from './../../context/ThemeContext'

import gamesIcon from '../../assets/icons/apps-outline.svg'
import practiceIcon from '../../assets/icons/book-outline.svg'
import homeIcon from './../../assets/icons/home-outline.svg'
import profileIcon from '../../assets/icons/person-circle-outline.svg'

const NavBar = () => {

    const {theme: {indicatorColor}, activeNavLink} = useContext(ThemeContext)

    return (
        <Container indicatorIndex={activeNavLink} indicatorColor={indicatorColor}>
            <NavLink path="/" name='Home' index={0} icon={homeIcon}/>
            <NavLink path="/learn" name='Learn' index={1} icon={practiceIcon}/>
            <NavLink path="/games" name='Games' index={2} icon={gamesIcon} />
            <NavLink path="/profile" name='Profile' index={3} icon={profileIcon} />
            <div className="indicator"></div>
        </Container>
    )
}

const Container = styled.nav`
    
    height: 75px;
    width: 100%;
    position: fixed;
    z-index: 5;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .indicator {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: all .5s ease;
        z-index: -1;
        position: absolute;
        width: 75px;
        height: 75px;
        background: ${props => props.indicatorColor};
        left: calc( ((${props => props.indicatorIndex} + 1) * (100vw / 4) - (100vw / 4) / 2) - 37.5px);
        bottom: 37.5px;
        border-radius: 50%;
    }
`;

export default NavBar;
