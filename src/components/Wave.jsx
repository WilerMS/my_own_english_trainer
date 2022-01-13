import React, {useContext} from 'react'
import styled from 'styled-components'

import {ThemeContext} from './../context/ThemeContext'
import {fills} from '../consts/designUitls'

const Wave = () => {

    const {theme: {fill}, activeNavLink} = useContext(ThemeContext);

    return (
        <Svg
            id='svg'
            color={fill}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            preserveAspectRatio='none'
        >
                <path fillOpacity="1" d={fills[activeNavLink]}></path>
        </Svg>
    )
}

const Svg = styled.svg`
    position: absolute;
    width: 100%;
    height: 70%;
    bottom: 0;
    fill: ${props => props.color};

    path {
        transition: all .5s ease;
        -webkit-transition: all .5s ease;
        -moz-transition: all .5s ease;
        -o-transition: all .5s ease;
        fill: ${props => props.fill};
    }
`;


export default Wave;