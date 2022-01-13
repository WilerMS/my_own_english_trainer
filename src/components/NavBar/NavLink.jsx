import React, {useContext} from 'react'
import styled from 'styled-components'

import { useNavigate } from "react-router-dom"
import {ThemeContext} from './../../context/ThemeContext'

const NavLink = ({name, icon, index, path}) => {

    const {theme: {textColor}, activeNavLink} = useContext(ThemeContext)
    const navigate = useNavigate()
    const handleClick = () => {navigate(path)}

    return (
        <Container onClick={handleClick} className={activeNavLink === index ? 'active' : ''}>
            <div className='icon'>
                <img className={textColor} src={icon} alt="sword icon "/>
            </div>
            <span className={textColor}>{name}</span>
        </Container>
    )
}

const Container = styled.a`
    width: 100%;
    height: 100%;
    transition: all .3s ease-in;
    user-select: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .white {
        color: white;
    }

    .black {
        color: black;
    }

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;

        .white {
            filter: invert(1);
        }

        .black {
            filter: invert(0);
        }

        img {
            width: 35px;
            height: 35px;
            object-fit: contain;
            transition: filter .5s ease;
        }
    }

    span {
        position: absolute;
        font-weight: 600;
        opacity: 0;
        transition: all .3s ease;
        transition-delay: .3s;
        bottom: -50%;
    }

    &.active {
        transform: translateY(-50%);
        span {
            opacity: 1;
            bottom: -40%;
        }
    }
`;

export default NavLink;
