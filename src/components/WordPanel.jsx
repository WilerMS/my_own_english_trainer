import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import words from './../consts/words'

const WordPanel = ({currentWord}) => {

    const [fontSize, setFontSize] = useState(70)

    useEffect(() => {
        let word = words[currentWord].en.split(" ")
        let maxSize = 0
        word.forEach((w) => {
            maxSize = (maxSize > w.length) ? maxSize : w.length;
        });
        setFontSize( maxSize > 9 ? 50 : 70 )
    }, [currentWord]);

    return (
        <Container fontSize={fontSize} className="text__box">
            <div className="text">
                <span>{words[currentWord].en.toLowerCase()}</span>
            </div>
        </Container>
    )
}


const Container = styled.div`

    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: ${props => props.fontSize}px;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;
    color: #273036;
    width: 100%;
    height: 35%;

    span {
        transition: all .5s ease;
    }
`;

export default WordPanel