import React, {useContext, useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'

import {ThemeContext} from './../context/ThemeContext'
import PageContainer from './../components/styled/PagesContainer'
import AnswerPanel from './../components/AnswerPanel'
import WordPanel from './../components/WordPanel'

const Learn = () => {

    const {setActiveNavLink} = useContext(ThemeContext)
    useEffect(() => setActiveNavLink(1), []);

    const [currentWord, setCurrentWord] = useState(Math.floor(Math.random() * 2999))

    return (
        <PageContainer>
            <Container>
                <WordPanel currentWord={currentWord}/>
                <AnswerPanel setCurrentWord={setCurrentWord}/>
            </Container>
        </PageContainer>
    )
}

const initRoute = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    animation: ${initRoute} .5s ease;
`;

export default Learn;