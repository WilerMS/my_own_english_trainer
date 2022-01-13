import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components'

import {ThemeContext} from './context/ThemeContext'

import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Games from './pages/Games'
import Profile from './pages/Profile'

import Wave from './components/Wave'

const App = () => {

    const {theme: {background}} = useContext(ThemeContext);

    return (
      <Container bg={background} className='App'>
        <Wave/>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route index path="/" element={<Home/>} />
            <Route index path="/learn" element={<Learn/>} />
            <Route index path="/games" element={<Games/>} />
            <Route index path="/profile" element={<Profile/>} />
          </Routes>
          <NavBar/>
        </BrowserRouter>
      </Container>
    );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.bg};
  transition: background .5s ease;
`;

export default App;
