import React, {useContext, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'

import {ThemeContext} from './../context/ThemeContext'
import PageContainer from './../components/styled/PagesContainer'

import profilePhoto from './../assets/images/profile_2.jpg'

const Profile = () => {

    const {setActiveNavLink} = useContext(ThemeContext);

    useEffect(() => setActiveNavLink(3), [setActiveNavLink]);

    return (
        <PageContainer>

            <Container>

                <div className="profile__box">
                    
                    <div className="photo__container">
                        <div className="photo">
                            <img src={profilePhoto} alt="Foto de perfil" />
                        </div>
                    </div>
                    <div className="username__container">
                        <span>WILER MARIÑEZ</span>
                    </div>
                    
                </div>

                <div className="info__box">




                </div>

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
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    animation: ${initRoute} .5s ease;
    
    .profile__box {
        width: 100%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;

        .photo__container {
            width: 200px;
            height: 200px;
            border-radius: 100%;
            background: #1e1a3d;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;

            .photo {
                width: 90%;
                height: 90%;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    
                }
            }
        }

        .username__container {
            font-family: 'Quicksand', sans-serif;
            color: #1e1a3d;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            width: 90%;
            height: 60px;

        }
    }

`;

export default Profile;