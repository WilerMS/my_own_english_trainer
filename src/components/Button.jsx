import React from 'react'
import styled from 'styled-components'

const Button = ({text}) => {

    return (
        <Container>
            <span>{text}</span>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 20%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    border: 2px solid #f0f0f0;
    //background: #ffffff5e;
    cursor: pointer;
    overflow: hidden;
    transition: all .5s ease;

    font-size: 30px;
    color: white;

    span {
        z-index: 2;
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 100%;
        transition: top .5s ease;
        background: #f0f0f0;
    }

    &:hover {
        color: black;

        &::after {
            top: 0;
        }
    }

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

`;

export default Button