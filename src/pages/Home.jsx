import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'

import {ThemeContext} from './../context/ThemeContext'
import PageContainer from './../components/styled/PagesContainer'

const Home = () => {

    const {setActiveNavLink} = useContext(ThemeContext);

    useEffect(() => setActiveNavLink(0), []);

    return (
        <PageContainer>

            <Container>

                <div className="text__box">
                    <span>Home</span>
                </div>
                <div className="answer__box">


                </div>

            </Container>

        </PageContainer>
    )
}

const Container = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 50px;
    
    .text__box {
        width: 100%;
        height: 40%;
        //background: red;
    }

    .answer__box {
        width: 100%;
        height: 60%;
        //background: green;
    }

`;

export default Home;
