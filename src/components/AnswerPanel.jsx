import React from 'react'
import {isMobile} from 'react-device-detect'
import styled from 'styled-components'

import path from './../assets/icons/learn_svg.svg'
import SwipeAnswer from './../hooks/SwipeAnswer'
import Button from './Button'

const AnswerPanel = ({setCurrentWord}) => {

    const {
        classHiddenLeft, classHiddenRight, 
        currentRightTouch, currentLeftTouch, 
        touchStart,  touchMove,  touchEnd
    } = SwipeAnswer()

    const handleTouchEnd = (e) => {
        if (touchEnd(e)) {
            setTimeout(() => {
                setCurrentWord(Math.floor(Math.random() * 2999))
            }, 300); 
        }
    }
    
    return (
        <>
            { isMobile && (
                <BoxMobile onTouchStart={touchStart} onTouchMove={touchMove}
                        onTouchEnd={ handleTouchEnd} left={currentLeftTouch}
                        right={currentRightTouch}>
                    <span className="swipe">&lt;-- Swipe --&gt;</span>
                    <div className={`left ${classHiddenLeft}`}>
                        <span>NO</span>
                    </div>
                    <div className={`right ${classHiddenRight}`}>
                        <span>YES</span>
                    </div>
                </BoxMobile>
            )}
      
            { !isMobile && (
                <BoxWeb className="answer__box__pc">
                    <Button text="NO"/>
                    <Button text="YES"/>
                </BoxWeb>
            )}
        </>
    )
}

const BoxMobile = styled.div`
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: relative;
        width: 100%;
        height: 81%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Quicksand',sans-serif;
        font-weight: lighter;

        mask:url(${path}) center/contain no-repeat;
        position: relative;

        .swipe {
            position: absolute;
            top: 60%;
            color: #ffffff11;
            font-size: 3em;
        }

        div {
            position: fixed;
            width: 100%;
            height: 100%;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            color: white;
            font-size: 30px; 

            span { 
                position: absolute;
                top: 73%;
            }
            
            &.hidden { transition: right .2s ease, left .2s ease; }
            &.left   {background: #e7002765; left: ${props => props.left}%;}
            &.right  {background: #00cb6563; right: ${props => props.right}%;}
        }
`;

const BoxWeb = styled.div`
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;


export default AnswerPanel